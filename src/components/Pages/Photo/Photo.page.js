import React from "react";
import styles from "./Photo.module.css";
import wondersOfTheWorld from "./Data/data";
import Card from "./Card/Card";

wondersOfTheWorld.forEach((elem, index) => (elem.id = index + 1));

const PhotoPage = () => {
  return (
    <div className={styles["wrappet"]}>
      {wondersOfTheWorld.map((item) => (
        <Card wondersOfTheWorld={item} key={item.id} />
      ))}
    </div>
  );
};

export default PhotoPage;
