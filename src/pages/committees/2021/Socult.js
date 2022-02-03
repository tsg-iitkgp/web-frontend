import React from "react";
import Layout from "../../../components/Layout";
import Styles from "../styles/socult.module.css";
import globalStyles from "../styles/committees.module.css";

import img1 from "./images/tech/photogr.jpg";
import elocu from "./images/socult/elocution.png";
import kgplex from "./images/socult/kgplex.jpg";
import logomaking from "./images/socult/logomaking.jpg";
import flute from "./images/socult/workshopflute.jpg";
import jantimeline from "./images/socult/jan-timeline.jpg";
import mime from "./images/socult/mime.jpg";

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
            <h1 className={globalStyles.committeeHeading}>
              Social and Cultural Committee
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

        <section>
          <h1>Illumination 2021</h1>
          <section className={`${Styles.illuVideoSection}`}>
            <iframe
              src="https://www.youtube.com/embed/kstN-Adi7r8?rel=0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Illumination 2021"
              className={Styles.illuVideo}
            />
          </section>
          <h1>January Timeline</h1>
          <section>
            <center>
              <div className={globalStyles.imgContainer}>
                <img src={jantimeline} alt="timeline" />
              </div>
            </center>

            <p className={globalStyles.description}>
              This year began with lots of opportunities, fun and enthusiasm. To
              keep the excitement going we packed up the first month with quite
              a few creative and competitive events. We highly appreciate your
              ebullient participation until now.
              <br />
              <br />
              Needless to say, there are other extremely exhilarating activities
              coming up for you all. So keep up the high spirit.We hope you
              enjoy all the upcoming activities vivaciously. <br />
              Do have a look on the event's timeline below.
              <br />
              So stay tuned to stay thrilled!!!!
              <br />
              <br />
            </p>
          </section>

          <h1>Events (Ongoing)</h1>
          <br />
          <h2 style={{ color: "lightBlue", letterSpacing: "2px" }}>
            Open IIT Hindi and English Elocution
          </h2>
          <section>
            <center>
              <div className={globalStyles.imgContainer}>
                <img src={elocu} alt="Elocution" />
              </div>
            </center>

            <p className={globalStyles.description}>
              Speech is power: Speech is to persuade,to compel, to inspire"
              Technology Student’s Gymkhana welcomes you all to enjoy the
              freedom of speech and let your thoughts splurge, with Open IIT
              Elocution Event. Grab this opportunity to let your confidence
              speak for your eloquence and abilities with an unparalleled
              learning experience. So let your words express a lot.
              <br />
              Rules:
              <br />
              English:
              <a href="https://docs.google.com/document/d/1SfwNeKQknrynpBWCl7CRlrdVNwa9Z180nj0S-T9j3FU/edit?fbclid=IwAR2FrcM5geO-xN5SYpCU1hg1RlW9Ny0R4kplVOfCxZWcng_RzzLKX0DngpQ">
                Click here
              </a>
              <br />
              Hindi:
              <a href="https://docs.google.com/document/d/1YQcPfEg2hbbt6jd6I5reLa5tV_X3Oe1wlYYVQiIcUtU/edit?fbclid=IwAR33-xj7562A9duEKV6gj9wOIt9-jKqRoLSByIpJteWxPKAyXp4N8zlFWcw">
                Click here
              </a>
              <br />
              <br />
              Deadline for registration:28th January 2022 Deadline for
              submissions of performances:5th February 2022
              <br />
              Register below: English:{" "}
              <a href="https://forms.gle/2snVJTyaPMWRCxAH6">
                Click here to register
              </a>
              <br />
              Hindi:
              <a href="https://forms.gle/VL2xixYYxtfYxiEm9">
                Click here to register
              </a>
              <br />
              Make sure you go through the rules. We are eagerly waiting to hear
              you out!!
              <br />
            </p>
          </section>
          <br />
          <h2 style={{ color: "lightBlue", letterSpacing: "2px" }}>
            Logo Making Competition
          </h2>
          <section>
            <center>
              <div className={globalStyles.imgContainer}>
                <img src={logomaking} alt="logo making" />
              </div>
            </center>

            <p className={globalStyles.description}>
              “Logos are visual representations of what one stands for”
              <br />
              Hello Everyone. Technology Students’ Gymkhana is proud to organize
              a Logo-making competition to decide the official logo for the
              Social and Cultural Committee, Technology Students’ Gymkhana.
              Channel your inner artist to create a logo that represents the
              Social and Cultural Committee in the best possible form. We highly
              encourage you to scroll through our Facebook page Cultural, IIT
              Kharagpur to get a better understanding of what we do and how we
              contribute to the culture of the Indian Institute of Technology,
              Kharagpur.
              <br />
              Rules:
              <a href="https://docs.google.com/document/d/12AIW1l83Dv8IgaEfCCfbveXrFDDHShTwQC6S5MTX7mw/edit?fbclid=IwAR3Ftok6rugzm4x0UaY1csoR-3dnIBRWHYUPYJdAlgtfeYC5zyd5ju3KNZI">
                Click here
              </a>
              <br />
              Submission Google form:
              <a href="https://forms.gle/bd6AMwUY3HSp9hEZ8">Click here</a>
              <br />
              <br />
              Last date of submission: 28-01-2022, 11:59 PM
              <br />
              The best logo will become the official logo for the Social and
              Cultural Committee, Technology Students’ Gymkhana. The top 3 logos
              will be displayed on our Facebook page.
              <br />
              Prizes worth Rs 4,500/-
              <br />
              <br />
            </p>
          </section>
          <h1>Events (Past)</h1>
          <h2 style={{ color: "lightBlue", letterSpacing: "2px" }}>
            Mime Competition Result
          </h2>
          <section>
            <center>
              <div className={globalStyles.imgContainer}>
                <img src={mime} alt="mime result" />
              </div>
            </center>

            <p className={globalStyles.description}>
              Technology Students' Gymkhana ,Social and Cultural Committee
              heartily congratulates the top 3 winners of Mime Competition.{" "}
              <br />
              <b>Winners:</b>
              <br /> Harsh Singh (21EE30012)
              <br />
              1st Runner-up: Aishwary Patel(21IM30003)
              <br />
              2nd Runner-up: Janhavi Soni(21IM30009)
              <br />
              We are extremely grateful to everyone who participated and
              delivered terrific performances.
            </p>
          </section>

          <h2 style={{ color: "lightBlue", letterSpacing: "2px" }}>KGPLEX</h2>
          <section>
            <center>
              <div className={globalStyles.imgContainer}>
                <img src={kgplex} alt="kgplex" />
              </div>
            </center>

            <p className={globalStyles.description}>
              Are you missing hanging out with friends during a movie night,
              stuffing yourself with popcorns, and jamming in the fun? Though we
              are all apart don't worry, as the fun is never meant to be ceased.
              <br />
              Technology Students' Gymkhana, Social and Cultural Committee
              invites you to a fun-filled virtual Movie Night. We have planned a
              perfect party for you all as movies are the best means to bond,
              talk, laugh, cry and most importantly create wonderful memories
              together. So what are you waiting for?. Get ready to save the
              date, set your snacks, and enjoy the night like never before!!
              <br />
              <br />
              Dates: January 22nd and 23rd, 2022
              <br />
              Timing 10 p.m onwards.
              <br />
              Join the Microsoft Team Using code: 1i02be0
              <br />
              Movies to be Screened:-
              <br />
              On Saturday:-
              <br />
              Hindi - Atrangi Re
              <br />
              Telugu - Sham Singha Roy
              <br />
              On Sunday:- <br />
              Tamil- Bachelor
              <br />
              Marathi- Duniyadari
              <br />
              English- Now You See Me
              <br />
            </p>
          </section>
          <h2 style={{ color: "lightBlue", letterSpacing: "2px" }}>
            NCA Workshop Flute
          </h2>
          <section>
            <center>
              <div className={globalStyles.imgContainer}>
                <img src={flute} alt="flute workshop" />
              </div>
            </center>

            <p className={globalStyles.description}>
              " The symbol of art can be seen in the magic of flute"
              <br />
              Playing flute is like writing a melodious book of music. We bring
              to you an opportunity to dive into flute repertoire.
              <br />
              Technology Students' Gymkhana brings to you an exciting NCA Flute
              Workshop in coordination and support of Academy of Folk Arts IIT
              Kharagpur, under the guidance of Prof. Pallab Dasgupta and
              Professor Parmananda Roy. The Academy of Classical and Folk Arts
              acknowledges the partial support of distinguished alumnus Mukund
              Padmanabhan through the GKF foundation for this workshop.
              <br />
              <br />
              Schedule-
              <br />
              Day 1 - 22nd Jan 2022 ,6 pm
              <br />
              Day 2- 23 rd Jan 2022,11 am
              <br />
              <br />
              All the participants were provided with a participation
              certificate.
              <br />
            </p>
          </section>
          <h2 style={{ color: "lightBlue", letterSpacing: "2px" }}>
            Theme photography event
          </h2>
          <section>
            <center>
              <div className={globalStyles.img2Container}>
                <img src={img1} alt="Theme Photography Event" />
              </div>
            </center>
            <p className={globalStyles.description}>
              Photography is a way of feeling, of touching, of loving. What you
              have caught on film is captured foreve. It remembers little
              things, long after you have forgotten everything.”
              <br />
              – Aaron Siskind
              <br />
              Pictures encapsulate moments in a click which is documented for
              eternity. Every photographed snapshot entails a story of what goes
              on – in front and behind the lens.
              <br />
              As it is said taking pictures is savoring life, so bring out
              cameras to capture the subtle presence around you.
              <br />
              Explore around the themes:
              <br />
              1. Back to Campus
              <br />
              2. Night Photography
              <br />
              <br />
              <h3 style={{ color: "white" }}>Results:</h3>
              1st - Devansh Srivastava <br />
              2nd - Salahuddin Akhtar <br />
              3rd - Ratnesh Kr Gautam
              <br />
              Heartiest Congratulations on a wonderful creation.
              <br />
            </p>
          </section>
          <br />
          <br />
        </section>
      </div>
    </Layout>
  );
}
