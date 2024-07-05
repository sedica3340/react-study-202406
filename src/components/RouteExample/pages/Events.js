import React, { useEffect, useState } from "react";
import EventList from "../components/EventList";
import { useLoaderData, json } from "react-router-dom";
import EventSkeleton from "../components/EventSkeleton";
import { throttle, debounce } from "lodash";

const Events = () => {
    // loader가 리턴한 데이터 받아오기
    // const eventList = useLoaderData();

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [isFinish, setIsFinish] = useState(false);

    const loadEvents = async () => {

        if(isFinish) {
            return;
        }
        setLoading(true);
        const res = await fetch(
            `http://localhost:8282/events/page/${currentPage}?sort=date`
        );
        const { events: loadedEvents, totalCount } = await res.json();
        const updatedEvents = [...events, ...loadedEvents];
        setEvents(updatedEvents);
        setLoading(false);
        setCurrentPage((prev) => prev + 1);

        setIsFinish(totalCount === updatedEvents.length);

    };
    const scrollHandler = throttle((e) => {
        if (
            loading ||
            window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight
        ) {
            return;
        }
        loadEvents();
    }, 2000);

    useEffect(() => {
        loadEvents();
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
            scrollHandler.cancel();
        };
    }, [currentPage, loading]);
    return (
        <>
            <h1>Events Page</h1>
            <EventList eventList={events} />
            {loading && <EventSkeleton />}
        </>
    );
};

export default Events;

// export const loader = async () => {
//     const res = await fetch("http://localhost:8282/events/page/1?sort=date");
//     if (!res.ok) {
//         const errorText = await res.text();
//         throw json(
//             { message: errorText },
//             {
//                 status: res.status,
//             }
//         );
//     }
//     return res;
// };
