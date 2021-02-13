import React, { useState } from "react";
import axios from "axios";

import Label from "../../shared/components/label/Label";
import Card from "../../shared/components/card/Card";
import styles from "./contact-request.module.css";

const KEY = {
  AGENTNAME: "agentName",
  BUYERNAME: "buyerName",
  CLOSINGDATE: "closingDate",
  PROPERTYADDRESS: "propertyAddress",
  SALEPRICE: "salePrice",
  FINANCETYPE: "financeType",
  EARNEST: "earnest",
  PAIDBY: "paidBy",
  SHORTAGES: "shortages",
  PROPERTYOFHOA: "propertyOfHOA",
  SURVEY: "survey",
  PROPERTYACCEPTANCE: "propertyAcceptance",
  RESSERVICECONTRACT: "resServiceContract",
  POSSESSIONOFPROPERTY: "possessionProperty",
  SELLERCONCESSIONS: "sellerConcessions",
  OPTIONPERIOD: "optionPeriod",
  ADDITIONALADDENDUMS: "additionalAddendums",
  PREAPPROVALLETTER: "preapprovalLetter",
  SELLERDISCLOSURE: "sellerDisclosure",
};

const ContactRequest = (props) => {
  const [formInput, setFormInput] = useState({
    agentName: "",
    buyerName: "",
    closingDate: "",
    propertyAddress: "",
    salesPrice: "",
    finaceType: "",
    earnest: "",
    paidBy: "seller",
    shortages: "not amended",
    propertyOfHOA: "yes",
    survey: "",
    propertyAcceptance: "",
    residentialServiceContract: "",
    possessionOfProperty: "",
    sellerConcessions: "",
    optionPeriod: "",
    additionalAddendums: "",
    preapprovalLetterFile: "",
    sellersDisclosureFile: "",
  });

  const handleFormState = (e, input) => {
    switch (input) {
      case KEY.AGENTNAME:
        setFormInput({
          ...formInput,
          agentName: e.target.value,
        });
        break;
      case KEY.BUYERNAME:
        setFormInput({
          ...formInput,
          buyerName: e.target.value,
        });
        break;
      case KEY.CLOSINGDATE:
        setFormInput({
          ...formInput,
          closingDate: e.target.value,
        });
        break;
      case KEY.PROPERTYADDRESS:
        setFormInput({
          ...formInput,
          propertyAddress: e.target.value,
        });
        break;
      case KEY.SALEPRICE:
        setFormInput({
          ...formInput,
          salesPrice: e.target.value,
        });
        break;
      case KEY.FINANCETYPE:
        setFormInput({
          ...formInput,
          finaceType: e.target.value,
        });
        break;
      case KEY.EARNEST:
        setFormInput({
          ...formInput,
          earnest: e.target.value,
        });
        break;
      case KEY.PAIDBY:
        setFormInput({
          ...formInput,
          paidBy: e.target.value,
        });
        break;
      case KEY.SHORTAGES:
        setFormInput({
          ...formInput,
          shortages: e.target.value,
        });
        break;
      case KEY.PROPERTYOFHOA:
        setFormInput({
          ...formInput,
          propertyOfHOA: e.target.value,
        });
        break;
      case KEY.SURVEY:
        setFormInput({
          ...formInput,
          survey: e.target.value,
        });
        break;
      case KEY.PROPERTYACCEPTANCE:
        setFormInput({
          ...formInput,
          propertyAcceptance: e.target.value,
        });
        break;
      case KEY.RESSERVICECONTRACT:
        setFormInput({
          ...formInput,
          residentialServiceContract: e.target.value,
        });
        break;
      case KEY.POSSESSIONOFPROPERTY:
        setFormInput({
          ...formInput,
          possessionOfProperty: e.target.value,
        });
        break;
      case KEY.SELLERCONCESSIONS:
        setFormInput({
          ...formInput,
          sellerConcessions: e.target.value,
        });
        break;
      case KEY.OPTIONPERIOD:
        setFormInput({
          ...formInput,
          optionPeriod: e.target.value,
        });
        break;
      case KEY.ADDITIONALADDENDUMS:
        setFormInput({
          ...formInput,
          additionalAddendums: e.target.value,
        });
        break;
      case KEY.SELLERDISCLOSURE:
        setFormInput({
          ...formInput,
          sellersDisclosureFile: e.target.files[0],
        });
        break;
      case KEY.PREAPPROVALLETTER:
        setFormInput({
          ...formInput,
          preapprovalLetterFile: e.target.files[0],
        });
        break;
      default:
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (formInput.sellersDisclosureFile !== "") {
      formData.append("sellersDisclosure", formInput.sellersDisclosureFile);
    }
    if (formInput.preapprovalLetterFile !== "") {
      formData.append("preapprovalLetter", formInput.preapprovalLetterFile);
    }

    formData.append("agentName", formInput.agentName);
    formData.append("buyerName", formInput.buyerName);
    formData.append("closingDate", formInput.closingDate);
    formData.append("propertyAddress", formInput.propertyAddress);
    formData.append("salesPrice", formInput.salesPrice);
    formData.append("finaceType", formInput.finaceType);
    formData.append("earnest", formInput.earnest);
    formData.append("paidBy", formInput.paidBy);
    formData.append("shortages", formInput.shortages);
    formData.append("propertyOfHOA", formInput.propertyOfHOA);
    formData.append("survey", formInput.survey);
    formData.append("propertyAcceptance", formInput.propertyAcceptance);
    formData.append(
      "residentialServiceContract",
      formInput.residentialServiceContract
    );
    formData.append("possessionOfProperty", formInput.possessionOfProperty);
    formData.append("sellerConcessions", formInput.sellerConcessions);
    formData.append("optionPeriod", formInput.optionPeriod);
    formData.append("additionalAddendums", formInput.additionalAddendums);

    try {
      const res = await axios.post("http://localhost:5000/form", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(res);
    } catch {}
  };

  return (
    <form id="contact-request-form" onSubmit={handleSubmit}>
      <Card cardState="current">
        <Label label="Monument Agent" labelFor="agent-name" require={true} />
        <input
          type="text"
          name="agent-name"
          required
          value={formInput.agentName}
          onChange={(e) => handleFormState(e, KEY.AGENTNAME)}
        />

        <Label label="Buyer Name(s)" labelFor="buyer-name" require={true} />
        <input
          type="text"
          name="buyer-name"
          required
          value={formInput.buyerName}
          onChange={(e) => handleFormState(e, KEY.BUYERNAME)}
        />

        <Label label="Closing Date" labelFor="closing-date" require={true} />
        <input
          type="date"
          name="closing-date"
          min="2021-01-01"
          required
          value={formInput.closingDate}
          onChange={(e) => handleFormState(e, KEY.CLOSINGDATE)}
        />
        <button className={styles.nextButton}>Next</button>
      </Card>
      {/* <label htmlFor="property-address">Property Address</label>
      <input
        type="text"
        name="property-address"
        required
        value={formInput.propertyAddress}
        onChange={(e) => handleFormState(e, KEY.PROPERTYADDRESS)}
      />

      <label htmlFor="sale-price">Sales Price</label>
      <input
        type="text"
        name="sale-price"
        required
        value={formInput.salesPrice}
        onChange={(e) => handleFormState(e, KEY.SALEPRICE)}
      />

      <label htmlFor="finace-type">Type of Financing and % Down</label>
      <input
        type="text"
        name="finace-type"
        required
        value={formInput.finaceType}
        onChange={(e) => handleFormState(e, KEY.FINANCETYPE)}
      />

      <label htmlFor="earnest">Earnest Money and Title Company</label>
      <input
        type="text"
        name="earnest"
        required
        value={formInput.earnest}
        onChange={(e) => handleFormState(e, KEY.EARNEST)}
      />

      <label htmlFor="paid-by">Title Policy Paid By</label>
      <select
        name="paid-by"
        value={formInput.paidBy}
        onChange={(e) => handleFormState(e, KEY.PAIDBY)}
      >
        <option value="seller">Seller</option>
        <option value="buyer">Buyer</option>
        <option value="split">Split</option>
      </select>

      <label htmlFor="shortages">Shortages</label>
      <select
        name="shortages"
        required
        value={formInput.shortages}
        onChange={(e) => handleFormState(e, KEY.SHORTAGES)}
      >
        <option value="not amended">Not Amended</option>
        <option value="buyer cost">Buyer Cost</option>
        <option value="seller cost">Seller Cost</option>
      </select>

      <label htmlFor="property-in-hoa">Property in HOA</label>
      <select
        name="property-in-hoa"
        required
        value={formInput.propertyOfHOA}
        onChange={(e) => handleFormState(e, KEY.PROPERTYOFHOA)}
      >
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <label htmlFor="survey">Survey</label>
      <input
        type="text"
        name="survey"
        required
        value={formInput.survey}
        onChange={(e) => handleFormState(e, KEY.SURVEY)}
      />

      <label htmlFor="sellers-disclosure">
        Seller's Disclosure (if not in transaction desk)
      </label>
      <input
        type="file"
        name="sellers-disclosure"
        value={formInput.sellersDisclosure}
        onChange={(e) => handleFormState(e, KEY.SELLERDISCLOSURE)}
      />

      <label htmlFor="property-acceptance">
        Property Acceptance (if not as is)
      </label>
      <input
        type="text"
        name="property-acceptance"
        value={formInput.propertyAcceptance}
        onChange={(e) => handleFormState(e, KEY.PROPERTYACCEPTANCE)}
      />

      <label htmlFor="residential-service">Residential Service Contract</label>
      <input
        type="text"
        name="residential-service"
        required
        value={formInput.residentialServiceContract}
        onChange={(e) => handleFormState(e, KEY.RESSERVICECONTRACT)}
      />

      <label htmlFor="possession-of-property">Possession of Property</label>
      <input
        type="text"
        name="possession-of-property"
        required
        value={formInput.possessionOfProperty}
        onChange={(e) => handleFormState(e, KEY.POSSESSIONOFPROPERTY)}
      />

      <label htmlFor="seller-concessions">Seller Concessions</label>
      <input
        type="text"
        name="seller-concessions"
        required
        value={formInput.sellerConcessions}
        onChange={(e) => handleFormState(e, KEY.SELLERCONCESSIONS)}
      />

      <label htmlFor="option-period">Option Period</label>
      <input
        type="text"
        name="option-period"
        required
        value={formInput.optionPeriod}
        onChange={(e) => handleFormState(e, KEY.OPTIONPERIOD)}
      />

      <label htmlFor="additional-addendums">
        Any Additional Addendums/Terms required
      </label>
      <input
        type="text"
        name="additional-addendums"
        value={formInput.additionalAddendums}
        onChange={(e) => handleFormState(e, KEY.ADDITIONALADDENDUMS)}
      />

      <label htmlFor="preapproval-letter">Buyer Pre-approval Letter</label>
      <input
        type="file"
        name="preapproval-letter"
        value={formInput.preapprovalLetter}
        onChange={(e) => handleFormState(e, KEY.PREAPPROVALLETTER)}
      />
      <button type="submit">Submit</button> */}
    </form>
  );
};

export default ContactRequest;
