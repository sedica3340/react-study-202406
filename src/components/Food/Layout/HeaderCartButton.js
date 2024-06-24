import React, { useContext, useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import styles from "./HeaderCartButton.module.scss";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = ({ onShow }) => {

    const { cartItems } = useContext(CartContext);

    const [isBump, setIsBump] = useState(false);

    const { button, icon, badge, bump } = styles;

    const { totalAmount } = useContext(CartContext);

    useEffect(() => {
        if(cartItems.length === 0) return;
        setIsBump(true);
        const timer = setTimeout(() => {
            setIsBump(false);
        },300)

        return () => clearTimeout(timer);
        

    }, [cartItems])
    return (
        <button className={`${button} ${isBump? bump : undefined} `} onClick={onShow}>
            <span className={icon}>
                <CartIcon />
            </span>
            <span>My Cart</span>
            <span className={badge}>{totalAmount}</span>
        </button>
    );
};

export default HeaderCartButton;
