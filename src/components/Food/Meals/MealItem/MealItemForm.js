import React, { useState, useRef } from "react";
import Input from "../../../UI/Input/Input";
import styles from "./MealItemForm.module.scss";

const MealItemForm = ({id, onAdd}) => {

    // const [amount, setAmount] = useState(0);

    const inputRef = useRef();

    const submitHandler= e => {
        e.preventDefault();
        const amount = inputRef.current.value;
        onAdd(amount);

    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                ref={inputRef}
                label="수량"
                inputAttr={{
                    id: "amount_" + id,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1",
                }}
            />
            <button>담기</button>
        </form>
    );
};

export default MealItemForm;
