import React from 'react';
import './CourseItem.css';
const CourseItem = ({ item, onRemove }) => {

    const clickHandler = (e) => {
        onRemove(item.id);
    }

  return <li className="goal-item" onClick={clickHandler}>{item.text}</li>;
};

export default CourseItem;
