import React from "react";
import Layout from "../../../components/Layout";
import Styles from "../styles/tech.module.css";
import globalStyles from "../styles/committees.module.css";
import ContactStyles from "../../../styles/pages/contacts.module.css";
import events from "../../../components/Events/UpcomingEvents";
import ContactCard from "../../../components/ContactCard";

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
            <h1>Sports and Games Committee</h1>
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
          <h1>Upcoming Events</h1>
        </section>
        <section>
          <h1>Recent Events</h1>
        </section>
      </div>
    </Layout>
  );
}
