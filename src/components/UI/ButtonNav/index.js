"use client";
import React, { useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";

const ButtonNav = ({ imageSrc, altText, isActive, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
 
      <button
        className={`${styles.buttonNav} ${isActive ? styles.active : ""}`}
        onClick={handleClick}>
        <Image src={imageSrc} alt={altText} width={100} height={100} />
        <div className={styles.text}>
          <span>{altText}</span>
        </div>
      </button>

  );
};

export default ButtonNav;
