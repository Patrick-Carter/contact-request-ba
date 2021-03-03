import React, { useState } from "react";
import axios from "axios";

import companyLogo from "../../content/internal/monument-logo.png";
import Label from "../../shared/components/label/Label";
import Card from "../../shared/components/card/Card";
import "./contact-request.css";

// there are 7 steps in the form

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
  BUYEREMAIL: "buyerEmail",
};

const CARDSTATE = {
  CURRENT: "current",
  OUT: "out",
  DEAD: "dead",
};

const CARDID = {
  CARDONE: 1,
  CARDTWO: 2,
  CARDTHREE: 3,
  CARDFOUR: 4,
  CARDFIVE: 5,
  CARDSIX: 6,
  CARDSEVEN: 7,
};

const PRO = {
  ACTIVE: "proDotActive",
  INACTIVE: "proDotInactive",
};

const TC = {
  MICHELLE: " michelleking@monumentstar.com",
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
    paidBy: "NA",
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
    buyerEmail: "",
  });

  const [cardState, setCardState] = useState({
    cardOne: CARDSTATE.CURRENT,
    cardTwo: CARDSTATE.DEAD,
    cardThree: CARDSTATE.DEAD,
    cardFour: CARDSTATE.DEAD,
    cardFive: CARDSTATE.DEAD,
    cardSix: CARDSTATE.DEAD,
    cardSeven: CARDSTATE.DEAD,
  });

  const [proActive, setProActive] = useState({
    dotOne: PRO.ACTIVE,
    dotTwo: PRO.INACTIVE,
    dotThree: PRO.INACTIVE,
    dotFour: PRO.INACTIVE,
    dotFive: PRO.INACTIVE,
    dotSix: PRO.INACTIVE,
    dotSeven: PRO.INACTIVE,
  });

  const [recipients, setRecipients] = useState({
    michelleKing: false,
    recipientList: "",
  });

  const [displayForm, setDisplayForm] = useState(true);

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
      case KEY.BUYEREMAIL:
        setFormInput({
          ...formInput,
          buyerEmail: e.target.value,
        });
        break;
      default:
    }
  };

  const handleCurrentCard = (e, currentCard) => {
    switch (currentCard) {
      case CARDID.CARDONE:
        setCardState({
          ...cardState,
          cardOne: CARDSTATE.OUT,
          cardTwo: CARDSTATE.CURRENT,
        });
        setProActive({
          dotOne: PRO.INACTIVE,
          dotTwo: PRO.ACTIVE,
          dotThree: PRO.INACTIVE,
          dotFour: PRO.INACTIVE,
          dotFive: PRO.INACTIVE,
          dotSix: PRO.INACTIVE,
          dotSeven: PRO.INACTIVE,
        });
        break;
      case CARDID.CARDTWO:
        setCardState({
          ...cardState,
          cardTwo: CARDSTATE.OUT,
          cardThree: CARDSTATE.CURRENT,
        });
        setProActive({
          dotOne: PRO.INACTIVE,
          dotTwo: PRO.INACTIVE,
          dotThree: PRO.ACTIVE,
          dotFour: PRO.INACTIVE,
          dotFive: PRO.INACTIVE,
          dotSix: PRO.INACTIVE,
          dotSeven: PRO.INACTIVE,
        });
        break;
      case CARDID.CARDTHREE:
        setCardState({
          ...cardState,
          cardThree: CARDSTATE.OUT,
          cardFour: CARDSTATE.CURRENT,
        });
        setProActive({
          dotOne: PRO.INACTIVE,
          dotTwo: PRO.INACTIVE,
          dotThree: PRO.INACTIVE,
          dotFour: PRO.ACTIVE,
          dotFive: PRO.INACTIVE,
          dotSix: PRO.INACTIVE,
          dotSeven: PRO.INACTIVE,
        });
        break;
      case CARDID.CARDFOUR:
        setCardState({
          ...cardState,
          cardFour: CARDSTATE.OUT,
          cardFive: CARDSTATE.CURRENT,
        });
        setProActive({
          dotOne: PRO.INACTIVE,
          dotTwo: PRO.INACTIVE,
          dotThree: PRO.INACTIVE,
          dotFour: PRO.INACTIVE,
          dotFive: PRO.ACTIVE,
          dotSix: PRO.INACTIVE,
          dotSeven: PRO.INACTIVE,
        });
        break;
      case CARDID.CARDFIVE:
        setCardState({
          ...cardState,
          cardFive: CARDSTATE.OUT,
          cardSix: CARDSTATE.CURRENT,
        });
        setProActive({
          dotOne: PRO.INACTIVE,
          dotTwo: PRO.INACTIVE,
          dotThree: PRO.INACTIVE,
          dotFour: PRO.INACTIVE,
          dotFive: PRO.INACTIVE,
          dotSix: PRO.ACTIVE,
          dotSeven: PRO.INACTIVE,
        });
        break;
      case CARDID.CARDSIX:
        setCardState({
          ...cardState,
          cardSix: CARDSTATE.OUT,
          cardSeven: CARDSTATE.CURRENT,
        });
        setProActive({
          dotOne: PRO.INACTIVE,
          dotTwo: PRO.INACTIVE,
          dotThree: PRO.INACTIVE,
          dotFour: PRO.INACTIVE,
          dotFive: PRO.INACTIVE,
          dotSix: PRO.INACTIVE,
          dotSeven: PRO.ACTIVE,
        });
        break;
      default:
    }
  };

  const handleDots = (e, dot) => {
    switch (dot) {
      case CARDID.CARDONE:
        setProActive({
          dotOne: PRO.ACTIVE,
          dotTwo: PRO.INACTIVE,
          dotThree: PRO.INACTIVE,
          dotFour: PRO.INACTIVE,
          dotFive: PRO.INACTIVE,
          dotSix: PRO.INACTIVE,
          dotSeven: PRO.INACTIVE,
        });
        setCardState({
          cardOne: CARDSTATE.CURRENT,
          cardTwo: CARDSTATE.DEAD,
          cardThree: CARDSTATE.DEAD,
          cardFour: CARDSTATE.DEAD,
          cardFive: CARDSTATE.DEAD,
          cardSix: CARDSTATE.DEAD,
          cardSeven: CARDSTATE.DEAD,
        });
        break;
      case CARDID.CARDTWO:
        setProActive({
          dotOne: PRO.INACTIVE,
          dotTwo: PRO.ACTIVE,
          dotThree: PRO.INACTIVE,
          dotFour: PRO.INACTIVE,
          dotFive: PRO.INACTIVE,
          dotSix: PRO.INACTIVE,
          dotSeven: PRO.INACTIVE,
        });
        setCardState({
          cardOne: CARDSTATE.DEAD,
          cardTwo: CARDSTATE.CURRENT,
          cardThree: CARDSTATE.DEAD,
          cardFour: CARDSTATE.DEAD,
          cardFive: CARDSTATE.DEAD,
          cardSix: CARDSTATE.DEAD,
          cardSeven: CARDSTATE.DEAD,
        });
        break;
      case CARDID.CARDTHREE:
        setProActive({
          dotOne: PRO.INACTIVE,
          dotTwo: PRO.INACTIVE,
          dotThree: PRO.ACTIVE,
          dotFour: PRO.INACTIVE,
          dotFive: PRO.INACTIVE,
          dotSix: PRO.INACTIVE,
          dotSeven: PRO.INACTIVE,
        });
        setCardState({
          cardOne: CARDSTATE.DEAD,
          cardTwo: CARDSTATE.DEAD,
          cardThree: CARDSTATE.CURRENT,
          cardFour: CARDSTATE.DEAD,
          cardFive: CARDSTATE.DEAD,
          cardSix: CARDSTATE.DEAD,
          cardSeven: CARDSTATE.DEAD,
        });
        break;
      case CARDID.CARDFOUR:
        setProActive({
          dotOne: PRO.INACTIVE,
          dotTwo: PRO.INACTIVE,
          dotThree: PRO.INACTIVE,
          dotFour: PRO.ACTIVE,
          dotFive: PRO.INACTIVE,
          dotSix: PRO.INACTIVE,
          dotSeven: PRO.INACTIVE,
        });
        setCardState({
          cardOne: CARDSTATE.DEAD,
          cardTwo: CARDSTATE.DEAD,
          cardThree: CARDSTATE.DEAD,
          cardFour: CARDSTATE.CURRENT,
          cardFive: CARDSTATE.DEAD,
          cardSix: CARDSTATE.DEAD,
          cardSeven: CARDSTATE.DEAD,
        });
        break;
      case CARDID.CARDFIVE:
        setProActive({
          dotOne: PRO.INACTIVE,
          dotTwo: PRO.INACTIVE,
          dotThree: PRO.INACTIVE,
          dotFour: PRO.INACTIVE,
          dotFive: PRO.ACTIVE,
          dotSix: PRO.INACTIVE,
          dotSeven: PRO.INACTIVE,
        });
        setCardState({
          cardOne: CARDSTATE.DEAD,
          cardTwo: CARDSTATE.DEAD,
          cardThree: CARDSTATE.DEAD,
          cardFour: CARDSTATE.DEAD,
          cardFive: CARDSTATE.CURRENT,
          cardSix: CARDSTATE.DEAD,
          cardSeven: CARDSTATE.DEAD,
        });
        break;
      case CARDID.CARDSIX:
        setProActive({
          dotOne: PRO.INACTIVE,
          dotTwo: PRO.INACTIVE,
          dotThree: PRO.INACTIVE,
          dotFour: PRO.INACTIVE,
          dotFive: PRO.INACTIVE,
          dotSix: PRO.ACTIVE,
          dotSeven: PRO.INACTIVE,
        });
        setCardState({
          cardOne: CARDSTATE.DEAD,
          cardTwo: CARDSTATE.DEAD,
          cardThree: CARDSTATE.DEAD,
          cardFour: CARDSTATE.DEAD,
          cardFive: CARDSTATE.DEAD,
          cardSix: CARDSTATE.CURRENT,
          cardSeven: CARDSTATE.DEAD,
        });
        break;
      case CARDID.CARDSEVEN:
        setProActive({
          dotOne: PRO.INACTIVE,
          dotTwo: PRO.INACTIVE,
          dotThree: PRO.INACTIVE,
          dotFour: PRO.INACTIVE,
          dotFive: PRO.INACTIVE,
          dotSix: PRO.INACTIVE,
          dotSeven: PRO.ACTIVE,
        });
        setCardState({
          cardOne: CARDSTATE.DEAD,
          cardTwo: CARDSTATE.DEAD,
          cardThree: CARDSTATE.DEAD,
          cardFour: CARDSTATE.DEAD,
          cardFive: CARDSTATE.DEAD,
          cardSix: CARDSTATE.DEAD,
          cardSeven: CARDSTATE.CURRENT,
        });
        break;
      default:
    }
  };

  const handelFormReset = () => {
    setFormInput({
      agentName: "",
      buyerName: "",
      closingDate: "",
      propertyAddress: "",
      salesPrice: "",
      finaceType: "",
      earnest: "",
      paidBy: "NA",
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

    setCardState({
      cardOne: CARDSTATE.CURRENT,
      cardTwo: CARDSTATE.DEAD,
      cardThree: CARDSTATE.DEAD,
      cardFour: CARDSTATE.DEAD,
      cardFive: CARDSTATE.DEAD,
      cardSix: CARDSTATE.DEAD,
      cardSeven: CARDSTATE.DEAD,
    });

    setProActive({
      dotOne: PRO.ACTIVE,
      dotTwo: PRO.INACTIVE,
      dotThree: PRO.INACTIVE,
      dotFour: PRO.INACTIVE,
      dotFive: PRO.INACTIVE,
      dotSix: PRO.INACTIVE,
      dotSeven: PRO.INACTIVE,
    });

    setRecipients({
      michelleKing: false,
      recipientList: "",
    });

    setDisplayForm(true);
  };

  const handleRecipients = (e, tc) => {
    switch (tc) {
      case TC.MICHELLE:
        setRecipients({
          ...recipients,
          michelleKing: !recipients.michelleKing,
          recipientList: recipients.michelleKing
            ? recipients.recipientList.replace(TC.MICHELLE, "").trim()
            : recipients.recipientList.concat(TC.MICHELLE),
        });
        break;

      default:
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setDisplayForm(false);

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
    formData.append("emailRecipients", recipients.recipientList);
    formData.append("buyerEmail", formInput.buyerEmail);

    try {
      const res = await axios.post("http://solverealty.us/form", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(res);
    } catch {}
  };

  return (
    <div className="contractContainer">
      {displayForm && (
        <div>
          <h1 className="cantractTitle">Contract Request Form</h1>
          <form id="contact-request-form" onSubmit={handleSubmit}>
            {/* FIRST CARD */}

            <Card cardState={cardState.cardOne}>
              <Label label="Monument Agent" labelFor="agent-name" require />
              <input
                type="text"
                name="agent-name"
                className="form-input"
                value={formInput.agentName}
                onChange={(e) => handleFormState(e, KEY.AGENTNAME)}
              />

              <Label label="Buyer Name(s)" labelFor="buyer-name" require />
              <input
                type="text"
                name="buyer-name"
                className="form-input"
                value={formInput.buyerName}
                onChange={(e) => handleFormState(e, KEY.BUYERNAME)}
              />

              <Label label="Closing Date" labelFor="closing-date" require />
              <input
                type="date"
                name="closing-date"
                min="2021-01-01"
                className="form-input"
                value={formInput.closingDate}
                onChange={(e) => handleFormState(e, KEY.CLOSINGDATE)}
              />
              <button
                className="nextButton"
                onClick={(e) => handleCurrentCard(e, CARDID.CARDONE)}
                type="button"
              >
                Next
              </button>
            </Card>

            {/* SECOND CARD */}
            <Card cardState={cardState.cardTwo}>
              <Label
                label="Property Address"
                labelFor="property-address"
                require
              />
              <input
                type="text"
                name="property-address"
                className="form-input"
                value={formInput.propertyAddress}
                onChange={(e) => handleFormState(e, KEY.PROPERTYADDRESS)}
              />

              <Label label="Sales Price" labelFor="sale-price" require />
              <input
                type="text"
                name="sale-price"
                className="form-input"
                value={formInput.salesPrice}
                onChange={(e) => handleFormState(e, KEY.SALEPRICE)}
              />

              <Label
                label="Type of Financing and % Down"
                labelFor="finace-type"
                require
              />
              <input
                type="text"
                name="finace-type"
                className="form-input"
                value={formInput.finaceType}
                onChange={(e) => handleFormState(e, KEY.FINANCETYPE)}
              />
              <button
                className="nextButton"
                onClick={(e) => handleCurrentCard(e, CARDID.CARDTWO)}
                type="button"
              >
                Next
              </button>
            </Card>

            {/* THIRD CARD */}
            <Card cardState={cardState.cardThree}>
              <Label
                label="Earnest Money and Title Company"
                labelFor="earnest"
                require
              />
              <input
                type="text"
                name="earnest"
                className="form-input"
                value={formInput.earnest}
                onChange={(e) => handleFormState(e, KEY.EARNEST)}
              />

              <Label label="Title Policy Paid By" labelFor="paid-by" />
              <select
                name="paid-by"
                className="form-input"
                value={formInput.paidBy}
                onChange={(e) => handleFormState(e, KEY.PAIDBY)}
              >
                <option value="seller">Seller</option>
                <option value="buyer">Buyer</option>
                <option value="split">Split</option>
              </select>

              <Label label="Shortages" labelFor="shortages" require />
              <select
                name="shortages"
                className="form-input"
                value={formInput.shortages}
                onChange={(e) => handleFormState(e, KEY.SHORTAGES)}
              >
                <option value="not amended">Not Amended</option>
                <option value="buyer cost">Buyer Cost</option>
                <option value="seller cost">Seller Cost</option>
              </select>
              <button
                className="nextButton"
                onClick={(e) => handleCurrentCard(e, CARDID.CARDTHREE)}
                type="button"
              >
                Next
              </button>
            </Card>

            {/* FORTH CARD */}
            <Card cardState={cardState.cardFour}>
              <Label
                label="Property in HOA"
                labelFor="property-in-hoa"
                require
              />
              <select
                name="property-in-hoa"
                className="form-input"
                value={formInput.propertyOfHOA}
                onChange={(e) => handleFormState(e, KEY.PROPERTYOFHOA)}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

              <Label label="Survey" labelFor="survey" require />
              <input
                type="text"
                name="survey"
                className="form-input"
                value={formInput.survey}
                onChange={(e) => handleFormState(e, KEY.SURVEY)}
              />

              <Label
                label="Property Acceptance (if not as is)"
                labelFor="property-acceptance"
              />
              <input
                type="text"
                name="property-acceptance"
                className="form-input"
                value={formInput.propertyAcceptance}
                onChange={(e) => handleFormState(e, KEY.PROPERTYACCEPTANCE)}
              />
              <button
                className="nextButton"
                onClick={(e) => handleCurrentCard(e, CARDID.CARDFOUR)}
                type="button"
              >
                Next
              </button>
            </Card>

            {/* FIFTH CARD */}
            <Card cardState={cardState.cardFive}>
              <Label
                label="Residential Service Contract"
                labelFor="residential-service"
                require
              />
              <input
                type="text"
                name="residential-service"
                className="form-input"
                value={formInput.residentialServiceContract}
                onChange={(e) => handleFormState(e, KEY.RESSERVICECONTRACT)}
              />

              <Label
                label="Possession of Property"
                labelFor="possession-of-property"
                require
              />
              <input
                type="text"
                name="possession-of-property"
                className="form-input"
                value={formInput.possessionOfProperty}
                onChange={(e) => handleFormState(e, KEY.POSSESSIONOFPROPERTY)}
              />

              <Label
                label="Seller Concessions"
                labelFor="seller-concessions"
                require
              />
              <input
                type="text"
                name="seller-concessions"
                className="form-input"
                value={formInput.sellerConcessions}
                onChange={(e) => handleFormState(e, KEY.SELLERCONCESSIONS)}
              />
              <button
                className="nextButton"
                onClick={(e) => handleCurrentCard(e, CARDID.CARDFIVE)}
                type="button"
              >
                Next
              </button>
            </Card>
            {/* SIXTH CARD */}
            <Card cardState={cardState.cardSix}>
              <Label label="Option Period" labelFor="option-period" require />
              <input
                type="text"
                name="option-period"
                className="form-input"
                value={formInput.optionPeriod}
                onChange={(e) => handleFormState(e, KEY.OPTIONPERIOD)}
              />

              <Label
                label="Seller's Disclosure (if not in transaction desk)"
                labelFor="sellers-disclosure"
              />
              <input
                type="file"
                name="sellers-disclosure"
                className="form-input"
                value={formInput.sellersDisclosure}
                onChange={(e) => handleFormState(e, KEY.SELLERDISCLOSURE)}
              />

              <Label
                label="Buyer Pre-approval Letter"
                labelFor="preapproval-letter"
              />
              <input
                type="file"
                name="preapproval-letter"
                className="form-input"
                value={formInput.preapprovalLetter}
                onChange={(e) => handleFormState(e, KEY.PREAPPROVALLETTER)}
              />
              <button
                className="nextButton"
                onClick={(e) => handleCurrentCard(e, CARDID.CARDSIX)}
                type="button"
              >
                Next
              </button>
            </Card>
            {/* SEVENTH CARD */}
            <Card cardState={cardState.cardSeven}>
              <Label
                label="Any Additional Addendums/Terms"
                labelFor="additional-addendums"
              />
              <textarea
                className="addAddendums"
                name="additional-addendums"
                value={formInput.additionalAddendums}
                onChange={(e) => handleFormState(e, KEY.ADDITIONALADDENDUMS)}
              />

              <Label label="Buyer Email" labelFor="buyer-email" require />
              <input
                type="email"
                name="buyer-email"
                className="form-input"
                value={formInput.buyerEmail}
                onChange={(e) => handleFormState(e, KEY.BUYEREMAIL)}
              />

              <Label label="Select Recipients" require />
              <div className="recipient-container">
                <input
                  className="recipient-checkbox"
                  name="michelle-king"
                  type="checkbox"
                  checked={recipients.michelleKing}
                  onChange={(e) => handleRecipients(e, TC.MICHELLE)}
                />
                <label className="recipient-label" htmlFor="michelle-king">
                  Michelle King
                </label>
              </div>
              <button
                className="nextButton"
                type="submit"
                disabled={!recipients.michelleKing}
              >
                Submit
              </button>
            </Card>
          </form>
          <div className="progressContainer">
            <span
              className={proActive.dotOne}
              onClick={(e) => handleDots(e, CARDID.CARDONE)}
            />
            <span
              className={proActive.dotTwo}
              onClick={(e) => handleDots(e, CARDID.CARDTWO)}
            />
            <span
              className={proActive.dotThree}
              onClick={(e) => handleDots(e, CARDID.CARDTHREE)}
            />
            <span
              className={proActive.dotFour}
              onClick={(e) => handleDots(e, CARDID.CARDFOUR)}
            />
            <span
              className={proActive.dotFive}
              onClick={(e) => handleDots(e, CARDID.CARDFIVE)}
            />
            <span
              className={proActive.dotSix}
              onClick={(e) => handleDots(e, CARDID.CARDSIX)}
            />
            <span
              className={proActive.dotSeven}
              onClick={(e) => handleDots(e, CARDID.CARDSEVEN)}
            />
          </div>
        </div>
      )}

      {!displayForm && (
        <div className="no-form">
          <h1 className="cantractTitle">A Contract Request was sent to</h1>
          <p className="recipient-list">{recipients.recipientList}</p>
          <button
            type="button"
            className="nextButton"
            onClick={handelFormReset}
          >
            Send Another
          </button>
        </div>
      )}

      <img className="companyLogo" src={companyLogo} alt="company logo" />
    </div>
  );
};

export default ContactRequest;
