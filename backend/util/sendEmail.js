const sgMail = require("@sendgrid/mail");
const fs = require("fs");

//set Sendgrid API key
sgMail.setApiKey(process.env.SGAPIKEY);

function all(sellerDisclosure, preapprovalLetter, recipients, senderEmail) {
  // setup all attachments

  //contact request
  const pathToRequest = `${__dirname}/../contact-request.pdf`;
  const requestAttactment = (attachment = fs
    .readFileSync(pathToRequest)
    .toString("base64"));

  // seller disclosure
  const pathToDisclosure = `${__dirname}/../uploads/${sellerDisclosure}`;
  const disclosureAttactment = (attachment = fs
    .readFileSync(pathToDisclosure)
    .toString("base64"));

  //preapproval letter
  const pathToPreApprovalLetter = `${__dirname}/../uploads/${preapprovalLetter}`;
  const preApprovalLetterAttactment = (attachment = fs
    .readFileSync(pathToPreApprovalLetter)
    .toString("base64"));

  // send mail with defined transport object
  console.log(sellerDisclosure, preapprovalLetter);

  const msg = {
    to: recipients.trim(),
    from: senderEmail.trim(),
    subject: "New Contact Request",
    text: "Attached is a new contract request form.",
    attachments: [
      {
        content: requestAttactment,
        filename: "ContractRequest.pdf",
        type: "application/pdf",
        disposition: "attachment",
      },
      {
        content: disclosureAttactment,
        filename: sellerDisclosure,
        type: "application/unknown",
        disposition: "attachment",
      },
      {
        content: preApprovalLetterAttactment,
        filename: preapprovalLetter,
        type: "application/unknown",
        disposition: "attachment",
      },
    ],
  };

  sgMail
    .send(msg)
    .then(() => console.log("all email sent"))
    .catch((err) => console.log(err));
}

async function pdfOnly(recipients, senderEmail) {
  const pathToRequest = `${__dirname}/../contact-request.pdf`;
  const requestAttactment = (attachment = fs
    .readFileSync(pathToRequest)
    .toString("base64"));

  const msg = {
    to: recipients.trim(),
    from: senderEmail.trim(),
    subject: "New Contact Request",
    text: "Attached is a new contract request form.",
    attachments: [
      {
        content: requestAttactment,
        filename: "ContractRequest.pdf",
        type: "application/pdf",
        disposition: "attachment",
      },
    ],
  };

  sgMail
    .send(msg)
    .then(() => console.log("all email sent"))
    .catch((err) => console.log(err));
}

async function oneExtraFile(extraFile, recipients, senderEmail) {
  const pathToRequest = `${__dirname}/../contact-request.pdf`;
  const requestAttactment = (attachment = fs
    .readFileSync(pathToRequest)
    .toString("base64"));

  const pathToDisclosure = `${__dirname}/../uploads/${extraFile}`;
  const extraAttactment = (attachment = fs
    .readFileSync(pathToDisclosure)
    .toString("base64"));

  const msg = {
    to: recipients.trim(),
    from: senderEmail.trim(),
    subject: "New Contact Request",
    text: "Attached is a new contract request form.",
    attachments: [
      {
        content: requestAttactment,
        filename: "ContractRequest.pdf",
        type: "application/pdf",
        disposition: "attachment",
      },
      {
        content: extraAttactment,
        filename: extraFile,
        type: "application/unknown",
        disposition: "attachment",
      },
    ],
  };

  sgMail
    .send(msg)
    .then(() => console.log("extraFile email sent"))
    .catch((err) => console.log(err));
}

exports.all = all;
exports.pdfOnly = pdfOnly;
exports.oneExtraFile = oneExtraFile;
