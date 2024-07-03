import React from 'react';
import EventList from '../components/EventList';
import { useLoaderData } from 'react-router-dom';

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

// loader를 여기서 선언한다고? 밑바닥 밑에는 지하가 있다.
export const loader = async () => {
    //loader에서 fetch의 결과를 바로 리턴하면 알아서 json을 추출해줌 loader에서만 가능
    const res = await fetch('http://localhost:8282/events');
    return res;
  }
