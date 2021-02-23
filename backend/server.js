const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
require("dotenv").config();
const pdf = require("html-pdf");
const path = require("path");

const ContractRequestTemplate = require("./templates/ContractRequest");
const sendEmail = require("./util/sendEmail");

const server = express();

server.use(cors());

server.use(express.json());
server.use(fileUpload());

server.use(express.static(path.join("public")));

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
    .toFile("contact-request.pdf", (err, fileinfo) => {
      if (err) {
        console.log(err);
        res.status(500).json({ mes: "something went wrong" });
      } else {
        // MAKE EMAIL
        if (sellerDisclosure && preapprovalLetter) {
          sendEmail.all(
            sellerDisclosure.name,
            preapprovalLetter.name,
            req.body.emailRecipients,
            `${process.env.EMAIL}`
          );
        } else if (sellerDisclosure) {
          sendEmail.oneExtraFile(
            sellerDisclosure.name,
            req.body.emailRecipients,
            `${process.env.EMAIL}`,
          );
        } else if (preapprovalLetter) {
          sendEmail.oneExtraFile(
            preapprovalLetter.name,
            req.body.emailRecipients,
            `${process.env.EMAIL}`,
          );
        } else {
          sendEmail.pdfOnly(req.body.emailRecipients, `${process.env.EMAIL}`);
        }
        res.status(200).json({ mes: "you did it" });
      }
    });
});

server.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

server.listen(5001, () => {
  console.log("server started on port 5001");
});
