import React, { useContext } from "react";

import styles from "./CartItem.module.scss";
import CartContext from "../../../store/cart-context";

const CartItem = ({ cart }) => {
    const { id, name, price, amount } = cart;
    const { addItem } = useContext(CartContext);
    const {
        "cart-item": cartItem,
        summary,
        price: priceStyle,
        amount: amountStyle,
        actions,
    } = styles;
    const formatPrice = new Intl.NumberFormat("ko-KR").format(price);

    const removeHandler = (e) => {
        const item = {
            id,
            name,
            amount: -1,
            price,
        };
        addItem(item);
    };

    const addHandler = (e) => {
        const item = {
            id,
            name,
            amount: 1,
            price,
        };
        addItem(item);
    };

    return (
        <li className={cartItem}>
            <div>
                <h2>{name}</h2>
                <div className={summary}>
                    <span className={priceStyle}>{formatPrice}</span>
                    <span className={amountStyle}>x {amount}</span>
                </div>
            </div>
            <div className={actions}>
                <button onClick={removeHandler}>−</button>
                <button onClick={addHandler}>+</button>
            </div>
        </li>
    );
};

export default CartItem;
