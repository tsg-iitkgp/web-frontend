import React from "react";
import Layout from "../../../components/Layout";
import Styles from "../styles/socult.module.css";
import globalStyles from "../styles/committees.module.css";
import ContactStyles from "../../../styles/pages/contacts.module.css";
import events from "../../../components/Events/UpcomingEvents";
import ContactCard from "../../../components/ContactCard";
import img1 from "./images/tech/cycling.jpg";
import img2 from "./images/tech/chess.jpg";
import sportsquiz from "./images/tech/sportsquiz.jpg";
import quizwin from "./images/tech/quizwinners.png";

export default function Sports() {
  const techComTeam = [
    {
      RollNo: "19MT10007",
      Name: "Akshay Kumar Singh",
      Category: "General Secretary",
      Post: "GSec - Sports & Games",
      img: "19MT10007.png",
      Contact: 7585008111,
      Email: "akshaysingh7134@gmail.com",
      "Institue ids": "akshaysingh7134@gmail.com",
      "Institute mail ids": "gsectsg-sports@hijli.iitkgp.ac.in",
    },
    {
      RollNo: "19AE10029",
      Name: "Sri Harsha Reddy",
      Category: "General Secretary",
      Post: "GSec - Sports & Games",
      img: "19AE10029.png",
      Contact: 9908907907,
      Email: "sriharsha061@gmail.com",
      "Institue ids": "sriharsha061@gmail.com",
      "Institute mail ids": "",
    },
    {
      RollNo: "19MA20023",
      Name: "Kritika Bagaria",
      Category: "Nominated Posts",
      Post: "Institute Girl Sports' Nominee",
      img: "19MA20023.png",
      Contact: 9352138291,
      Email: "kritika16.iitkgp@gmail.com",
      "Institue ids": "kritika16.iitkgp@iitkgp.ac.in",
      "Institute mail ids": "",
    },
    {
      id: 10,
      RollNo: "20AE30016",
      Name: "Priyansh Shrivastava",
      Post: "Secretarty Aquatics",
      Email: "priyanshshri11@gmail.com",
      Phone: 8225805192,
      Hall: " LBS",
    },
    {
      id: 11,
      RollNo: "20MT10064",
      Name: "A Hasitha",
      Post: "Secretary Athletics Subcommittee",
      Email: "allurihasitha@gmail.com",
      Phone: 9392703946,
      Hall: "SNIG",
    },
    {
      id: 12,
      RollNo: "20AG30037",
      Name: "Vansh Agrawal",
      Post: "Secretary Badminton Subcommittee",
      Email: "vanshagarwal0902@gmail.com",
      Phone: 6281714795,
      Hall: "LBS",
    },
    {
      id: 13,
      RollNo: "20AG30030",
      Name: "Ronak Khichar",
      Post: "Secretary Basketball",
      Email: "920ronakkhichar@gmail.com",
      Phone: 8955691602,
      Hall: " LBS",
    },
    {
      id: 14,
      RollNo: "20CH10083",
      Name: "Sumit Chaudhari",
      Post: "Secretary Cricket Subcommittee",
      Email: "sumitchaudhari942@gmail.com",
      Phone: 9325832653,
      Hall: "LBS",
    },
    {
      id: 15,
      RollNo: "20MI31001",
      Name: "Abhinil Kumar",
      Post: "Secretary Football",
      Email: "abhinilkumar@gmail.com",
      Phone: 8210169485,
      Hall: "LBS",
    },
    {
      id: 16,
      RollNo: "20ME10101",
      Name: "Shubham Jaiswal",
      Post: "Secretary Gymnasium and Weightlifting",
      Email: "sp1474861@gmail.com",
      Phone: 9302934647,
      Hall: "LBS",
    },
    {
      id: 17,
      RollNo: "20CE30038",
      Name: "Arunendra Pratap Singh",
      Post: "Secretary Hockey Subcommittee",
      Email: "arunendraiitkanpur01@gmail.com",
      Phone: 9935481287,
      Hall: "LBS",
    },
    {
      id: 18,
      RollNo: "20IM10040",
      Name: "Tanmay Malatkar",
      Post: "Secretary Indoor Game",
      Email: "tmalatkar14@gmail.com",
      Phone: 8308381159,
      Hall: "LBS",
    },
    {
      id: 19,
      RollNo: "20MI33015",
      Name: "Jadhav Yash",
      Post: "Secretary Squash Subcommittee",
      Email: "7yashjadhav@gmail.com",
      Phone: 9421418202,
      Hall: "LBS",
    },
    {
      id: 20,
      RollNo: "20AG10025",
      Name: "Moon Minal Ajay",
      Post: "Secretary Tennis",
      Email: "minalmoon78@gmail.com",
      Phone: 8806956978,
      Hall: "SN/IG",
    },
    {
      id: 21,
      RollNo: "20EC10020",
      Name: "Bellam Tejesh",
      Post: "Secretary Volleyball",
      Email: "tejeshbellam@gmail.com",
      Phone: 6305213352,
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
            <h1 className={globalStyles.committeeHeading}>Sports and Games Committee</h1>

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
          <h2 className={globalStyles.head2} >Sports' Quiz</h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <br />
              <img className={globalStyles.cardImg}
                src={sportsquiz}
                alt="sports quiz"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              Sports is filled with facts, fantasies, and fun. If you have a knack for all sports information around the world and related to IIT Kgp, then get ready to put your knowledge to action.
              IIT KGP Sports challenge all the sports brainiacs to  “come, quiz, and conquer “ some brainstorming questions. If you love sports and have an affinity for quizzing, do give this a try. Not to mention, you will be rewarded with exciting prizes worth fighting for.
              So, gear up with a team of 3 brainiacs and battle out for the best!!<br />
              Dates: <br />
              Round 1 - 20th January, Thursday <br />
              Round 2 - 22nd January, Saturday <br />
              Round 3 - 23rd January, Sunday <br /><br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <br />
          <h1>
            Archieves
          </h1>
          <h2 className={globalStyles.head2} >Chess Club Freshers’ Tournament</h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <br />
              <img className={globalStyles.cardImg}
                src={img2}
                alt="Chess club event"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              After an amazing response to the Introductory Seminar, it is now time to move on to some chess action in the form of the Freshers’ Tournament, 2021. Don't miss out on this opportunity since selections into the club will be partly done based on your performance in the tournament.<br /> The tournament is also open to 2nd-year students who wish to join the club. The top performers will also be awarded goodies and certificates, so give your ultimate best!<br />
              To participate in the tournament, follow the detailed steps given in the rulebook below. All rules and regulations related to the tournament are available in the same document.
              Freshers' Tournament 2021<br />
              Participation Criteria: All Freshmen/Sophomores (Both UG and PG)<br />
              Date: Sunday, 19th Dec 2021, 2 PM.<br />

            </p>
          </div>
        </section>


        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2} >The Pan IIT Cycling event</h2>
        </center>


        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <br />
              <img className={globalStyles.cardImg}
                src={img1}
                alt="Cycling event"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              After an enthralling week filled with fortitude, grit and determination, the Pan IIT Cycling Main Event concluded as a spectacle of hard work and commitment.<br />
              All the IITs vied for delivering intense competition.The contest was ecstatically embraced by IIT KGP. We fiercely competed for a celebratory closure at the event. We value the exuberant participation from Kgpians.<br />
              Cheers to the top performers who put on stellar performances and made us proud. <br />
              Girls:<br />
              Dhanya Gelli  - Rank 2<br />
              Sucheta Pradhan – Rank 20<br />
              Parthvi Gupta – Rank 42<br />
              Soumya Sharma – Rank 44<br />
              Meghna Nallamili- Rank 50<br />
              Boys:<br />
              Nikhil Mishra – Rank 15<br />
              Rajvardhan Singh Jadon – Rank 53<br />
              Utkarsh Gupta- Rank 58<br />
              Heartiest congratulations to all the participants.

            </p>
          </div>
        </section>
        <br />
        <br />



      </div>
    </Layout>
  );
}
