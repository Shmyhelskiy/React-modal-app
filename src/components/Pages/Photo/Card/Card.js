import React from "react";
import styles from "./Card.module.css";

const Card = ({ wondersOfTheWorld }) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["container-image"]}>
        <img
          className={styles["image"]}
          src={wondersOfTheWorld.image}
          alt={wondersOfTheWorld.name}
        />
      </div>
      <div className={styles["container-content"]}>
        <p>Name : {wondersOfTheWorld.name}</p>
        <p>Create: {wondersOfTheWorld.create}</p>
        <p>Location: {wondersOfTheWorld.location}</p>
      </div>
    </div>
  );
};

export default Card;
