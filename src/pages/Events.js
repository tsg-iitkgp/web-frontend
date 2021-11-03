import React, { useState } from "react";
import Styles from "../styles/pages/events.module.css";
import eventsData from "../components/Events/UpcomingEvents";
import EventCard from "../components/Events/EventCard";
import Layout from "../components/Layout";
import { Carousel } from "react-carousel-minimal";
import { FaBell, FaTimes } from "react-icons/fa";
import Highlight from "../components/Events/Highlight";

export default function Events() {
  document.title = "Events | TSG";
  const [events, setEvents] = useState(eventsData);
  const [isHighlightOpen, setIsHighlightOpen] = useState(true);
  const data = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c2/Cyclothon.jpg",
      caption: "cyclothon",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/ab/CaseStudy.jpg",
      caption: "case study",
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Iitkgp.jpg",
      caption: "iit kgp",
    },
  ];

  const closeHighlight = (e) => {
    setIsHighlightOpen(false);
  }

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
    textTransform: 'uppercase'
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <Layout>

      {
        isHighlightOpen && (
          <section className={Styles.mainContainer}>
            <div className={Styles.highlightsContainer}>
              <div className={Styles.highlightsContainerHeader}>
                <div className={Styles.highlightsContainerMainHeading}>
                  <FaBell className={Styles.bellIcon} />
                  <h1>
                    Notifications
                  </h1>
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
        )
      }
      <div className={Styles.mainContainer}>
        {/* Recents Events */}

        <div className={Styles.categoryContainer}>
          <h2 className={Styles.categoryHeading1}>Recent Events</h2>
          <div className={Styles.recentEventsSlider}></div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "0 20px",
              width: '100%',
              margin: 'auto'
            }}
          >
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
              thumbnails={true}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                width: "90%",
                maxHeight: "600px",
                margin: "40px auto",
                height: "600px",
                marginBottom: "10%",
              }}
            />
          </div>
        </div>
      </div>

      <div className={Styles.mainContainer}>
        {/* Upcoming Events Container */}

        <div className={Styles.categoryContainer}>
          <h2 className={Styles.categoryHeading2}>
            Events
          </h2>
          <div className={Styles.cardsWrapper}>
            {events.map((event, index) => {
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

      </div>
    </Layout>
  );
}
