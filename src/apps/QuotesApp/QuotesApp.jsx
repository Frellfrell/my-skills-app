import React from "react";
import Quote from "./components/Quote";
import styles from "./styles/QuotesApp.module.css";

const QuotesApp = () => {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Quotes App</h1>
      <Quote />
    </div>
  );
};

export default QuotesApp;
