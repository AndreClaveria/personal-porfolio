"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import ButtonNav from "@/components/UI/ButtonNav";
import MoveModal from "@/components/UI/MoveModal";
import TextBox from "@/components/UI/TextBox";
import PresentBox from "@/components/UI/PresentBox";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [isNavVisible, setNavVisible] = useState(false);
  const [isTextBoxVisible, setTextBoxVisible] = useState(false);
  const [isMoveModalVisible, setIsMoveModalVisible] = useState(false);
  const [isPresentBoxVisible, setIsPresentBoxVisible] = useState(false);
  const pathname = usePathname();
  let textToShow = "";
  const isActiveLink = (href) => {
    return pathname.includes(href);
  };

  // Vérifiez l'URL actuelle et définissez le texte en conséquence
  if (isActiveLink("/experiences")) {
    textToShow =
      "J'ai pris ce panneau publicitaire pour mettre toutes mes experiences!";
  } else if (isActiveLink("/projects")) {
    textToShow = "J'ai mis tous mes projets dans ma bibliothèque";
  } else if (isActiveLink("/")) {
    textToShow = "Voici ma maison";
  }

  console.log("textbox : ", isTextBoxVisible);
  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log("Key pressed:", event.key);
      if (event.key === "ArrowRight" || event.key === "d") {
        setFocusedIndex((prevIndex) =>
          prevIndex < 3 ? prevIndex + 1 : prevIndex
        );
      } else if (event.key === "ArrowLeft" || event.key === "q") {
        setFocusedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
      } else if (event.key === " " || event.key === "Enter") {
      } else if (event.key === "Escape") {
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleExamine = () => {
    console.log("Examiner");
    setNavVisible(true);
  };

  const handleTalk = () => {
    console.log("Parler");
    setTextBoxVisible(true);
  };

  const handleMove = () => {
    console.log("Se déplacer");
    setIsMoveModalVisible(true); // Afficher MoveModal lors du clic sur "Se déplacer"
  };

  const handlePresent = () => {
    console.log("Présenter");
    setIsPresentBoxVisible(true);
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
        className={`${styles.nav} ${isNavVisible ? styles.hidden : ""} ${
          isMoveModalVisible ? styles.hidden : ""
        } ${isTextBoxVisible ? styles.hidden : ""} ${
          isPresentBoxVisible ? styles.hidden : ""
        } ${isMoveModalVisible ? styles.hidden : ""}`}
      >
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

      {isNavVisible && (
        <div className={`${styles.animation} ${styles.show}`}>
          <button
            className={styles.closeButton}
            onClick={() => setNavVisible(false)}
          >
            X
          </button>
        </div>
      )}
      {isMoveModalVisible && (
        <div className={`${styles.animation} ${styles.show}`}>
          <button
            className={styles.closeButton}
            onClick={() => setIsMoveModalVisible(false)}
          >
            X
          </button>
          <MoveModal />
        </div>
      )}
      {isTextBoxVisible && (
        <div className={`${styles.animation} ${styles.show}`}>
          <button
            className={styles.closeButton}
            onClick={() => setTextBoxVisible(false)}
          >
            X
          </button>
          <TextBox>{textToShow}</TextBox>
        </div>
      )}
      {isPresentBoxVisible && (
        <div className={`${styles.animation} ${styles.show}`}>
          <button
            className={styles.closeButton}
            onClick={() => setIsPresentBoxVisible(false)}
          >
            X
          </button>
          <PresentBox />
        </div>
      )}
    </div>
  );
};

export default NavBar;
