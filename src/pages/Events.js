import React from "react";
import Styles from "";
import UpcomingEvents from "../components/Events/UpcomingEvents";
import OngoingEvents from "../components/Events/UpcomingEvents";
import EventCard from "../components/Events/EventCard";
export default function Events() {
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.upcomingContainer}>
        {UpcomingEvents.map((event, index) => {
          return (
            <EventCard
              title={event.title}
              date={event.date}
              description={event.description}
              bodyContent={event.bodyContent}
            />
          );
        })}
      </div>
      <div className={Styles.ongoingContainer}>
        {OngoingEvents.map((event, index) => {
          return (
            <EventCard
              title={event.title}
              date={event.date}
              description={event.description}
              bodyContent={event.bodyContent}
            />
          );
        })}
      </div>
    </div>
  );
}
