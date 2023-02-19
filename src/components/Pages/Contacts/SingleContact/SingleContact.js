import React from "react";
import { useParams } from "react-router-dom";
import styles from "./SingleContact.module.css";
import * as img from "../contacts/contact/image/image";

const SingleContact = ({ cardData }) => {
  let { userId } = useParams();
  console.log(cardData);
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["container"]}>
        <header className={styles["header"]}>
          {cardData[userId].gender === "female" ? (
            <img
              className={styles["contact-gender"]}
              src={img.female}
              alt={cardData[userId].gender}
            ></img>
          ) : (
            <img
              className={styles["contact-gender"]}
              src={img.male}
              alt={cardData[userId].gender}
            ></img>
          )}
        </header>
        <div className={styles["container-info"]}>
          <p>First Name: {cardData[userId].firstName}</p>
        </div>
        <div className={styles["container-info"]}>
          <p>Last Name: {cardData[userId].lastName}</p>
        </div>
        <div className={styles["container-info"]}>
          <p>Gender: {cardData[userId].gender}</p>
        </div>
        <div className={styles["container-info"]}>
          <p>Phone: {cardData[userId].phone}</p>
        </div>
        <div className={styles["container-info"]}>
          <p>Date of Birth: {cardData[userId].dateOfBirth}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleContact;
