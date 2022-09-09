import React, { useState, useEffect } from "react";
import Styles from "./events.module.css";
// import eventsData from "../components/Events/eventsData";
import EventCard from "../components/Events/EventCard";
import Layout from "../components/Layout";
// import Highlight from "../components/Events/Highlight";
import host from '../apiService'
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
import Popup from "../components/Popup";

export default function Events() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const [show, setShow]= useState(false);
  const [content, setContent]= useState(null);
  const [image,setImage]= useState(null);

  const handlePosterClick = (videoLink) => {
    window.open(videoLink);
  };
  document.title = "Events | TSG";
  // eslint-disable-next-line
  const [events, setEvents] = useState([]);
  // const highlightEvents = events.filter((event) => event.isHighlight);
  //eslint-disable-next-line
  // const [isHighlightOpen, setIsHighlightOpen] = useState(true);
  //eslint-disable-next-line
  useEffect(() => {
    fetch(
      `${host}/admin/events/all`
    )
      .then((response) => response.json())
      .then((responseData) => {
        setEvents(responseData.events);
        // console.log(responseData.events);
      })
      .catch((err) => {
        console.log('the error is', err);
      }
      );
  }, []);
  

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


  return (
    <Layout>
      <Popup show={show} content={content} disable={()=>{setShow(false)}} imgSrc={image}/>
      <div className={Styles.bgContainer}>
        {/* {highlightEvents.length && isHighlightOpen && (
          <section className={Styles.mainContainer} data-aos="zoom-in-up">
            <div className={Styles.highlightsContainer}>
              <div className={Styles.highlightsContainerHeader}>
                <div className={Styles.highlightsContainerMainHeading}>
                  <FaBell className={Styles.bellIcon} />
                  <h1>Notifications</h1>
                </div>
              </div>
              <div className={Styles.highlightsContainerBody}>
                <Highlight events={highlightEvents} />
              </div>
            </div>
          </section>
        )} */}

        {/* Recents Events */}

        <h2 className={Styles.categoryHeading1}>Recent Events</h2>

        <section className="m-content">
          <section className={Styles.eventSlider}>
            <AutoplaySlider play={true} interval={5000}>
              <div
                data-src="/data/media/images/events/upcomingEvents/yoga-banner.png"
                onClick={() =>
                  handlePosterClick("https://tinyurl.com/YogaMahotsav2022")
                }
              />
              <div
                data-src="/data/media/images/events/upcomingEvents/yoga_mahotsav_banner.png"
                onClick={() =>
                  handlePosterClick("https://tinyurl.com/YogaMahotsav2022")
                }
              />
              <div
                data-src="/data/media/images/events/upcomingEvents/qs.jpg"
                onClick={() => handlePosterClick("#")}
              />
              <div
                data-src="/data/media/images/events/upcomingEvents/tt_tournament.png"
                onClick={() =>
                  handlePosterClick("https://www.facebook.com/111989874951868/posts/112201191597403")
                }
              />
            </AutoplaySlider>
          </section>
        </section>

        <div className={Styles.mainContainer}>
          {/* Upcoming Events Container */}

          <div className={Styles.categoryContainer} data-aos="zoom-in-up">
            <h2 className={Styles.categoryHeading2}>Events</h2>
            <div className={Styles.cardsWrapper}>
              {events.map((event) => {
                let imgSrc = null;
                if (event.image) {
                  imgSrc = `data:${event.imageMimeType};base64,${Buffer.from(event.image).toString('base64')}`;
                }
                return (
                  <EventCard
                    title={event.title}
                    date={event.dates}
                    description={event.description}
                    imgSrc={imgSrc}
                    index={event.id}
                    displayTrue={()=>{
                      setShow(true);
                      setContent(event);
                      setImage(imgSrc);
                    }}
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
