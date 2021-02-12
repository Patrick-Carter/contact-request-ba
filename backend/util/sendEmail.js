const nodemailer = require("nodemailer");

async function all(
  sellerDisclosure,
  preapprovalLetter,
  recipients,
  senderEmail,
  transporter
) {
  // send mail with defined transport object

  try {
    let info = await transporter.sendMail({
      from: `"BethAnne Realtor Solutions" <${senderEmail}>`, // sender address
      to: `${recipients}`, // list of receivers
      subject: "Contact Request Form", // Subject line
      text: "Below you will find important attachments.", // plain text body
      attachments: [
        {
          path: `${__dirname}/../contact-request.pdf`,
        },
        {
          path: `${__dirname}/../uploads/${sellerDisclosure}`,
        },
        {
          path: `${__dirname}/../uploads/${preapprovalLetter}`,
        },
      ],
    });
  } catch (err) {
    console.log(err);
  }
}

async function pdfOnly(recipients, senderEmail, transporter) {
  // send mail with defined transport object

  try {
    let info = await transporter.sendMail({
      from: `"BethAnne Realtor Solutions" <${senderEmail}>`, // sender address
      to: `${recipients}`, // list of receivers
      subject: "Contact Request Form", // Subject line
      text: "Below you will find important attachments.", // plain text body
      attachments: [
        {
          path: `${__dirname}/../contact-request.pdf`,
        },
      ],
    });
  } catch (err) {
    console.log(err);
  }
}

async function oneExtraFile(extraFile, recipients, senderEmail, transporter) {
  // send mail with defined transport object

  try {
    let info = await transporter.sendMail({
      from: `"BethAnne Realtor Solutions" <${senderEmail}>`, // sender address
      to: `${recipients}`, // list of receivers
      subject: "Contact Request Form", // Subject line
      text: "Below you will find important attachments.", // plain text body
      attachments: [
        {
          path: `${__dirname}/../contact-request.pdf`,
        },
        {
          path: `${__dirname}/../uploads/${extraFile}`,
        },
      ],
    });
  } catch (err) {
    console.log(err);
  }
}

exports.all = all;
exports.pdfOnly = pdfOnly;
exports.oneExtraFile = oneExtraFile;
