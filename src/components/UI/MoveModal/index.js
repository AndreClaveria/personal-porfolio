"use client";
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./index.module.scss";

const MoveModal = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Effect pour écouter les événements de clavier
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowUp":
          handleOptionChange(-1);
          break;
        case "ArrowDown":
          handleOptionChange(1);
          break;
        case "z":
        case "Z":
          handleOptionSelect("option1");
          break;
        case "s":
        case "S":
          handleOptionSelect("option2");
          break;
        case "Enter":
          // Ajoutez ici la logique pour effectuer une action lors de l'appui sur Enter
          // Par exemple, sélectionner l'option si aucune option n'est sélectionnée ou naviguer vers une autre page
          if (selectedOption) {
            if (selectedOption === "option1") {
              window.location.href = `/`;
            }
            if (selectedOption === "option2") {
              window.location.href = `/experiences`;
            }
            if (selectedOption === "option3") {
              window.location.href = `/projects`;
            }
          }
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedOption]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleOptionChange = (change) => {
    const options = ["option1", "option2", "option3"];
    const currentIndex = options.indexOf(selectedOption);
    const newIndex = (currentIndex + change + options.length) % options.length;
    setSelectedOption(options[newIndex]);
  };

  const getImageForOption = () => {
    switch (selectedOption) {
      case "option1":
        console.log("/img/room.png");
        return "/img/room.png";
      case "option2":
        console.log("/img/street.png");
        return "/img/street.png";
      case "option3":
        console.log("/img/bookshelf.png");
        return "/img/bookshelf.png";
      default:
        return "/img/room.png";
    }
  };

  return (
    <div className={styles.moveModalContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={getImageForOption()}
          alt="Background Image"
          width={600}
          height={400}
        />
      </div>
      <div className={styles.navigationOptions}>
        <ul>
          <li
            onClick={() => handleOptionSelect("option1")}
            className={selectedOption === "option1" ? styles.active : " "}
          >
            Salon
          </li>
          <li
            onClick={() => handleOptionSelect("option2")}
            className={selectedOption === "option2" ? styles.active : " "}
          >
            Ruelle
          </li>
          <li
            onClick={() => handleOptionSelect("option3")}
            className={selectedOption === "option3" ? styles.active : " "}
          >
            Bibliothèque
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MoveModal;
