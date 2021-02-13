import React from "react";

import styles from "./label.module.css";

const Label = ({ label, labelFor, require }) => {
  return (
    <div className={styles.labelContainer}>
      <label htmlFor={labelFor}>{label}</label>
      {require && <p>required</p>}
    </div>
  );
};

export default Label;
