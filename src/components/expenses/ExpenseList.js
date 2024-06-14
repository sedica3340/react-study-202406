import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./ExpenseList.css";
import ExpenseChart from "../chart/ExpenseChart";
const ExpenseList = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState(
        new Date().getFullYear().toString()
    );
    const onFilterChange = (filteredYear) => {
        setFilteredYear(filteredYear);
    };

    // App.js에서 받은 expenses 배열을  <ExpenseItem> 배열로 변환하는 함수
    // const convertToComponent = () => {
    //     return expenses.map((ex) => (
    //         <ExpenseItem title={ex.title} price={ex.price} date={ex.date} />
    //     ));
    // };

    const filteredExpenses = expenses.filter(
        (ex) => ex.date.getFullYear().toString() === filteredYear
    );
    let content = <p>지출 항목이 없습니다.</p>;

    if (filteredExpenses.length) {
        content = filteredExpenses.map((ex) => (
            <ExpenseItem
                key={Math.random().toString()}
                title={ex.title}
                price={ex.price}
                date={ex.date}
            />
        ));
    }
    return (
        <div className="expenses">
            <ExpenseFilter onFilterChange={onFilterChange} />
            <ExpenseChart />
            {content}
        </div>
    );
};

export default ExpenseList;
