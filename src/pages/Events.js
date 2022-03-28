import React, { useState } from "react";
import Styles from "../styles/pages/events.module.css";
import eventsData from "../components/Events/eventsData";
import EventCard from "../components/Events/EventCard";
import Layout from "../components/Layout";
import { FaBell, FaTimes } from "react-icons/fa";
import Highlight from "../components/Events/Highlight";
import Calendar from "../components/Events/Calendar";

import "./events.css";

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
  const [events, setEvents] = useState(eventsData);
  const highlightEvents = events.filter((event) => event.isHighlight);
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
                <div onClick={closeHighlight}>
                  <FaTimes className={Styles.timesIcon} />
                </div>
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
          <section className="events-slider">
            <AutoplaySlider play={true} interval={5000}>
              <div
                data-src="/media/images/events/upcomingEvents/pl.jpg"
                onClick={() =>
                  handlePosterClick(
                    "https://www.facebook.com/1375511306004699/posts/2977716442450836"
                  )
                }
              />
              <div
                data-src="/media/images/events/upcomingEvents/icgc.jpg"
                onClick={() =>
                  handlePosterClick(
                    "https://www.facebook.com/1375511306004699/posts/2975267989362348"
                  )
                }
              />
              <div
                data-src="/media/images/events/upcomingEvents/opensoft.png"
                onClick={() =>
                  handlePosterClick(
                    "https://www.facebook.com/iitkgp.tech/posts/4941772725869603"
                  )
                }
              />
              <div
                data-src="/media/images/events/upcomingEvents/openiitchess.jpg"
                onClick={() =>
                  handlePosterClick(
                    "https://www.facebook.com/sports.iitkgp/posts/2973351309554016"
                  )
                }
              />
              <div
                data-src="/media/images/events/upcomingEvents/oev.jpg"
                onClick={() =>
                  handlePosterClick(
                    "https://www.facebook.com/CulturalKGP/posts/4859245817492651"
                  )
                }
              />
              <div
                data-src="/media/images/events/upcomingEvents/owv.jpg"
                onClick={() =>
                  handlePosterClick(
                    "https://www.facebook.com/CulturalKGP/posts/4859245817492651"
                  )
                }
              />
              <div
                data-src="/media/images/events/upcomingEvents/SIH-2022.png"
                onClick={() =>
                  handlePosterClick("https://www.sih.gov.in/sih2022PS")
                }
              />
              <div
                data-src="/media/images/events/upcomingEvents/qs.jpg"
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
