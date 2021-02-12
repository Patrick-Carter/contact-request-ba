const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const pdf = require("html-pdf");
const nodemailer = require("nodemailer");
require("dotenv").config();

const ContractRequestTemplate = require("./templates/ContractRequest");

const server = express();

server.use(cors());

server.use(express.json());
server.use(fileUpload());

server.post("/form", (req, res, next) => {

  if (req.files !== null && req.files.sellersDisclosure) {
    const sellerDisclosure = req.files.sellersDisclosure;

    sellerDisclosure.mv(
      `${__dirname}/uploads/${sellerDisclosure.name}`,
      (err) => {
        if (err) {
          console.log(err);
          return res.status(500).send(err);
        }
      }
    );
  }

  if (req.files !== null && req.files.preapprovalLetter) {
    const preapprovalLetter = req.files.preapprovalLetter;

    preapprovalLetter.mv(
      `${__dirname}/uploads/${preapprovalLetter.name}`,
      (err) => {
        if (err) {
          console.log(err);
          return res.status(500).send(err);
        }
      }
    );
  }

  // GENERATE PDF

  pdf
    .create(ContractRequestTemplate(req.body), {})
    .toFile("contact-request.pdf", (err) => {
      if (err) {
        console.log(err);
      }
    });

  // MAKE EMAIL

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: `${process.env.EMAIL}`,
      pass: `${process.env.PASSWORD}`,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // send mail with defined transport object
  let info = transporter.sendMail({
    from: '"BethAnne Realtor Solutions" <kantros13@gmail.com>', // sender address
    to: "pcarter@pdcmix.com", // list of receivers
    subject: "Contact Request Form", // Subject line
    text: "Below you will find important attachments.", // plain text body
    attachments: [
      {
        path: `${__dirname}/contact-request.pdf`,
      },
      {
        path: `${__dirname}/uploads/CanWeCollabPic.jpg`,
      },
      {
        path: `${__dirname}/uploads/yunglo.jpg`,
      },
    ],
  });

  res.status(200).json({ mes: "you did it" });
});

server.listen(5000, () => {
  console.log("server started on port 5000");
});
