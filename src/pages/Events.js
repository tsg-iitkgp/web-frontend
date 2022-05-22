import React, { useState } from "react";
import Styles from "./events.module.css";
import eventsData from "../components/Events/eventsData";
import EventCard from "../components/Events/EventCard";
import Layout from "../components/Layout";
import { FaBell } from "react-icons/fa";
import Highlight from "../components/Events/Highlight";
// import Calendar from "../components/Events/Calendar";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";

export default function Events() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const handlePosterClick = (videoLink) => {
    window.open(videoLink);
  };
  document.title = "Events | TSG";
  // eslint-disable-next-line
  const [events, setEvents] = useState(eventsData);
  const highlightEvents = events.filter((event) => event.isHighlight);
  //eslint-disable-next-line
  const [isHighlightOpen, setIsHighlightOpen] = useState(true);
  //eslint-disable-next-line
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

  // const closeHighlight = (e) => {
  //   setIsHighlightOpen(false);
  // };

  // const captionStyle = {
  //   fontSize: "2em",
  //   fontWeight: "bold",
  //   textTransform: "uppercase",
  // };
  // const slideNumberStyle = {
  //   fontSize: "20px",
  //   fontWeight: "bold",
  // };

  return (
    <Layout>
      <div className={Styles.bgContainer}>
        {highlightEvents.length && isHighlightOpen && (
          <section className={Styles.mainContainer} data-aos="zoom-in-up">
            <div className={Styles.highlightsContainer}>
              <div className={Styles.highlightsContainerHeader}>
                <div className={Styles.highlightsContainerMainHeading}>
                  <FaBell className={Styles.bellIcon} />
                  <h1>Notifications</h1>
                </div>
                {/* <div onClick={closeHighlight}>
                  <FaTimes className={Styles.timesIcon} />
                </div> */}
              </div>
              <div className={Styles.highlightsContainerBody}>
                <Highlight events={highlightEvents} />
              </div>
            </div>
          </section>
        )}

        {/* Recents Events */}

        <h2 className={Styles.categoryHeading1}>Recent Events</h2>

        <section className="m-content">
          <section className={Styles.eventSlider}>
            <AutoplaySlider play={true} interval={5000}>
              <div
                data-src="media/images/events/upcomingEvents/yoga-banner.png"
                onClick={() =>
                  handlePosterClick("https://tinyurl.com/YogaMahotsav2022")
                }
              />
              <div
                data-src="media/images/events/upcomingEvents/yoga_mahotsav_banner.png"
                onClick={() =>
                  handlePosterClick("https://tinyurl.com/YogaMahotsav2022")
                }
              />
              <div
                data-src="media/images/events/upcomingEvents/qs.jpg"
                onClick={() => handlePosterClick("#")}
              />
            </AutoplaySlider>
          </section>
        </section>

        <div className={Styles.mainContainer}>
          {/* Upcoming Events Container */}

          <div className={Styles.categoryContainer} data-aos="zoom-in-up">
            <h2 className={Styles.categoryHeading2}>Events</h2>
            <div className={Styles.cardsWrapper}>
              {events.map((event, index) => {
                return (
                  <EventCard
                    title={event.title}
                    date={event.date || event.start}
                    description={event.description}
                    // bodyContent={event.bodyContent}
                    imgSrc={event.poster}
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
