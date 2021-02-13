import React from "react";

import "./card.css";

const Card = ({ children, cardState }) => {
  return <div className={cardState}>{children}</div>;
};

export default Card;
