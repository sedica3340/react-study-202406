import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onSave }) => {
    const [flag, setFlag] = useState(false);
    const canceler = () => {
        setFlag(false);
    };
    const newExpenseContent = (
        <ExpenseForm onAdd={onSave} canceler={canceler} />
    );

    const noContent = (
        <button onClick={() => (setFlag(true))}>새로운 지출 추가하기</button>
    );

    return (
        <div className="new-expense">
            {flag ? newExpenseContent : noContent}
        </div>
    );
};

export default NewExpense;
