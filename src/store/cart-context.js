import React from "react";

const CartContext = React.createContext(
    {
        cartItems: [],
        addItem: (item) => {},
        removeItem: (id) => {},
        totalValue: 0,
        totalAmount: 0,
    }
);

export default CartContext;