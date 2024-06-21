import React, { forwardRef } from "react";

const Input = forwardRef(({ type, onKeyUp }, ref) => {
    return <input type={type} onKeyUp={onKeyUp} ref={ref}></input>;
});

export default Input;
