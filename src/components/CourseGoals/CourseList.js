import React from "react";
import "./CourseList.css";
import CourseItem from "./CourseItem";

const CourseList = ({ items, onRemove }) => {



    return (
        <ul className="goal-list">
            {items.map((item) => (
                <CourseItem key={item.id} item={item} onRemove={onRemove}/>
            ))}
        </ul>
    );
};

export default CourseList;
