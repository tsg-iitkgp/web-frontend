import React from "react";
import Layout from "../../../components/Layout";
import Styles from "../styles/socult.module.css";
import globalStyles from "../styles/committees.module.css";
import ContactStyles from "../../../styles/pages/contacts.module.css";
import events from "../../../components/Events/UpcomingEvents";
import ContactCard from "../../../components/ContactCard";

export default function Socult() {
  const techComTeam = [
    {
      RollNo: "19AR10043",
      Name: "Yashraj Bagaria",
      Category: "General Secretary",
      Post: "GSec - Social and Cultural",
      img: "19AR10043.png",
      Contact: 8240719132,
      Email: "YashrajBagaria.iitkgp@gmail.com",
      "Institue ids": "YashrajBagaria.iitkgp@gmail.com",
      "Institute mail ids": "gsectsg-socult@hijli.iitkgp.ac.in",
    },
    {
      RollNo: "19BT30021",
      Name: "Saggurthi Deenaraju",
      Category: "General Secretary",
      Post: "GSec - Social and Cultural",
      img: "19BT30021.png",
      Contact: 9849401491,
      Email: "saggurthi2020@gmail.com",
      "Institue ids": "saggurthi2020@gmail.com",
      "Institute mail ids": "",
    },
    {
      id: 22,
      RollNo: "20CS10018",
      Name: "Burra Nithish",
      Post: "Secretary Entertainment",
      Email: "nithishnani.277@gmail.com",
      Phone: 8985672148,
      Hall: "LBS",
    },
    {
      id: 23,
      RollNo: "20CY20022",
      Name: "Muskan Gupta",
      Post: "Secretary Dramatics",
      Email: "muskanyashi0303@gmail.com",
      Phone: 7233845331,
      Hall: "SNIG",
    },
    {
      id: 24,
      RollNo: "20GG20016",
      Name: "Bobade Kshitija Vishal",
      Post: "Secretary Journal",
      Email: "kshitijaiitkgp2020@gmail.com",
      Phone: 9373132441,
      Hall: "SNIG",
    },
    {
      id: 25,
      RollNo: "20EX20024",
      Name: "Rashi Goyal",
      Post: "Secretary Literary",
      Email: "goyalrashi1710@gmail.com",
      Phone: 8302741699,
      Hall: "SNIG",
    },
    {
      id: 26,
      RollNo: "20MI33001",
      Name: "Aastha Banjare",
      Post: "Secretary Films and Photography",
      Email: "abanjare25032001@gmail.com",
      Phone: 6268809001,
      Hall: "SN/IG",
    },
    {
      id: 27,
      RollNo: "20ME30017",
      Name: "Daivik Agrawal",
      Post: "Secretary Fine Arts and Modelling",
      Email: "daivik.agrawal@gmail.com",
      Phone: 8800179257,
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
            <h1>Social and Cultural Committee</h1>
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
          <h1>
            Illumination 2021
          </h1>
          <div className={Styles.videoContainer}>
            <iframe
              src="https://www.youtube.com/embed/yZTGtIHYQpU?rel=0"
              allow='autoplay; encrypted-media'
              allowFullScreen
              title='Illumination 2021'
              className={Styles.illuVideo}
            />
          </div>
        </section>

        {/* ----Our Team---- */}

        <section>
          <h1>Our Team</h1>
          <div className={ContactStyles.multipleCards}>
            {techComTeam.map((member, index) => {
              return (
                <ContactCard
                  name={member.Name}
                  designation={member.Post}
                  email={member.Email}
                  imgSrc={`/media/images/${member.Category === "General Secretary" ||
                      member.Category === "Nominated Posts"
                      ? "contacts"
                      : "secyImages"
                    }/${member.RollNo}.png`}
                />
              );
            })}
          </div>
        </section>
      </div>
    </Layout>
  );
}
