import React from "react";
import { redirect, useLoaderData, useRouteLoaderData } from "react-router-dom";
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

export const action = async ({params}) => {
   
        const response = await fetch(`http://localhost:8282/events/${params.eventId}`, {
            method: "DELETE",
        });
        
    if(!response.ok) {
        console.log('삭제실패?');
    }

    return redirect('/events');
}