import React, { useState } from "react";
import Chart from "./Chart";

const ExpenseChart = ({ expenses }) => {
    const getValue = (month) => {
        let value = 0;
        expenses
            .filter((ex) => ex.date.getMonth() === month)
            .map((ex) => ex.price)
            .forEach((price) => {
                value += price;
            });
        console.log(month + ":" + value);
        return value;
    };



    const chartDataPoints = [
        { label: "Jan", value: getValue(0) },
        { label: "Feb", value: getValue(1) },
        { label: "Mar", value: getValue(2) },
        { label: "Apr", value: getValue(3) },
        { label: "May", value: getValue(4) },
        { label: "Jun", value: getValue(5) },
        { label: "Jul", value: getValue(6) },
        { label: "Aug", value: getValue(7) },
        { label: "Sep", value: getValue(8) },
        { label: "Oct", value: getValue(9) },
        { label: "Nov", value: getValue(10) },
        { label: "Dec", value: getValue(11) },
    ];
    /*
     해당 년도의 모든 지출데이터 배열에서 월별로 지출액을 합산하여
     chartDataPoints배열의 value값에 누적 저장
    */

    return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
