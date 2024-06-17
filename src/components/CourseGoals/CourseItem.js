import React from 'react';
import styles from './CourseItem.module.css';
const CourseItem = ({ item, onRemove }) => {

    const clickHandler = (e) => {
        onRemove(item.id);
    }

  return <li className={styles['goal-item']} onClick={clickHandler}>{item.text}</li>;
};

export default CourseItem;
