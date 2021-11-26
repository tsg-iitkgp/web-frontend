import React from "react";
import Layout from "../components/Layout";
import { Carousel } from "react-carousel-minimal";
import Styles from "./TechCom.module.css";
import ContactStyles from "../styles/pages/contacts.module.css";
import EventCard from "../components/Events/EventCard";
import events from "../components/Events/UpcomingEvents";
import ContactCard from "../components/ContactCard";
import { secyData } from "../data/secyData";
export default function TechCom() {
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
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
    textTransform: "uppercase",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  const techComTeam = [
    {
      RollNo: "19IM30022",
      Name: "Vadthya Sanjay Kumar",
      Category: "General Secretary",
      Post: "GSec - Technology",
      img: "19IM30022.png",
      Contact: 9121372359,
      Email: "sanjayvadthya789@gmail.com",
      "Institue ids": "sanjayvadthya789@gmail.com",
      "Institute mail ids": "gsectsg-tech@hijli.iitkgp.ac.in",
    },
    {
      RollNo: "19CE10028",
      Name: "Gaurav Kumar",
      Category: "General Secretary",
      Post: "GSec - Technology",
      img: "19CE10028.jpg",
      Contact: 9350031637,
      Email: "gauyadav05@gmail.com ",
      "Institue ids": "gauyadav05@gmail.com",
      "Institute mail ids": "",
    },
    {
      RollNo: "19AE10017",
      Name: "Praneeth Reddy Kolanu",
      Category: "Nominated Posts",
      Post: "Technology Coordinator",
      img: "19AE10017.png",
      Contact: 7013160459,
      Email: "praneeth.kolanu.iitkgp@gmail.com",
      "Institue ids": "k.praneeth1199@iitkgp.ac.in",
      "Institute mail ids": "",
    },
    {
      id: 30,
      RollNo: "20AR10023",
      Name: "Nidam Kumar Jha",
      Post: "Secretary Innovation Cup",
      Email: "nidamjha@gmail.com",
      Phone: "9310525609/7291893736",
      Hall: "LBS",
    },
    {
      id: 31,
      RollNo: "20HS20022",
      Name: "Gaurav Chanchal",
      Post: "Secretary Strategy Cup",
      Email: "gauravchanchal2003@gmail.com",
      Phone: 9044750387,
      Hall: "LBS",
    },
    {
      id: 29,
      RollNo: "20CE30012",
      Name: "Ikshita Agarwal",
      Post: "Secretary Application Cup",
      Email: "agarwalikshita13@gmail.com",
      Phone: 8118868021,
      Hall: "SNIG",
    },
    {
      id: 8,
      RollNo: "20HS20041",
      Name: "Nirmal Kumawat",
      Post: "Web Secretary",
      Email: "kumavatshubham0@gmail.com",
      Phone: 7587579052,
      Hall: "LBS",
    },
    {
      id: 9,
      RollNo: "20HS20067",
      Name: "Suraj Gupta",
      Post: "Web Secretary",
      Email: "surajgupta.3072@gmail.com",
      Phone: 8879555132,
      Hall: "LBS",
    },
  ];
  return (
    <Layout>
      <div style={{ textAlign: "center" }} className={Styles.mainContainer}>
        <div>
          <h2 className={Styles.pageHeading}>Tech Committee</h2>

          {/* ----Carousel---- */}

          <Carousel
            data={data}
            time={2500}
            width="100%"
            height="70vh"
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
              maxHeight: "80vh",
              height: "80vh",
              marginBottom: "5%",
            }}
          />
        </div>

        {/* ----About Us Section---- */}

        <div className={Styles.container} id="aboutUs">
          <div className={Styles.aboutUsSection}>
            <h2 className={Styles.sectionHeading}>About Us</h2>
            <p className={Styles.description}>
              Technology Students’ Gymkhana is the hub of the numerous
              extra-curricular and co-curricular activities in IIT Kharagpur
              ranging from sports to socio-cultural. The Gymkhana is managed by
              the students, for the students, under the guidance and active
              participation of the faculty and staff members.
            </p>
            <p className={Styles.description}>
              The moto of Technology Students' Gymkhana is YOGAH KARMASU
              KAUSALAM which in English means "Perfection in action is Yoga".
              Our goal is to bring overall development in IITians through
              cultivating and nurturing their extra-curricular talents.
            </p>
          </div>
        </div>

        {/* ----Our Team---- */}

        <div className={Styles.teamContainer}>
          <h2 className={ContactStyles.postHeading}>Our Team</h2>
          <div className={ContactStyles.multipleCards}>
            {techComTeam.map((member, index) => {
              return (
                <ContactCard
                  name={member.Name}
                  designation={member.Post}
                  email={member.Email}
                  imgSrc={`/media/images/${
                    member.Category === "General Secretary" ||
                    member.Category === "Nominated Posts"
                      ? "contacts"
                      : "secyImages"
                  }/${member.RollNo}.png`}
                />
              );
            })}
          </div>
        </div>
        {/* ----Upcoming Events---- */}

        <div className={Styles.categoryContainer}>
          <h2 className={Styles.categoryHeading2}> Upcoming Events</h2>
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

        {/* ----Archived Events---- */}

        <div className={Styles.categoryContainer}>
          <h2 className={Styles.categoryHeading2}> Archived Events</h2>
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
                  eventCategory="archived"
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
