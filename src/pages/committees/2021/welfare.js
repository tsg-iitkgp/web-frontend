import React from "react";
import Layout from "../../../components/Layout";
import Styles from "../styles/tech.module.css";
import globalStyles from "../styles/committees.module.css";
import ContactStyles from "../../../styles/pages/contacts.module.css";
import events from "../../../components/Events/UpcomingEvents";
import ContactCard from "../../../components/ContactCard";
import img1 from "./images/tech/mentalwork.jpg";
import img2 from "./images/tech/anxious.jpg";

export default function Welfare() {
  const techComTeam = [
    {
      RollNo: "19EE10016",
      Name: "Bhosale Shivam Pravin",
      img: "19EE10016.png",
      Category: "General Secretary",
      Post: "GSec - Students' Welfare",
      Contact: 9890359987,
      Email: "bhosaleshivam3333@gmail.com",
      "Institue ids": "bhosaleshivam3333@gmail.com",
      "Institute mail ids": "gsectsg-welfare@hijli.iitkgp.ac.in",
    },
    {
      RollNo: "19AE10014",
      Name: "Jeripothula Sindhu",
      Post: "GSec - Students' Welfare",
      Category: "General Secretary",
      img: "19AE10014.png",
      Contact: 9502834599,
      Email: "sindhujeripothula@gmail.com",
      "Institue ids": "sindhujeripothula@gmail.com",
      "Institute mail ids": "",
    },
    {
      id: 32,
      RollNo: "20CS10031",
      Name: "Kartik Pontula",
      Post: "Secretary Academic Help",
      Email: "kartikpontula@gmail.com",
      Phone: 9110344714,
      Hall: "LBS",
    },
    {
      id: 33,
      RollNo: "20EX20001",
      Name: "Aaditri Vaibhav",
      Post: "Secretary Community And Crisis",
      Email: "aaditri.vaibhav@gmail.com",
      Phone: 8789617065,
      Hall: "SN/IG",
    },

  ];
  return (
    <Layout>
      <div className={globalStyles.mainContainer}>
        {/* ----Welcome Section---- */}

        <div className={globalStyles.welcomeSection}>
          <div className={globalStyles.backgroundImage}></div>
          <div className={globalStyles.welcomeContent}>
            <h1 className={globalStyles.committeeHeading}>Students' Welfare Committee</h1>
          </div>
        </div>

        {/* ----About Us Section---- */}

        <section>
          <div className={Styles.aboutUsSection}>
            <h1>About Us</h1>
            <p className={globalStyles.description}>
              Technology Students’ Gymkhana is the hub of the numerous
              extra-curricular and co-curricular activities in IIT Kharagpur
              ranging from sports to socio-cultural. The Gymkhana is managed by
              the students, for the students, under the guidance and active
              participation of the faculty and staff members.
            </p>
            <p className={globalStyles.description}>
              The moto of Technology Students' Gymkhana is YOGAH KARMASU
              KAUSALAM which in English means "Perfection in action is Yoga".
              Our goal is to bring overall development in IITians through
              cultivating and nurturing their extra-curricular talents.
            </p>
          </div>
        </section>


        <section>
          <h1>Recent Events</h1>
          <center>
            <div className={globalStyles.img2Container}>
              <img
                src={img2}
                alt="Have you felt anxious"
              />
            </div>
            <br /><br /><br />
            <h1>Mental Wellness Workshop</h1>
            <div className={globalStyles.img2Container}>
              <img
                src={img1}
                alt="Mental welness workshop"
              />
            </div>
          </center>

        </section>
      </div>
    </Layout>
  );
}
