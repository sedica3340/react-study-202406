import React, { useReducer, useState } from "react";
import CartContext from "./cart-context";

const defaultState = {
    items: [],
};

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        return {
            items: [...state.items, action.value],
        };
    } else if (action.type === "REMOVE") {
        return null;
    }
    return defaultState;
};
const CartProvider = ({ children }) => {
    const [totalValue, setTotalValue] = useState(0);
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultState
    );

    const addHandler = (item) => {
        dispatchCartAction({
            type: "ADD",
            value: item,
        });
        setTotalValue((prev) => {
            return prev + item.amount * item.price;
        });
    };

    const removeHandler = () => {};

    const cartContext = {
        cartItems: cartState.items,
        addItem: addHandler,
        removeItem: removeHandler,
        totalValue,
    };
    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
