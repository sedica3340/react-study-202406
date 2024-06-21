import React from "react";
import styles from "./Input.module.scss";

const Input = ({ label, input }) => {



    return <div className={styles.input}>
        <label>{label}</label>
        <input />
    </div>;
};

export default Input;
