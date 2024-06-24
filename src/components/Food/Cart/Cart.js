import React, { useContext, useState } from "react";
import styles from "./Cart.module.scss";
import CartModal from "./CartModal";
import CartContext from "../../../store/cart-context";
import CartItem from "./CartItem";

const Cart = ({ onClose }) => {
    const { cartItems, totalValue } = useContext(CartContext);
    const {
        "cart-items": cartItemStyle,
        total,
        actions,
        "button--alt": btnAlt,
        button,
    } = styles;
    

    return (
        <CartModal onClose={onClose}>
            {/* 주문 내역 */}
            <ul className={cartItemStyle}>
                {cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cart={cartItem} />
                ))}
            </ul>
            <div className={total}>
                <span>주문 총액</span>
                <span>{new Intl.NumberFormat('ko-KR').format(totalValue)}원</span>
            </div>
            <div className={actions}>
                <button className={btnAlt} onClick={onClose}>
                    닫기
                </button>
                <button className={button}>주문</button>
            </div>
        </CartModal>
    );
};

export default Cart;
