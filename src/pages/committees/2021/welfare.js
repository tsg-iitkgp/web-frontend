import React from "react";
import Layout from "../../../components/Layout";
import Styles from "../styles/tech.module.css";
import globalStyles from "../styles/committees.module.css";
import ContactStyles from "../../../styles/pages/contacts.module.css";
import ContactCard from "../../../components/ContactCard";
import img1 from "./images/tech/mentalwork.jpg";
import img2 from "./images/tech/anxious.jpg";
import projects from "./images/tech/projects.jpg";
import english from "./images/tech/english-mentor.jpg";
import induction from "./images/tech/ug-induction.jpg";

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
      RollNo: "20MI10004",
      Name: "Amgoth Jithender Kumar Naik",
      Post: "Secretary Academic Help",
      Email: "jithendernaik1729@gmail.com",
      Phone: 9154015089,
      Hall: "LLR",
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
            <h1 className={globalStyles.committeeHeading}>
              Students' Welfare Committee
            </h1>
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

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>English Mentorship Program</h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <br />
              <img
                className={globalStyles.cardImg}
                src={english}
                alt="english mentorship"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              <br />
              <br />
              With language, you are at home anywhere
              <br /> - Edward De Waal
              <br />
              <br />
              English is the prevailing language of all time. Having a good
              command of language boosts one's faith and self-esteem. Here is an
              opportunity for all those who want to surpass the standards of
              English. English Mentorship Programme in collaboration with ACSESS
              (Advanced Communication Skills for Engineering and Science
              Students), a platform Sponsored by Dr Ranbir Sinha, an Alumni of
              IIT KGP for the welfare of the KGP community, with certification
              after completion of the course. So hurry up KGPians Do Register
              before "10th January 2022, 11:59 PM".
              <br />
              Registration Form:-
              <button className={globalStyles.btn}>
                <a href="https://forms.gle/4j92tXSdGT8Lt4Cv6">Click here</a>
              </button>
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Call for Projects</h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <br />
              <img
                className={globalStyles.cardImg}
                src={projects}
                alt="projects"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              There is no greater joy nor greater reward than to make a
              fundamental difference in someone’s life.
              <br /> – Mary Rose McGeady
              <br />
              Upholding the motto and values of selfless service, Student’s
              Welfare Committee presents a noble initiative wherein NSS and
              other interested students will volunteer to work with NGOs on
              their varied projects for social welfare.
              <br />
              Through this we intent to emphasize the spirit of “ Not me But
              you" while providing a platform for the students and NGOs to
              collaborate for social growth, through a tremendously fulfilling
              and rewarding experience. <br />
              We invite all the NGOs with their social projects to partner with
              us in this incredible opportunity to bring about a social change.
              <br />
              Link to submit Project Details:
              <button className={globalStyles.btn}>
                <a href="https://forms.gle/71axBULAaZ9DtiKMA">Click here</a>
              </button>
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <br />
          <h1>Archieves</h1>
        </center>

        <center>
          <h2 className={globalStyles.head2}>Mental Wellness Workshop</h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <img
                className={globalStyles.cardImg}
                src={img2}
                alt="Have you felt anxious"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              <br />
              <br />
              Hello all,
              <br />
              “Anything that’s human is mentionable, and anything that is
              mentionable can be more manageable. When we can talk about our
              feelings, they become less overwhelming, less upsetting, and less
              scary.” <br />— Fred Rogers
              <br />
              While the stigma around mental health issues in and of itself is a
              huge obstacle, the fear of not being understood makes it very
              difficult for us to open up about our struggles. With the aim of
              giving the students of our institution an opportunity to overcome
              these hurdles, the Students’ Welfare Committee, Technology
              Students’ Gymkhana would like to inform you that IIT Kharagpur has
              partnered with GOOD LIVES- a well-known mental health service
              providing platform. In the spirit of the same, a “Mental Wellness
              Workshop - For IITians, By IITians” has been planned.
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>UG Induction Program 2021</h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <img
                className={globalStyles.cardImg}
                src={induction}
                alt="Induction"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              <br />
              <br />
              Induction Program of undergraduate students, 2021 had been
              conducted from 26th november to 30th november. Find the details
              below.
              <br />
              <br />
              26th November:
              <button className={globalStyles.btn}>
                <a href=" https://youtu.be/l-7gLRQlxyQ">Forenoon</a>
              </button>
              &
              <button className={globalStyles.btn}>
                <a href="https://youtu.be/hp6K-bz9WRI">Afternoon</a>
              </button>
              <br />
              <br />
              27th November:
              <button className={globalStyles.btn}>
                <a href=" https://youtu.be/0h8_JwlgTtk">Forenoon</a>
              </button>
              &
              <button className={globalStyles.btn}>
                <a href="https://youtu.be/c328-X9G1l0">Afternoon</a>
              </button>
              <br />
              <br />
              28th November:
              <button className={globalStyles.btn}>
                <a href=" https://youtu.be/H1sw7gEcLv4">Forenoon</a>
              </button>
              &
              <button className={globalStyles.btn}>
                <a href="https://youtu.be/Fj9Zy-luDDM">Afternoon</a>
              </button>
              <br />
              <br />
              29th November:
              <button className={globalStyles.btn}>
                <a href="https://youtu.be/GrAJ1hofC94">Forenoon</a>
              </button>
              &
              <button className={globalStyles.btn}>
                <a href="https://youtu.be/9GCP6_RGMsw">Afternoon</a>
              </button>
              <br />
              <br />
              30th November:
              <button className={globalStyles.btn}>
                <a href=" https://youtu.be/GrAJ1hofC94">Forenoon</a>
              </button>
              &
              <button className={globalStyles.btn}>
                <a href="https://youtu.be/aUIjpWC1qEY">Afternoon</a>
              </button>
              <br />
              <br />
              <button className={globalStyles.btn}>
                <a href="https://gymkhana.iitkgp.ac.in/files/handbook.pdf">
                  Click here to download Induction program handbook
                </a>
              </button>
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Mental Wellness Workshop</h2>
        </center>

        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <img
                className={globalStyles.cardImg}
                src={img1}
                alt="Mental welness workshop"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              <br />
              <br />
              "You don't have to control your thoughts. You just have to stop
              letting them control you."
              <br /> ~ Dan Millman
              <br />
              The online semester has affected our emotions, relationships and
              mental wellbeing in some or another way. However, the situation is
              coming to normal, and students are being called back to campus.
              Also, the online semester increased the need for guidance to
              confirm the mental well-being of the student.
              <br />
              GoodLives in association with IIT Kharagpur will be conducting a
              series of Mental Health awareness workshops. The workshops will be
              targeting multiple topics of college student's life and their
              families.
            </p>
          </div>
        </section>
        <br />
        <br />
        <br />
      </div>
    </Layout>
  );
}
