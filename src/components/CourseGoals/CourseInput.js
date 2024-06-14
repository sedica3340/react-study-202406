import React, { useState } from "react";
import "./CourseInput.css";
import Button from "../UI/Button";

const CourseInput = ({ onAdd }) => {
    const [data, setData] = useState({
        id: Math.random().toString(),
        text: "",
    });

    const changeHandler = (e) => {
        setData({
            ...data,
            text: e.target.value,
        });
    };

    const formHandler = (e) => {
        e.preventDefault();
        onAdd(data);

        setData({
            id: Math.random().toString(),
            text: "",
        });
        

    };

    return (
        <form onSubmit={formHandler}>
            <div className="form-control">
                <label>나의 목표</label>
                <input onChange={changeHandler} type="text" value={data.text}/>
            </div>
            <Button type="submit">목표 추가하기</Button>
        </form>
    );
};

export default CourseInput;
