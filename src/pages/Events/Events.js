import React, { useState, useEffect } from "react";
import Styles from "./events.module.css";
// import eventsData from "../components/Events/eventsData";
import EventCard from "../../components/EventCard/EventCard";
import Layout from "../../components/Layouts/Layout";
// import Highlight from "../components/Events/Highlight";
import host from "../../apiService";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
import Popup from "../../components/Popup";
import ResultsPreview from "../../components/Admin/DataUpdate/ResultsPreview";
import SkeletonElement from "../../components/Skeleton/SkeletonElement";

export default function Events() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const [show, setShow] = useState(false);
  const [showRes, setShowRes] = useState(false);
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState(null);
  const [eventResults, setEventResults] = useState(null);
  // const [resContent, setResContent] = useState(null);
  const [image, setImage] = useState(null);
  const [index, setIndex] = useState(null);
  const paginationNumber = 4;
  const [eventIndex, setEventIndex] = useState({
    startIndex: 1,
    stopIndex: paginationNumber,
  });
  const [events, setEvents] = useState([]);
  const [images,setImages] = useState([]);
  const [btnStyles, setBtnStyles] = useState("btn-warning");
  const [noMoreEvents, setNoMoreEvents] = useState(false);
  
  // const [displayEvents] = useState(null);

  const handlePosterClick = (videoLink) => {
    window.open(videoLink);
  };
  document.title = "Events | TSG";
  // eslint-disable-next-line
  // const highlightEvents = events.filter((event) => event.isHighlight);
  //eslint-disable-next-line
  // const [isHighlightOpen, setIsHighlightOpen] = useState(true);
  //eslint-disable-next-line
  useEffect(() => {
    setTimeout(async () => {
      fetch(
        `${host}/events/`
      )
        .then((response) => response.json())
        .then((responseData) => {
          setEvents(events.concat(responseData.data));
          if (responseData.data.length === 0) {
            setNoMoreEvents(true);
          }
          console.log(responseData.data)
        })
        .catch((err) => {
          console.log("the error is", err);
        });
    }); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  

  useEffect(() => {
    if (noMoreEvents) {
      setBtnStyles("btn-secondary");
    }
  }, [noMoreEvents]);

  useEffect(() => {
    setTimeout(async () => {});
  });

  return (
    <Layout>
      <Popup
        show={show}
        content={content}
        disable={() => {
          setShow(false);
        }}
        imgSrc={image}
      />
      <ResultsPreview
        eventTitle={title}
        eventResults={eventResults}
        showRes={showRes}
        index={index}
        disable={() => {
          setShowRes(false);
        }}
      />

      <div className={Styles.bgContainer}>
        {/* Recents Events */}

        <h2 className={Styles.categoryHeading1}>Recent Events</h2>

        <section className="m-content">
          <section className={Styles.eventSlider}>
            <AutoplaySlider play={true} interval={5000}>
              <div
                data-src="/data/media/images/events/ongoing/director-interview.png"
                onClick={() => handlePosterClick("https://youtu.be/FlOlb9qSms0")}
              />
              <div
                data-src="/data/media/images/events/upcomingEvents/qs.jpg"
                onClick={() => handlePosterClick("#")}
              />
              <div
                data-src="/data/media/images/events/ongoing/Feedback_Form.jpg"
                onClick={() =>
                  handlePosterClick(
                    "https://www.facebook.com/100068477642783/posts/pfbid02ya4fpTr1CMo31BFamDe4zdCeQSWi1HekFrUg3pNVcR73r5kes5V5U7uQJhC4AiJ7l/?mibextid=Nif5oz"
                  )
                }
              />
              <div
                data-src="/data/media/images/events/ongoing/Inter_IIT.jpg"
                onClick={() =>
                  handlePosterClick(
                    "https://www.facebook.com/100064570724530/posts/pfbid025gTAVLrqBr5NYeMRTHhHDePwXC88HWafUdE221YraCibcafMQ7wgtF7iodqSBhYfl/?mibextid=Nif5oz"
                  )
                }
              />
              <div
                data-src="/data/media/images/events/Freshers.jpg"
                onClick={() =>
                  handlePosterClick(
                    "https://www.facebook.com/100064570724530/posts/pfbid031xm5yrMnEBDWsLeVrr9SeJrVsA9WP8fpYNDbo3CjWgp8r56yhRNPF6MTTFpcMp7bl/?mibextid=Nif5oz"
                  )
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
              {events &&
                events.map((event) => {
                  // Earlier code had a problem with the URL so we hard coded it in line number 157
                  // let imgSrc = null;
                  // if (event.image) {
                  //   imgSrc = `data:${event.image.imageMimeType};base64,${Buffer.from(
                  //     event.image
                  //   ).toString("base64")}`;
                  // }
                  let imgSrc = `https://gymkhana.iitkgp.ac.in${event.image}`;
                  console.log(imgSrc);
                  return (
                    <EventCard
                      key={event.id}
                      title={event.title}
                      date={event.dates}
                      description={event.description}
                      resultExists={event.resultExists}
                      imgSrc={imgSrc}
                      index={event.id}
                      displayTrue={() => {
                        setShow(true);
                        setContent(event);
                        setImage(imgSrc);
                      }}
                      displayResults={() => {
                        setShowRes(true);
                        setTitle(event.title);
                        setIndex(event.id);
                        // console.log(`The title is ${title} id = ${event.id}`);
                      }}
                      setEventResults={setEventResults}
                    />
                  );
                })}
              {!events.length && (
                <div>
                  <SkeletonElement type="thumbnail" />
                  <SkeletonElement type="thumbnail" />
                  <SkeletonElement type="thumbnail" />
                  <SkeletonElement type="thumbnail" />
                </div>
              )}

              <button
                style={{ width: "30%" }}
                className={`m-auto btn ${btnStyles} text-white`}
                disabled={noMoreEvents}
                onClick={() => {
                  setEventIndex({
                    startIndex: eventIndex.startIndex + paginationNumber,
                    stopIndex: eventIndex.stopIndex + paginationNumber,
                  });
                }}
              >
                See More Events
              </button>
            </div>
          </div>
        </div> 
      </div>
    </Layout>
  );
}
