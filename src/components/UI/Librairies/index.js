import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

const Librairies = () => {
  return (
    <div className={styles.centered}>
      <div className={styles.overlay}>
        <div className={styles.left}>Project 1</div>
        <div className={styles.right}>Description</div>
      </div>
      <div className={styles.overlay}>
        <div className={styles.left}>Project 2</div>
        <div className={styles.right}>Description</div>
      </div>
      <div className={styles.overlay}>
        <div className={styles.left}>Project 3</div>
        <div className={styles.right}>Description</div>
      </div>
      <div className={styles.overlay}>
        <div className={styles.left}>Project 4</div>
        <div className={styles.right}>Description</div>
      </div>
    </div>
  );
};

export default Librairies;
