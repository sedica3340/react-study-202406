import React from "react";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetail = () => {
    // const ev = useLoaderData();
    
    const ev = useRouteLoaderData('event-detail');
    return (
        <>
            <EventItem event={ev} />
        </>
    );
};

export default EventDetail;

export const loader = async ({params}) => {
    const {eventId:id} = params;
    const response = await fetch(
        `http://localhost:8282/events/${id}`
    );
    return await response.json();
};
