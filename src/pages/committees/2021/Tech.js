import React from "react";
import Layout from "../../../components/Layout";
import Styles from "../styles/tech.module.css";
import globalStyles from "../styles/committees.module.css";
import ContactStyles from "../../../styles/pages/contacts.module.css";
// import events from "../../../components/Events/UpcomingEvents";
import ContactCard from "../../../components/ContactCard";
import img1 from "./images/tech/websiteHackathon.jpeg";
import img2 from "./images/tech/saminn.jpg";
import img3 from "./images/tech/techvis.jpg";

export default function Tech() {
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
      id: 34,
      RollNo: "20AR10026",
      Name: "Nitish Kumar",
      Post: "Web Secretary",
      Email: "nitish.bpns@gmail.com",
      Phone: 9507816000,
      Hall: "Patel",
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
      <div className={globalStyles.mainContainer}>
        {/* ----Welcome Section---- */}

        <div className={globalStyles.welcomeSection}>
          <div className={globalStyles.backgroundImage}></div>
          <div className={globalStyles.welcomeContent}>
            <h1 className={globalStyles.committeeHeading}>Tech Committee</h1>
          </div>
        </div>

        {/* ----About Us Section---- */}

        <section>
          <div className={Styles.aboutUsSection}>
            <h1>About Us</h1>
            <p className={globalStyles.description}>
              Technology, as we know, makes everything possible around us. It
              encompasses all possibilities that mankind has to foster and
              implement in order to secure a better future. Special emphasis is
              given on Technology in IIT Kharagpur, therefore we have many
              facilities which can be used by all the students. Technology
              Committee consists of four subcommittees: Innovation Cup,
              Application Cup, Knowledge Cup, Strategy Cup.
            </p>
            {/* <p className={globalStyles.description}>
              The moto of Technology Students' Gymkhana is YOGAH KARMASU
              KAUSALAM which in English means "Perfection in action is Yoga".
              Our goal is to bring overall development in IITians through
              cultivating and nurturing their extra-curricular talents.
            </p> */}
          </div>
        </section>
        {/* Tech Movie */}

        <section>
          <h2>Tech Movie</h2>
          <div className={Styles.videoContainer}>
            <iframe
              src="https://www.youtube.com/embed/yZTGtIHYQpU?rel=0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Illumination 2021"
              className={Styles.techMovieVideo}
            />
          </div>
        </section>
        <h1>Events</h1>

        {/*  Website Hackathon*/}
        <section>
          <h2>Website Hackathon(Ongoing)</h2>
          <center>
            <div className={globalStyles.imgContainer}>
              <img
                src={img1}
                alt="Website Hackathon Poster"
              />
            </div></center>

          <p className={globalStyles.description}>
            In this event, the students were expected to develop a website that
            would synchronize a student's academic, extracurricular, and
            co-curricular information in one place. As a part of the event, the
            participating teams would develop an API-based backend for the
            website and use it to serve the content for the frontend(s).
            <br />
            <br />
            Link to Problem Statement:{" "}
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1Hmfomj7pa0o8AZonzxC0O0GNTPU0PjgW/view?usp=sharing"
              rel="noreferrer"
            >
              Click Here
            </a>
          </p>
        </section>
        {/* Samsung Innovation Award : IIT Kharagpur Chapter */}
        <section>
          <h2>Samsung Innovation Award : IIT Kharagpur Chapter</h2>
          <center>
            <div className={globalStyles.imgContainer}>
              <img
                src={img2}
                alt="Website Hackathon Poster"
              />
            </div></center>

          <p className={globalStyles.description}>
            Samsung Innovation Award-IIT Kharagpur Chapter was organised by
            Technology Students' Gymkhana, IIT Kharagpur, and Entrepreneurship
            Cell, IIT Kharagpur. Samsung Innovation Award is organized annually
            by the Samsung R&D Institute India Bangalore aims to identify,
            encourage and reward innovative ideas and projects.
            <br />
            The Silver Jubilee Edition is a Multi-IIT event with all our IIT
            partners from the last ten editions. The theme for the 2021 edition
            is 'Metaverse', i.e., technologies ranging from AR/VR, 3d Spaces and
            Reconstruction, to experiences in gaming, tourism, and many more.
          </p>
        </section>
        {/* TechVistara */}
        <section>
          <h2>TechVistara</h2>
          <center>
            <div className={globalStyles.imgContainer}>
              <img
                src={img3}
                alt="Website Hackathon Poster"
              />
            </div></center>

          <p className={globalStyles.description}>
            TechVistara is a series of interactive sessions aimed to unravel the
            world around us and present it in the most optimized way possible.
            The first episode shed light on “Discovery of Exoplanets and Search
            for the habitable world”. It was presented by Professor Anand
            Narayanan, an astrophysicist scholar and a professor at IIST.
          </p>
        </section>
      </div>
    </Layout>
  );
}
