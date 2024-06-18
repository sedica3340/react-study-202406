import React, { useRef, useState } from "react";
import styles from "./AddUsers.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/Modal/ErrorModal";

const AddUsers = ({ onAddUser }) => {
    // 에러 상태 관리
    const [error, setError] = useState(null);

    const usernameRef = useRef();
    const ageRef = useRef();

    // const [userValue, setUserValue] = useState({
    //     username: "",
    //     age: "",
    // });

    // const usernameChangeHandler = (e) => {
    //     setUserValue((prevUserValue) => ({
    //         ...prevUserValue,
    //         username: e.target.value,
    //     }));
    // };

    // const ageChangeHandler = (e) => {
    //     setUserValue((prevUserValue) => ({
    //         ...prevUserValue,
    //         age: e.target.value,
    //     }));
    // };

    const modalCloser = () => {
        setError(null);
    };

    const userSubmitHandler = (e) => {
        e.preventDefault();

        const userValue = {
            username: usernameRef.current.value,
            age: ageRef.current.value,
        };

        // 입력값 검증
        if (userValue.username.trim() === "" || userValue.age.trim() === "") {
            setError({
                title: "유효하지 않은 입력값",
                message: "입력값은 공백으로 작성하면 안됩니다.",
            });
            return;
        }

        if (+userValue.age < 1) {
            setError({
                title: "유효하지 않은 입력값",
                message: "나이는 0이나 음수가 될 수 없습니다.",
            });
            return;
        }

        onAddUser(userValue);

        usernameRef.current.value = '';
        ageRef.current.value = '';

        usernameRef.current.focus();
        // setUserValue({
        //     username: "",
        //     age: "",
        // });
    };

    return (
        <>
            {error && (
                <ErrorModal
                    onClose={modalCloser}
                    title={error.title}
                    message={error.message}
                />
            )}
            <Card className={styles.input}>
                <form onSubmit={userSubmitHandler}>
                    <label htmlFor="username">이름</label>
                    <input
                        id="username"
                        type="text"
                        ref={usernameRef}
                        // onChange={usernameChangeHandler}
                        // value={userValue.username}
                    />
                    <label htmlFor="age">나이</label>
                    <input
                        id="age"
                        type="number"
                        ref={ageRef}
                        // onChange={ageChangeHandler}
                        // value={userValue.age}
                    />
                    <Button type="submit">가입하기</Button>
                </form>
            </Card>
        </>
    );
};

export default AddUsers;
