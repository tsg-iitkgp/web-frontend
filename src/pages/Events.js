import React from "react";
import Styles from "../styles/pages/events.module.css";
import UpcomingEvents from "../components/Events/UpcomingEvents";
import OngoingEvents from "../components/Events/UpcomingEvents";
import EventCard from "../components/Events/EventCard";
import Layout from "../components/Layout";
import { Carousel } from 'react-carousel-minimal';


export default function Events() {

  const data = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Cyclothon.jpg",
      caption: "cyclothon"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/CaseStudy.jpg",
      caption: "case study"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Iitkgp.jpg",
      caption: "iit kgp"
    },
   
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }



  document.title = "Events | TSG";
  return (
    <Layout>

<div className="App">

<div className={Styles.mainContainer}>

       {/* Recents Events */}

       <div className={Styles.categoryContainer}>
          <h2 className={Styles.categoryHeading}>Recent Events</h2>
          <div className={Styles.recentEventsSlider}></div>
        </div>



      <div style={{ textAlign: "center" }}>

        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="100%"
            height="800px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "80%",
              maxHeight: "600px",
              margin: "40px auto",
              height:"800px",
             
            }}
          />
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <br/> <br/>
    <br/>
    <br/> <br/>
    <br/>
    <br/> <br/>
    <br/>
    <br/> <br/>
    <br/>
    <br/> <br/>
    <br/>
    <br/> <br/>
    <br/>
    <br/>


    

   
        {/* Upcoming Events Container */}

        {/* <div className={Styles.categoryContainer}>
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
                  eventCategory="upcoming"
                />
              );
            })}
          </div>
        </div> */}

        {/* Ongoing Events Container */}

        
        {/* <div className={Styles.categoryContainer}>
          <h2 className={Styles.categoryHeading}>Ongoing Events</h2>
          {OngoingEvents.map((event, index) => {
            return (
              <EventCard
                title={event.title}
                date={event.date}
                description={event.description}
                bodyContent={event.bodyContent}
                imgName={event.imgName}
                eventCategory="ongoing"
              />
            );
          })}
        </div> */}
      </div>



    </Layout>
  );
}
