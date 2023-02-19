import React, { useState } from "react";
import styles from "./Contracts.module.css";
import Contact from "./contact/Contact";
import Checkbox from "./Checkbox/Checkbox";

const Сontracts = ({ contacts }) => {
  contacts.forEach((item, index) => (item.id = index));
  const [contactsData] = useState(contacts),
    [serch, setSerch] = useState(""),
    [checkedOne, setCheckedOne] = useState(true),
    [checkedTwo, setCheckedTwo] = useState(true),
    [checkedThree, setCheckedThree] = useState(true);

  const checkBoxOneChange = () => {
    setCheckedOne(!checkedOne);
  };

  const checkBoxTwoChange = () => {
    setCheckedTwo(!checkedTwo);
  };

  const checkBoxThreeChange = () => {
    setCheckedThree(!checkedThree);
  };

  function handelChange(event) {
    setSerch(event.target.value);
  }

  return (
    <div className={styles["wrapper"]}>
      <h1>Contacts</h1>
      <div className={styles["input-container"]}>
        <div>
          <input
            className={styles["serch-contact"]}
            type="text"
            value={serch}
            onChange={handelChange}
            placeholder="Serch"
          />
        </div>
        <div className={styles["checkbox-container"]}>
          <Checkbox
            label="Male"
            value={checkedOne}
            onChange={checkBoxOneChange}
          />
          <Checkbox
            label="Female"
            value={checkedTwo}
            onChange={checkBoxTwoChange}
          />
          <Checkbox
            label="n\a"
            value={checkedThree}
            onChange={checkBoxThreeChange}
          />
        </div>
      </div>
      {contactsData
        .filter((item) => {
          if (
            item.firstName
              .toLocaleLowerCase()
              .includes(serch.toLocaleLowerCase()) ||
            item.lastName
              .toLocaleLowerCase()
              .includes(serch.toLocaleLowerCase()) ||
            item.phone.includes(serch.toLocaleLowerCase())
          ) {
            return true;
          } else return false;
        })
        .filter((item) => {
          if (
            (item.gender === "male" && checkedOne) ||
            (item.gender === "female" && checkedTwo) ||
            (!item.gender && checkedThree)
          ) {
            return true;
          } else return false;
        })
        .map((item) => (
          <Contact key={item.id} {...item} />
        ))}
    </div>
  );
};

export default Сontracts;
