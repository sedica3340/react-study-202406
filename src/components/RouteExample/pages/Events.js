import React, { useEffect, useRef, useState } from "react";
import EventList from "../components/EventList";
import { useLoaderData, json } from "react-router-dom";
import EventSkeleton from "../components/EventSkeleton";
import { throttle, debounce } from "lodash";

const Events = () => {
    // loader가 리턴한 데이터 받아오기
    // const eventList = useLoaderData();

    // 이벤트 목록 아래 박스 참조
    const skeletonBoxRef = useRef();

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [isFinish, setIsFinish] = useState(false);

    const [skeletonCount, setSkeletonCount] = useState(4);
    const loadEvents = async () => {
        if (isFinish) {
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
        const restEventsCount = totalCount - updatedEvents.length;
        setSkeletonCount(Math.min(4, restEventsCount));
    };
    // const scrollHandler = throttle((e) => {
    //     if (
    //         loading ||
    //         window.innerHeight + document.documentElement.scrollTop >=
    //             document.documentElement.offsetHeight
    //     ) {
    //         return;
    //     }
    //     loadEvents();
    // }, 2000);

    // useEffect(() => {
    //     loadEvents();
    // }, []);

    // useEffect(() => {
    //     window.addEventListener("scroll", scrollHandler);

    //     return () => {
    //         window.removeEventListener("scroll", scrollHandler);
    //         scrollHandler.cancel();
    //     };
    // }, [currentPage, loading]);

    // 화면에 특정 박스가 보이면 다음페이지 로딩
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {

            // 현재 감시하고 있는 타겟의 정보
            console.log(entries[0]);
            
            if(!entries[0].isIntersecting || loading || isFinish) {
            return;
            }
            loadEvents();
        }, {
            // 감시대상의 요소가 50% 보일때 콜백을 실행
            threshold: 0.5
        });
        if (skeletonBoxRef.current) {
            observer.observe(skeletonBoxRef.current);
        }
        

        // 깜뽀난트가 렌더링이 사라질 때 옵저빙 중지
        return () => {
            if(skeletonBoxRef.current) {
                observer.disconnect();
            }
        }

    }, [loading, currentPage]);

    return (
        <>
            <h1>Events Page</h1>
            <EventList eventList={events} />
            <div
                ref={skeletonBoxRef}
                style={{ height: "300px", background: "yellow" }}
            >
                {loading && <EventSkeleton count={skeletonCount} />}
            </div>
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
