import React from "react";
import styles from "./Notfound.module.css";

const Notfound = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["container"]}>
        <img
          src="https://cdn0.iconfinder.com/data/icons/emotration-set-1/512/33-256.png"
          alt="Not Found"
        />
        <p>Page not Found</p>
      </div>
    </div>
  );
};

export default Notfound;
