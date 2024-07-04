import React from "react";
import MainNavigation from "../layout/MainNavigation";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    let errorMessage;
    if (error.status === 400) {
        errorMessage = JSON.parse(error.data);
    }
    if (error.status === 404) {
        errorMessage = "페이지를 찾을 수 없습니다. URL을 확인하세요";
    }
    return (
        <>
            <MainNavigation />
            <main>
                <h1>페이지를 찾을 수 없습니다!</h1>
                <p>
                    {errorMessage.msg ||
                        "요청하신 페이지의 주소를 다시 확인해주세요."}
                </p>
            </main>
        </>
    );
};

export default ErrorPage;
