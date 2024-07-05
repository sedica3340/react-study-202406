import React from "react";
import styles from "./EventItem.module.scss";
import { Link, useNavigate, useParams, useSubmit } from "react-router-dom";

const EventItem = ({ event }) => {
    const { eventId } = useParams();
    const navigate = useNavigate();

    const {
        title,
        desc: description,
        "img-url": image,
        "start-date": date,
    } = event;

    const submit = useSubmit();

    const deleteHandler = (e) => {
      if(!window.confirm('정말 삭제하시겠습니까?')) return;
        submit(null, { method: 'DELETE'});
    };

    return (
        <article className={styles.event}>
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <time>{date}</time>
            <p>{description}</p>
            <menu className={styles.actions}>
                <Link to="edit">Edit</Link>
                <button onClick={deleteHandler}>Delete</button>
            </menu>
        </article>
    );
};

export default EventItem;
