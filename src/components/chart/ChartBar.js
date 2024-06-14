import React, { useState } from "react";

import "./ChartBar.css";

const ChartBar = ({ label, monthValue, totalValue }) => {
    let barFillHeight = '0%';

    if(totalValue > 0) {
        const percentage = (monthValue / totalValue) * 100;
        barFillHeight = percentage + '%';
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div
                    className="chart-bar__fill"
                    style={{ height: barFillHeight }}
                ></div>
            </div>
            <div className="chart-bar__label">{label}</div>
        </div>
    );
};

export default ChartBar;
