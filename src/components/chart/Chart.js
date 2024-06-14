import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
    const totalValue = dataPoints
        .map((dp) => dp.value)
        .reduce((accum, curr) => accum + curr, 0);

    return (
        <div className="chart">
            {dataPoints.map((dp) => (
                <ChartBar
                    key={dp.label}
                    label={dp.label}
                    monthValue={dp.value}
                    totalValue={totalValue}
                />
            ))}
        </div>
    );
};
/* 
    dataPoints배열에서 12개의 value를 합산하여 년도 지출총액을 계산
    각 CharBar에 해당 월 지출액/ 년도지출총액 비율을 전달
*/
export default Chart;
