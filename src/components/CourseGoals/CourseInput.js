import React, { useState } from "react";
import "./CourseInput.css";
import Button from "../UI/Button";

const CourseInput = ({ onAdd }) => {
    const [data, setData] = useState({
        id: Math.random().toString(),
        text: "",
    });

    // 입력값 검증을 통과했는지 여부 상태관리
    const [isValid, setIsValid] = useState(true);

    const changeHandler = (e) => {
        setData({
            ...data,
            text: e.target.value,
        });
        if (data.text.trim().length > 0) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    const formHandler = (e) => {
        e.preventDefault();

        if (data.text.trim().length > 0) {
            setIsValid(true);
            onAdd(data);
        } else {
            setIsValid(false);
        }

        setData({
            id: Math.random().toString(),
            text: "",
        });
    };

    return (
        <form onSubmit={formHandler}>
            <div className="form-control">
                <label>나의 목표</label>
                <input
                    onChange={changeHandler}
                    type="text"
                    value={data.text}
                    style={{
                        backgroundColor: isValid ? "transparent" : "salmon",
                        borderColor: isValid ? "black" : "red",
                    }}
                />
            </div>
            <Button type="submit">목표 추가하기</Button>
        </form>
    );
};

export default CourseInput;
