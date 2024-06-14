import React, { useState } from "react";
import "./CheckBoxStyle.css";
const CheckBoxStyle = () => {
    const [isChecked, setIsChecked] = useState(false);

    const checkChangeHandler = (e) => {
        setIsChecked((prev) => !prev);
    };

    return (
        <div className="checkbox-container">
            <input
                onChange={checkChangeHandler}
                type="checkbox"
                id="styled-checkbox"
                checked={isChecked}
            />
            <label
                className={isChecked ? "checked" : "unchecked"}
                htmlFor="styled-checkbox"
            >
                Check me!
            </label>
        </div>
    );
};

export default CheckBoxStyle;
