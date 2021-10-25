import React from "react";
import Styles from "../styles/pages/events.module.css";
import UpcomingEvents from "../components/Events/UpcomingEvents";
import OngoingEvents from "../components/Events/UpcomingEvents";
import EventCard from "../components/Events/EventCard";
import Layout from "../components/Layout";
export default function Events() {
  document.title = "Events | TSG";
  return (
    <Layout>
      <div className={Styles.mainContainer}>
        {/* Upcoming Events Container */}
        <div className={Styles.upcomingContainer}>
          {UpcomingEvents.map((event, index) => {
            return (
              <EventCard
                title={event.title}
                date={event.date}
                description={event.description}
                bodyContent={event.bodyContent}
                imgName={event.imgName}
                eventCategory="upcoming"
              />
            );
          })}
        </div>

        {/* Ongoing Events Container */}
        <div className={Styles.ongoingContainer}>
          {OngoingEvents.map((event, index) => {
            return (
              <EventCard
                title={event.title}
                date={event.date}
                description={event.description}
                bodyContent={event.bodyContent}
                eventCategory="ongoing"
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
