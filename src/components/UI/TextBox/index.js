// components/TextBox.js
import React from "react";
import styles from "./index.module.scss";

const TextBox = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.nameholder}>Maya</div>
      <div className={styles.textBox}>
        <div className={styles.text}>{children}</div>
      </div>
    </div>
  );
};

export default TextBox;
