const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const pdf = require("html-pdf");
const nodemailer = require("nodemailer");

const ContractRequestTemplate = require("./templates/ContractRequest");
const sendEmail = require("./util/sendEmail");

const server = express();

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

server.use(cors());

server.use(express.json());
server.use(fileUpload());

server.post("/form", (req, res, next) => {
  let sellerDisclosure;
  let preapprovalLetter;

  if (req.files !== null && req.files.sellersDisclosure) {
    sellerDisclosure = req.files.sellersDisclosure;

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
    preapprovalLetter = req.files.preapprovalLetter;

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
  if (sellerDisclosure && preapprovalLetter) {
    sendEmail.all(
      sellerDisclosure.name,
      preapprovalLetter.name,
      req.body.emailRecipients,
      `${process.env.EMAIL}`,
      transporter
    );
    console.log("both");
  } else if (sellerDisclosure) {
    sendEmail.oneExtraFile(
      sellerDisclosure.name,
      req.body.emailRecipients,
      `${process.env.EMAIL}`,
      transporter
    );
  } else if (preapprovalLetter) {
    sendEmail.oneExtraFile(
      preapprovalLetter.name,
      req.body.emailRecipients,
      `${process.env.EMAIL}`,
      transporter
    );
  } else {
    sendEmail.pdfOnly(
      req.body.emailRecipients,
      `${process.env.EMAIL}`,
      transporter
    );
  }

  console.log("Email Sent");

  res.status(200).json({ mes: "you did it" });
});

server.listen(5000, () => {
  console.log("server started on port 5000");
});
