import React from "react";

import styles from "./EventForm.module.scss";
import { Form, redirect, useNavigate } from "react-router-dom";

const EventForm = ({ method, event = {} }) => {
    const {
        title,
        desc: description,
        "img-url": image,
        "start-date": date,
    } = event;

    // 날짜 형식을 변경 (yyyy-MM-dd)
    /**
     *
     * @param date - yyyy년 MM월 dd일
     */
    const convertDateFormat = (date) => {
        const [yearPart, monthDayPart] = date.split("년 ");
        const [monthPart, dayPart] = monthDayPart.split("월 ");

        const day = dayPart.replace("일", "");

        // console.log('date: ', { yearPart, monthPart, day });

        return `${yearPart}-${monthPart}-${day}`;
    };

    let formatDate;
    if (event.date) {
        formatDate = convertDateFormat(date);
    }

    // const { eventId: id } = useParams();
    const navigate = useNavigate();

    const cancelHandler = (e) => {
        // window.location.href = '/events/' + id;
        // navigate('/events/' + id);
        navigate("..");
    };

    return (
        <Form 
        method={method}
        className={styles.form} 
        noValidate
        >
            <p>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    required
                    defaultValue={event ? title : ""}
                />
            </p>
            <p>
                <label htmlFor="image">Image</label>
                <input
                    id="image"
                    type="url"
                    name="image"
                    required
                    defaultValue={event ? image : ""}
                />
            </p>
            <p>
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    required
                    defaultValue={event ? formatDate : ""}
                />
            </p>
            <p>
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    rows="5"
                    required
                    defaultValue={event ? description : ""}
                />
            </p>
            <div className={styles.actions}>
                <button type="button" onClick={cancelHandler}>
                    Cancel
                </button>
                <button>{method === "post" ? "Save" : "Modify"}</button>
            </div>
        </Form>
    );
};

export default EventForm;

export const action = async ({ params, request }) => {
    const formData = await request.formData();
    const payload = {
        title: formData.get("title"),
        desc: formData.get("description"),
        imageUrl: formData.get("image"),
        beginDate: formData.get("date"),
    };

    let url = `http://localhost:8282/events`;
    if (request.method === "PATCH") {
        url += `/${params.eventId}`;
    }
    const response = await fetch(`http://localhost:8282/events`, {
        method: request.method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    return redirect("/events");
};

