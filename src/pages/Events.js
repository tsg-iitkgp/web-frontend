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
        {/* Recents Events */}

        <div className={Styles.categoryContainer}>
          <h2 className={Styles.categoryHeading}>Recent Events</h2>
          <div className={Styles.recentEventsSlider}></div>
        </div>

        {/* Upcoming Events Container */}

        <div className={Styles.categoryContainer}>
          <h2 className={Styles.categoryHeading}>Upcoming Events</h2>
          <div className={Styles.cardsWrapper}>
            {UpcomingEvents.map((event, index) => {
              return (
                <EventCard
                  title={event.title}
                  date={event.date}
                  description={event.description}
                  bodyContent={event.bodyContent}
                  imgName={event.imgName}
                  index={index}
                  eventCategory="upcoming"
                />
              );
            })}
          </div>
        </div>

        {/* Ongoing Events Container */}
        <div className={Styles.categoryContainer}>
          <h2 className={Styles.categoryHeading}>Ongoing Events</h2>
          {OngoingEvents.map((event, index) => {
            return (
              <EventCard
                title={event.title}
                date={event.date}
                index={index}
                description={event.description}
                bodyContent={event.bodyContent}
                imgName={event.imgName}
                eventCategory="ongoing"
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
