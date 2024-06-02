import React from "react";
import classNames from "classnames";
import styles from "../Hero/aboutMenuStyles.module.css";

const AboutMenuItem = ({ title, active, onClick }) => {
  return (
    <div
      className={classNames(styles.item, { [styles.active]: active })}
      onClick={onClick}
    >
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default AboutMenuItem;
