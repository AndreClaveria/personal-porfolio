import React from "react";
import styles from "./index.module.scss";

const Loadinga = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.loadingMessage}>Loading...</div>
    </div>
  );
};

export default Loadinga;
