import React, { useState } from "react";
import styles from "./CourseInput.module.css";
import Button from "../UI/Button";

const CourseInput = ({ onAdd }) => {

    const { invalid, "form-control": formControl } = styles;

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
            <div className={`${formControl} ${!isValid ? invalid : ''}`}>
                <label>나의 목표</label>
                <input
                    onChange={changeHandler}
                    type="text"
                    value={data.text}
                />
            </div>
            <Button type="submit">목표 추가하기</Button>
        </form>
    );
};

export default CourseInput;
