import React from "react";
// import "./CourseList.css";
import CourseItem from "./CourseItem";
import styled from "styled-components";

const CourseUl = styled.ul`
list-style: none;
margin: 0;
padding: 0;
`;

const CourseList = ({ items, onRemove }) => {



    return (
        <CourseUl>
            {items.map((item) => (
                <CourseItem key={item.id} item={item} onRemove={onRemove}/>
            ))}
        </CourseUl>
    );
};

export default CourseList;