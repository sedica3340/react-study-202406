import "./App.css";
import React from "react";
import ExpenseList from "./components/expenses/ExpenseList";
import NewExpense from "./components/new-expense/NewExpense";
const App = () => {
    const expenses = [
        {
            title: "치킨냄새맡음",
            price: 8000,
            date: new Date(2024, 6 - 1, 3),
        },
        {
            title: "김밥라면",
            price: 6000,
            date: new Date(2024, 6 - 1, 7),
        },
        {
            title: "음료수두병마심",
            price: 5000,
            date: new Date(2024, 6 - 1, 12),
        },
    ];

    return (
        <>
            <NewExpense />
            <ExpenseList expenses={expenses} />
        </>
    );
};

export default App;
