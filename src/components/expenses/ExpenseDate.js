import React from "react";
import './ExpenseDate.css'
const ExpenseDate = ({exDate}) => {

    const make2digit = (text) => {
        return text.toString().padStart(2, "0");
    };
    const month = exDate.toLocaleString('en-US', {month: 'long'});

    return (
        <div className="expense-date">
            <div className="expense-date__month">{exDate.getFullYear()}</div>
            <div className="expense-date__year">{month}</div>
            <div className="expense-date__day">{make2digit(exDate.getDate())}</div>
        </div>
    );
};

export default ExpenseDate;
