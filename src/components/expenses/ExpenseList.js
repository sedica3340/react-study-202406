import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseList = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString());
    const onFilterChange = (filteredYear) => {
        setFilteredYear(filteredYear);
    };

    // App.js에서 받은 expenses 배열을  <ExpenseItem> 배열로 변환하는 함수
    // const convertToComponent = () => {
    //     return expenses.map((ex) => (
    //         <ExpenseItem title={ex.title} price={ex.price} date={ex.date} />
    //     ));
    // };

    return (
        <div className="expenses">
            <ExpenseFilter onFilterChange={onFilterChange} />

            {expenses
                .filter((ex) => ex.date.getFullYear().toString() === filteredYear)
                .map((ex) => (
                    <ExpenseItem
                        key={Math.random().toString()}
                        title={ex.title}
                        price={ex.price}
                        date={ex.date}
                    />
                ))}
        </div>
    );
};

export default ExpenseList;
