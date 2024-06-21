import React from "react";

const CartContext = React.createContext(
    {
        cartItems: [],
        addItem: (item) => {},
        removeItem: (id) => {},
    }
);

export default CartContext;