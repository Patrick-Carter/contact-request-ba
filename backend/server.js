const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const server = express();

server.use(cors());

server.use(express.json());
server.use(fileUpload());

server.post("/form", (req, res, next) => {
  console.log(req);

  console.log(req.body.agentName);

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

  res.status(200).json({ mes: "you did it" });
});

server.listen(5000, () => {
  console.log("server started on port 5000");
});
