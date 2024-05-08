"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import ButtonNav from "@/components/UI/ButtonNav";
import MoveModal from "@/components/UI/MoveModal";

const NavBar = () => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [isMoveModalVisible, setIsMoveModalVisible] = useState(false);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight" || event.key === "d") {
        setFocusedIndex((prevIndex) =>
          prevIndex < 3 ? prevIndex + 1 : prevIndex
        );
      } else if (event.key === "ArrowLeft" || event.key === "q") {
        setFocusedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
      } else if (event.key === " " || event.key === "Enter") {
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleExamine = () => {
    console.log("Examiner");
    return (
      <div>
        <h1>JAJAJA1</h1>
      </div>
    );
  };

  const handleTalk = () => {
    console.log("Parler");
    return (
      <div>
        <h1>JAJAJA4</h1>
      </div>
    );
  };

  const handleMove = () => {
    console.log("Se déplacer");
    setIsMoveModalVisible(true); // Afficher MoveModal lors du clic sur "Se déplacer"
  };

  const handlePresent = () => {
    console.log("Présenter");
    return (
      <div>
        <h1>JAJAJA2</h1>
      </div>
    );
  };

  const buttons = [
    {
      imageSrc: "/img/exam.png",
      altText: "Examiner",
      onClick: handleExamine,
    },
    { imageSrc: "/img/talk.png", altText: "Parler", onClick: handleTalk },
    {
      imageSrc: "/img/legs.png",
      altText: "Se déplacer",
      onClick: handleMove,
    },
    {
      imageSrc: "/img/present.png",
      altText: "Présenter",
      onClick: handlePresent,
    },
  ];

  return (
    <div>
      <nav
        className={`${styles.nav} ${isMoveModalVisible ? styles.hidden : ""}`}>
        <ul className={styles.navList}>
          {buttons.map((button, index) => (
            <li key={index} className={styles.navItem}>
              <ButtonNav
                imageSrc={button.imageSrc}
                altText={button.altText}
                isActive={index === focusedIndex}
                onClick={button.onClick}
              />
            </li>
          ))}
        </ul>
      </nav>
      {isMoveModalVisible && (
        <div className={`${styles.animation} ${styles.show}`}>
          <button
            className={styles.closeButton}
            onClick={() => setIsMoveModalVisible(false)}>
            X
          </button>
          <MoveModal />
        </div>
      )}
    </div>
  );
};

export default NavBar;
