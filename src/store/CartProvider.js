import React from "react";
import CartContext from "./cart-context";

const CartProvider = ({ children }) => {

    const cartIems = [];

    const addHandler = () => {

    }
    const removeHandler = () => {
        
    }

    return (
        <CartContext.Provider
            value={{
                cartItems: [],
                addItem: addHandler,
                removeItem: removeHandler,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
