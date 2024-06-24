import React, { useReducer, useState } from "react";
import CartContext from "./cart-context";

const defaultState = {
    items: [],
};

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        if (state.items.some((item) => item.id === action.value.id)) {
            const newItems = state.items.map((item) => {
                if (item.id === action.value.id) {
                    item.amount += action.value.amount;
                }
                return item;
            }).filter(item => item.amount !== 0);
            
            return {
                items: newItems,
            };
        }
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
    const [totalAmount, setTotalAmount] = useState(0);
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
        setTotalAmount((prev) => {
            return prev + item.amount;
        })
    };

    const removeHandler = (item) => {
        dispatchCartAction({
            type: "REMOVE",
            value: item,
        });
        setTotalValue((prev) => {
            return prev - item.amount * item.price;
        });
    };

    const cartContext = {
        cartItems: cartState.items,
        addItem: addHandler,
        removeItem: removeHandler,
        totalValue,
        totalAmount,
    };
    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
