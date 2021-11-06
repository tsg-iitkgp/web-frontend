import React, { useState } from "react";
import Styles from "../styles/pages/events.module.css";
import eventsData from "../components/Events/UpcomingEvents";
import EventCard from "../components/Events/EventCard";
import Layout from "../components/Layout";
import { Carousel } from "react-carousel-minimal";
import { FaBell, FaTimes } from "react-icons/fa";
import Highlight from "../components/Events/Highlight";
import Calendar from "../components/Events/Calendar";

export default function Events() {
  document.title = "Events | TSG";
  const [events, setEvents] = useState(eventsData);
  const [isHighlightOpen, setIsHighlightOpen] = useState(true);
  const data = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c2/Cyclothon.jpg",
      caption: "Cyclothon",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/ab/CaseStudy.jpg",
      caption: "Case Study",
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Iitkgp.jpg",
      caption: "IITKGP",
    },
  ];

  const closeHighlight = (e) => {
    setIsHighlightOpen(false);
  };

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
    textTransform: "uppercase",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <Layout>
      <div className={Styles.bgContainer}>
        {isHighlightOpen && (
          <section className={Styles.mainContainer}>
            <div className={Styles.highlightsContainer}>
              <div className={Styles.highlightsContainerHeader}>
                <div className={Styles.highlightsContainerMainHeading}>
                  <FaBell className={Styles.bellIcon} />
                  <h1>Notifications</h1>
                </div>
                <div onClick={closeHighlight}>
                  <FaTimes className={Styles.timesIcon} />
                </div>
              </div>
              <div className={Styles.highlightsContainerBody}>
                <Highlight />
              </div>
            </div>
          </section>
        )}
        <div className={Styles.mainContainer}>
          {/* Recents Events */}

          <div className={Styles.categoryContainer}>
            <h2 className={Styles.categoryHeading1}>Recent Events</h2>
            <div className={Styles.recentEventsSlider}></div>
          </div>

          <div style={{ textAlign: "center" }}>
            <div>
              <Carousel
                data={data}
                time={2500}
                width="100%"
                height="60vh"
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="black"
                slideImageFit="contain"
                thumbnails={false}
                style={{
                  textAlign: "center",
                  width: "100%",
                  maxHeight: "600px",
                  height: "600px",
                  marginBottom: "10%",
                }}
              />
            </div>
          </div>
        </div>

        <div className={Styles.mainContainer}>
          <Calendar events={events} />
          {/* Upcoming Events Container */}

          <div className={Styles.categoryContainer}>
            <h2 className={Styles.categoryHeading2}>Events</h2>
            <div className={Styles.cardsWrapper}>
              {events.map((event, index) => {
                return (
                  <EventCard
                    title={event.title}
                    date={event.date || event.start}
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
        </div>
      </div>
    </Layout>
  );
}
