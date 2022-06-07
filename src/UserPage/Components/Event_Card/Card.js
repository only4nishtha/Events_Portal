import React from 'react';
import './Card.css';
import  events  from './data';

const Event = ({event:{society,eventname,date,time}}) =>{
  return(
    <div className="event">
      <div className="event_wrapper">
        <div className="event_society">
          <span className="society_name">{society}</span>
        </div>
        <div className="event_name">
          <span>{eventname}</span>
        </div>
        <div className="event_date">
          <span>Date : </span>
          <span className="date">{date}</span>
        </div>
        <div className="event_time">
          <span>Time : </span>
          <span className="time">{time}</span>
        </div>
        <div className="event_register">
          <button><span className='register' >Register now</span></button>
        </div>
      </div>
    </div>
  )
}

const Card = () => {
  return(
  <div className="events">
    {events.map((event)=>
    <Event event={event} key={event.id}/>)}
  </div>
  )
}

export default Card;
