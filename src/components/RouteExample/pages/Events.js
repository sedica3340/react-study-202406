import React from "react";
import EventList from "../components/EventList";
import { useLoaderData, json } from "react-router-dom";

const Events = () => {
    // loader가 리턴한 데이터 받아오기
    const eventList = useLoaderData();

    return (
        <>
            <h1>Events Page</h1>
            <EventList eventList={eventList} />
        </>
    );
};

export default Events;

export const loader = async () => {
    const res = await fetch("http://localhost:8282/events?sort=date");
    if (!res.ok) {
        const errorText = await res.text();
        throw json(
            { message: errorText },
            {
                status: res.status,
            }
        );
    }
    return res;
};
