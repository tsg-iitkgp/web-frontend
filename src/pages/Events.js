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
import ResultsPreview from "../components/Admin/DataUpdate/ResultsPreview";
import SkeletonElement from "../components/Skeleton/SkeletonElement";

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
        stopIndex: paginationNumber
    });
    const [events, setEvents] = useState([]);
    const [btnStyles, setBtnStyles] = useState('btn-warning');
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
        setTimeout( async() => {
            fetch(
                `${host}/admin/events/some/${eventIndex.startIndex}/${eventIndex.stopIndex}`
            )
                .then((response) => response.json())
                .then((responseData) => {
                    setEvents(events.concat(responseData.events));
                    if (responseData.events.length === 0) {
                        setNoMoreEvents(true);
                    }
                    // console.log(responseData.events);
                })
                .catch((err) => {
                    console.log('the error is', err);
                }
                );
        });
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [eventIndex]);

    useEffect(() => {
        if (noMoreEvents) {
            setBtnStyles('btn-secondary');
        }
    }, [noMoreEvents]);

    useEffect(() => {
        setTimeout( async() => {

        })
    })

    return (
        <Layout>
            <Popup show={show} content={content} disable={() => { setShow(false) }} imgSrc={image} />
            <ResultsPreview eventTitle={title} eventResults={eventResults} showRes={showRes} index={index} disable={() => { setShowRes(false) }} />

            <div className={Styles.bgContainer}>

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
                            {events && events.map((event => {
                                let imgSrc = null;
                                if (event.image) {
                                    imgSrc = `data:${event.imageMimeType};base64,${Buffer.from(event.image).toString('base64')}`;
                                }
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
                            }))}
                            {!events.length && 
                            <div>
                                <SkeletonElement type="thumbnail" />
                                <SkeletonElement type="thumbnail" />
                                <SkeletonElement type="thumbnail" />
                                <SkeletonElement type="thumbnail" />
                            </div> }
                            
                            <button style={{ "width": "30%" }} className={`m-auto btn ${btnStyles} text-white`} disabled={noMoreEvents} onClick={() => {
                                setEventIndex({
                                    startIndex: eventIndex.startIndex + paginationNumber,
                                    stopIndex: eventIndex.stopIndex + paginationNumber
                                })
                            }}>See More Events</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
