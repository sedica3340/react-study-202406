import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = ({ date, title, price }) => {

    const formattedPrice = new Intl.NumberFormat("ko-KR").format(price);

    return (
        <Card className='expense-item'>
          <ExpenseDate exDate={date} />
          <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>{formattedPrice}원</div>
          </div>
        </Card>
    )
  
};

export default ExpenseItem;
