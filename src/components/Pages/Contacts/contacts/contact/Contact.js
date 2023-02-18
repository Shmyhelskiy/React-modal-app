import React from "react";
import styles from "./Contact.module.css";
import * as img from "./image/image";

const Contact = (contactsData) => {
  return (
    <div className={styles["wrapper"]}>
      {contactsData.gender === "female" ? (
        <img
          className={styles["contact-gender"]}
          src={img.female}
          alt={contactsData.gender}
        ></img>
      ) : (
        <img
          className={styles["contact-gender"]}
          src={img.male}
          alt={contactsData.gender}
        ></img>
      )}
      <div className={styles["contact-content"]}>
        <div className={styles["content"]}>
          <p>{contactsData.firstName}</p>
        </div>
        <div className={styles["content"]}>
          <p className={styles["LastName"]}>{contactsData.lastName} </p>
        </div>
        <div className={styles["content"]}>
          <a className={styles["contact-phone"]} href={contactsData.phone}>
            {contactsData.phone}
          </a>
        </div>
        <div className={styles["content"]}>
          <p>{contactsData.serch}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
