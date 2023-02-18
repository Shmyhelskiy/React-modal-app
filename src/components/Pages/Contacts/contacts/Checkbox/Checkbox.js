import React from "react";
import styles from "./Checkbox.module.css";

const Checkbox = ({ lable, value, onChange }) => {
  return (
    <label className={styles["wrapper"]}>
      <input type="checkbox" checked={value} onChange={onChange} />
      {lable}
    </label>
  );
};

export default Checkbox;
