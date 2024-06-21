import React from "react";
import CartContext from "./cart-context";

const defaultState = {
    items: []
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        return null;
    } else if (action.type === "REMOVE") {
        return null;
    }
    return defaultState;
};

const CartProvider = ({ children }) => {

    const cartContext = {
        cartItems,
        addItem: addHandler,
        removeItem: removeHandler,
    }
    return (
        <CartContext.Provider
            value={cartContext}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
