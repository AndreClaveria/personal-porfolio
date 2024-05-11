// components/TextBox.js
import React, { useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import imageBoxData from "@/data/present.json";

const PresentBox = () => {
  const [selectedImageId, setSelectedImageId] = useState(1);

  const handleImageClick = (id) => {
    setSelectedImageId(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topholder}>
        <div className={styles.box}>
          <div className={styles.imageBox}>
            {selectedImageId && (
              <Image
                width={325}
                height={325}
                src={imageBoxData[selectedImageId - 1].src}
                alt={`Image ${selectedImageId}`}
              />
            )}
          </div>
          <div className={styles.textBox}>
            <div className={styles.title}>
              {selectedImageId && (
                <>
                  <h2>{imageBoxData[selectedImageId - 1].title}</h2>
                </>
              )}
            </div>
            <div className={styles.text}>
              {selectedImageId && (
                <>
                  <h2>{imageBoxData[selectedImageId - 1].lineOne}</h2>
                  <h2>{imageBoxData[selectedImageId - 1].lineTwo}</h2>
                  <h2>{imageBoxData[selectedImageId - 1].lineThree}</h2>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomholder}>
        {[...Array(10)].map((_, index) => {
          const item = imageBoxData[index];
          return (
            <>
              {item ? (
                <div
                  key={index}
                  className={`${styles.imageBox} ${
                    selectedImageId === item?.id ? styles.active : ""
                  }`}
                  onClick={() => handleImageClick(item ? item.id : null)}>
                  <Image
                    width={150}
                    height={150}
                    src={item.src}
                    alt={item.alt}
                  />
                </div>
              ) : (
                <div key={index} className={styles.emptyBox}></div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default PresentBox;
