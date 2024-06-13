import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = ({ date, title, price }) => {
    const formattedPrice = new Intl.NumberFormat("ko-KR").format(price);

    /**
     * useState는 컴포넌트의 상태값을 관리하며 이 상태값은 렌더링에 영향을 미침
     * useState훅의 리턴값은 배열이며
     * 첫번째 요소는 관리할 상태값의 초기값
     * 두번쨰 요소는 상태값을 변경할때 사용하는 setter함수
     */
    const [itemTitle, setItemTitle] = useState(title);

    // 이벤트 핸들러 선언

    const clickHandler = (e) => {
        /**
         * useState의 상태값은 setter로만 변경할수 있음
         */
        setItemTitle('환불할거야~');
    };

    console.log("렌더링 전");
    return (
        <Card className="expense-item">
            <ExpenseDate exDate={date} />
            <div className="expense-item__description">
                <h2>{itemTitle}</h2>
                <div className="expense-item__price">{formattedPrice}원</div>
            </div>
            <button id="btn" onClick={clickHandler}>
                제목수정
            </button>
        </Card>
    );
};

export default ExpenseItem;
