import React from "react";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import Styles from "../../styles/components/Events/calendar.module.css";

function Calendar({ events }) {
  function renderEventContent(eventInfo) {
    return (
      <>
        <b className={Styles.eventTimeText}>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  const handleDateClick = (arg) => {
    // bind with an arrow function
    // console.log(arg);
  };

  const handleEventClick = (arg) => {
    console.log(arg.event.title);
  };
  return (
    <div className={Styles.calendarContainer} data-aos="zoom-in-up">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
        selectable={true}
        // dateClick={handleDateClick}
        // eventClick={handleEventClick}
        events={events}
        select={handleDateClick}
        eventContent={renderEventContent} // custom render function
        eventClick={handleEventClick}
      />
    </div>
  );
}

export default Calendar;
