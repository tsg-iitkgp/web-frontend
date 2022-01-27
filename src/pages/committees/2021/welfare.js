import React from "react";
import Layout from "../../../components/Layout";
import Styles from "../styles/tech.module.css";
import globalStyles from "../styles/committees.module.css";
import ContactStyles from "../../../styles/pages/contacts.module.css";
import events from "../../../components/Events/UpcomingEvents";
import ContactCard from "../../../components/ContactCard";
import img1 from "./images/tech/mentalwork.jpg";
import img2 from "./images/tech/anxious.jpg";
import projects from "./images/tech/projects.jpg";

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
        <h1>Ongoing Events</h1>
        <section>
          <center>
            <h2 style={{ color: 'lightBlue', letterSpacing: '2px' }} >Call for Projects</h2><br />
            <br />
            <div className={globalStyles.img2Container}>
              <img
                src={projects}
                alt="projects"
              />
            </div>
            <br />
          </center><p className={globalStyles.description}>
            There is no greater joy nor greater reward than to make a fundamental difference in someone’s life.<br /> – Mary Rose McGeady<br />
            Upholding the motto and values of selfless service, Student’s Welfare Committee presents a noble initiative wherein NSS and other interested students will volunteer to work with NGOs on their varied projects for social welfare.<br />
            Through this we intent to emphasize the spirit of “ Not me But you" while providing a platform for the students and NGOs to collaborate for social growth, through a tremendously fulfilling and rewarding experience. <br />
            We invite all the NGOs with their social projects to partner with us in this incredible opportunity to bring about a social change.<br />
            Link to submit Project Details:<a href="https://forms.gle/71axBULAaZ9DtiKMA">Click here</a><br />
          </p>
          <br /><br /><br />

        </section>
        <section>
          <h1>Recent Events</h1>
          <center>
            <h2 style={{ color: 'lightBlue', letterSpacing: '2px' }} >Mental Wellness Workshop<br />
              Have you felt anxious lately?</h2><br />
            <br />
            <div className={globalStyles.img2Container}>
              <img
                src={img2}
                alt="Have you felt anxious"
              />
            </div>
          </center><p className={globalStyles.description}>
            <br />
            Hello all,<br />
            “Anything that’s human is mentionable, and anything that is mentionable can be more manageable. When we can talk about our feelings, they become less overwhelming, less upsetting, and less scary.” <br />— Fred Rogers<br />
            While the stigma around mental health issues in and of itself is a huge obstacle, the fear of not being understood makes it very difficult for us to open up about our struggles. With the aim of giving the students of our institution an opportunity to overcome these hurdles, the Students’ Welfare Committee, Technology Students’ Gymkhana would like to inform you that IIT Kharagpur has partnered with GOOD LIVES- a well-known mental health service providing platform. In the spirit of the same, a “Mental Wellness Workshop - For IITians, By IITians” has been planned.<br />
          </p>
          <br /><br /><br />
          <center>
            <h1>Mental Wellness Workshop</h1>
            <div className={globalStyles.img2Container}>
              <img
                src={img1}
                alt="Mental welness workshop"
              />
            </div>
          </center>
          <br />
          <p className={globalStyles.description}>"You don't have to control your thoughts. You just have to stop letting them control you."<br /> ~ Dan Millman<br />
            The online semester has affected our emotions, relationships and mental wellbeing in some or another way. However, the situation is coming to normal, and students are being called back to campus. Also, the online semester increased the need for guidance to confirm the mental well-being of the student.<br />
            GoodLives  in association with IIT Kharagpur will be conducting a series of Mental Health awareness workshops. The workshops will be targeting multiple topics of college student's life and their families.</p>

          <br /><br /><br />
        </section>
      </div>
    </Layout>
  );
}
