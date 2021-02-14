module.exports = ({
  agentName,
  buyerName,
  propertyAddress,
  salesPrice,
  finaceType,
  earnest,
  paidBy,
  shortages,
  propertyOfHOA,
  propertyAcceptance,
  residentialServiceContract,
  possessionOfProperty,
  sellerConcessions,
  optionPeriod,
  additionalAddendums,
  survey,
  closingDate,
}) => {
  const today = new Date();
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>PDF Result Template</title>
      <style>
        .h1 {
          color: black;
        }
      </style>
    </head>
    <body>
      <h1>Contact Request Form</h1>
      >
      <h2>Monument Agent</h2>
      <p>${agentName}</p>
      <h2>Buyer Name(s)</h2>
      <p>${buyerName}</p>
      <h2>Closing Date</h2>
      <p>${closingDate}</p>
      <h2>Property Address</h2>
      <p>${propertyAddress}</p>
      <h2>Sales Price</h2>
      <p>${salesPrice}</p>
      <h2>Type of Financing and % Down</h2>
      <p>${finaceType}</p>
      <h2>Earnest Money & Title Company</h2>
      <p>${earnest}</p>
      <h2>Title Policy Paid By</h2>
      <p>${paidBy}</p>
      <h2>Shortages</h2>
      <p>${shortages}</p>
      <h2>Survey</h2>
      <p>${survey}</p>
      <h2>Property in HOA</h2>
      <p>${propertyOfHOA}</p>
      <h2>Property Acceptance (if not as is)</h2>
      <p>${propertyAcceptance}</p>
      <h2>Residential Service Contrac</h2>
      <p>${residentialServiceContract}</p>
      <h2>Possession of Property</h2>
      <p>${possessionOfProperty}</p>
      <h2>Seller Concessions</h2>
      <p>${sellerConcessions}</p>
      <h2>Option Period</h2>
      <p>${optionPeriod}</p>
      <h2>Any additional Addendums/Terms required</h2>
      <p>${additionalAddendums}</p>
    </body>
  </html>
    `;
};
