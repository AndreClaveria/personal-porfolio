"use client";
import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";

const AdvertisementPanel = ({ experiences }) => {
  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentExperienceIndex((prevIndex) =>
        prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Change every 10 seconds

    return () => clearTimeout(timer);
  }, [currentExperienceIndex, experiences.length]);

  return (
    <div className={styles.center}>
      <div className={styles.panel}>
        <div className={styles.centered}>
          <h2>Vous recherchez un ?</h2>
        </div>
        <div className={styles.carousel}>
          <div className={`${styles.experience} ${styles.active}`}>
            <h3 className={styles.experienceTitle}>
              {experiences[currentExperienceIndex].title}
            </h3>
            <p className={styles.experiencePara}>
              {experiences[currentExperienceIndex].description}
            </p>
            <p className={styles.experiencePara}>
              Année : {experiences[currentExperienceIndex].year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementPanel;
