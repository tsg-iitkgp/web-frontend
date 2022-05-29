import React from "react";
import Layout from "../../../components/Layout";
import Styles from "../styles/socult.module.css";
import globalStyles from "../styles/committees.module.css";
// import ContactStyles from "../../../styles/pages/contacts.module.css";
// import events from "../../../components/Events/eventsData";
// import ContactCard from "../../../components/ContactCard";
import img1 from "./images/tech/photogr.jpg";
import elocu from "./images/socult/elocution.png";
import kgplex from "./images/socult/kgplex.jpg";
import logomaking from "./images/socult/logomaking.jpg";
import flute from "./images/socult/workshopflute.jpg";
import jantimeline from "./images/socult/jan-timeline.jpg";
import mime from "./images/socult/mime.jpg";
import resultmusic from "./images/socult/result-music.jpg";
import comedynight from "./images/socult/comedynight.png";
import sc1 from './images/socult/sc1.png';
import sc2 from './images/socult/sc2.png';
import sc3 from './images/socult/sc3.png';
import sc4 from './images/socult/sc4.png';
import sc5 from './images/socult/sc5.png';
import sc6 from './images/socult/sc6.png';
import sc7 from './images/socult/sc7.png';
import sc8 from './images/socult/sc8.png';
import sc9 from './images/socult/sc9.png';
import sc10 from './images/socult/sc10.png';
import sc11 from './images/socult/sc11.png';
import sc12 from './images/socult/sc12.png';
import sc13 from './images/socult/sc13.png';
import sc14 from './images/socult/sc14.png';
import sc15 from './images/socult/sc15.png';

export default function Socult() {
  // const techComTeam = [
  //   {
  //     RollNo: "19AR10043",
  //     Name: "Yashraj Bagaria",
  //     Category: "General Secretary",
  //     Post: "GSec - Social and Cultural",
  //     img: "19AR10043.png",
  //     Contact: 8240719132,
  //     Email: "YashrajBagaria.iitkgp@gmail.com",
  //     "Institue ids": "YashrajBagaria.iitkgp@gmail.com",
  //     "Institute mail ids": "gsectsg-socult@hijli.iitkgp.ac.in",
  //   },
  //   {
  //     RollNo: "19BT30021",
  //     Name: "Saggurthi Deenaraju",
  //     Category: "General Secretary",
  //     Post: "GSec - Social and Cultural",
  //     img: "19BT30021.png",
  //     Contact: 9849401491,
  //     Email: "saggurthi2020@gmail.com",
  //     "Institue ids": "saggurthi2020@gmail.com",
  //     "Institute mail ids": "",
  //   },
  //   {
  //     id: 22,
  //     RollNo: "20CS10018",
  //     Name: "Burra Nithish",
  //     Post: "Secretary Entertainment",
  //     Email: "nithishnani.277@gmail.com",
  //     Phone: 8985672148,
  //     Hall: "LBS",
  //   },
  //   {
  //     id: 23,
  //     RollNo: "20CY20022",
  //     Name: "Muskan Gupta",
  //     Post: "Secretary Dramatics",
  //     Email: "muskanyashi0303@gmail.com",
  //     Phone: 7233845331,
  //     Hall: "SNIG",
  //   },
  //   {
  //     id: 24,
  //     RollNo: "20GG20016",
  //     Name: "Bobade Kshitija Vishal",
  //     Post: "Secretary Journal",
  //     Email: "kshitijaiitkgp2020@gmail.com",
  //     Phone: 9373132441,
  //     Hall: "SNIG",
  //   },
  //   {
  //     id: 25,
  //     RollNo: "20EX20024",
  //     Name: "Rashi Goyal",
  //     Post: "Secretary Literary",
  //     Email: "goyalrashi1710@gmail.com",
  //     Phone: 8302741699,
  //     Hall: "SNIG",
  //   },
  //   {
  //     id: 26,
  //     RollNo: "20MI33001",
  //     Name: "Aastha Banjare",
  //     Post: "Secretary Films and Photography",
  //     Email: "abanjare25032001@gmail.com",
  //     Phone: 6268809001,
  //     Hall: "SN/IG",
  //   },
  //   {
  //     id: 27,
  //     RollNo: "20ME30017",
  //     Name: "Daivik Agrawal",
  //     Post: "Secretary Fine Arts and Modelling",
  //     Email: "daivik.agrawal@gmail.com",
  //     Phone: 8800179257,
  //     Hall: "LBS",
  //   },
  // ];
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

          {/* other events */}


          <center>

            <h1>Inter Hall Gymkhana Championship</h1>
          </center>

          <section>
            <center>
              <div className={globalStyles.imgContainer}>
                <img src={sc1} alt="timeline" />
              </div>
            </center>

            <p className={globalStyles.centerCard}>
              Hello everyone,<br />
              After almost two years we saw everybody engaging again in the spirits of Social and Cultural with the ever high Hall Tempo. This time all the halls vied for victory in Gymkhana Championships and we witnessed an amazing display of dedication and enthusiasm.<br />
              We release the final standings of all Social and Cultural events . Huge congratulations to all the winners!!<br />
              <br />
            </p>
          </section>


          <center>
            <hr className={globalStyles.hrLine} />
            <h2 className={globalStyles.head2}>Gymkhana Championship General Quiz</h2>
          </center>
          <section className={globalStyles.cmtCard1}>
            <div className={globalStyles.leftCard}>
              <img
                className={globalStyles.cardImg}
                src={sc2}

                alt="Music result"
              />
            </div>
            <div className={globalStyles.rightCard}>
              <p>
                Are you facts geek to consume all the latest updates around the world starting from economic and technology to movies and music?<br />
                Then brace up ,as this is your chance to exhibit the profound general knowledge you have accumulated and lead your Halls to a glorious feat at Gymkhana General Quiz Championship.<br /><br />
                Date: 3rd April, 2022<br />
                Venue:V-3<br />
                Time:10 A.M<br />
              </p>
            </div>
          </section>



          <center>
            <hr className={globalStyles.hrLine} />
            <h2 className={globalStyles.head2}>What's the Good Word</h2>
          </center>
          <section className={globalStyles.cmtCard1}>
            <div className={globalStyles.leftCard}>
              <img
                className={globalStyles.cardImg}
                src={sc3}

                alt="Music result"
              />
            </div>
            <div className={globalStyles.rightCard}>
              <p>
                Hello everyone,<br />
                " Hot,Red,Rash,Extinguish, Water...." . Can you guess a relatable word these words?<br />
                Brainstorm junta,you can do it? For those who could not crack it - it is fire. This is amusing ,right?<br />
                We are here to escalate the thrill by testing how well- versed you are with words with this entertaining event of guessing- *What is the good word* .<br />
                Think creatively,think fast,think deeply too but be cautious to not spill out the key word directly.<br /><br />

                Date- 30th March, 2022<br />
                Event-Venue: F-244<br />
                Time:6PM<br />
                It is time to win with your words and not action!!
              </p>
            </div>
          </section>


          <center>
            <hr className={globalStyles.hrLine} />
            <h2 className={globalStyles.head2}>Gymkhana Championship Sketching</h2>
          </center>

          <section>
            <center>
              <div className={globalStyles.imgContainer}>
                <img src={sc4} alt="timeline" />
              </div>
            </center>

            <p className={globalStyles.centerCard}>
              Sketch your heart out. Display  your inner artist through Gymkhana Championship Sketching.<br />
              Date: 29/03/2022<br />
              Time: 6:30pm - 9:30pm<br />
              Venue: Room S-301 Main building<br />
              Think creative and innovate!!<br />
              <br />
            </p>
          </section>


          <center>
            <hr className={globalStyles.hrLine} />
            <h2 className={globalStyles.head2}>Gymkhana Championship Groups</h2>
          </center>
          <section className={globalStyles.cmtCard1}>
            <div className={globalStyles.leftCard}>
              <img
                className={globalStyles.cardImg}
                src={sc5}

                alt="Music result"
              />
            </div>
            <div className={globalStyles.rightCard}>
              <p>
                We are excited to announce the Gymkhana Championship Groups competition. All the musical minds,get ready to radiate through your rhythm and harmony.<br /><br />
                Date-28/03/2022<br />
                Venue-Tagore Open Air Theatre<br />
                Time-6:30PM<br />
                Please go through the link for rules pertaining to the event<br />
              </p>
            </div>
          </section>


          <center>
            <hr className={globalStyles.hrLine} />
            <h2 className={globalStyles.head2}>Gymkhana Championship Cartooning</h2>
          </center>
          <section className={globalStyles.cmtCard1}>
            <div className={globalStyles.leftCard}>
              <img
                className={globalStyles.cardImg}
                src={sc6}

                alt="Music result"
              />
            </div>
            <div className={globalStyles.rightCard}>
              <p>
                Art is not what you see but what you make others see. Bring out your inner artist through Gymkhana Championship Cartooning.<br /><br />
                Date: 23/03/2022<br />
                Time: 6pm - 9pm<br />
                Venue: Room S-301 Main building<br />
              </p>
            </div>
          </section>


          <center>
            <hr className={globalStyles.hrLine} />.
          </center>
          <h1>Gymkhana Championship Choreography</h1>
          <section>
            <center>
              <div className={globalStyles.imgContainer}>
                <img src={sc7} alt="timeline" />
              </div>
            </center>

            <p className={globalStyles.centerCard}>
              Dance is like dreaming with your movements, it is like the poetry of foot and it paves the way for an incredible form of expression. <br />
              Get ready people as you have the opportunity  to open your heart and pour out creativity with Gymkhana Championship Choreography.Be powerful, be larger than life, be passionate and most of all enjoy each step along the way.<br /><br />
              Date: 20th and 21st March 2022<br />
              Venue: Netaji Auditorium<br />
              Time: 8:00 PM<br />
              <br />
            </p>
          </section>


          <center>
            <hr className={globalStyles.hrLine} />
            <h2 className={globalStyles.head2}>Gymkhana Championship Eastern Instrumentals</h2>
          </center>
          <section className={globalStyles.cmtCard1}>
            <div className={globalStyles.leftCard}>
              <img
                className={globalStyles.cardImg}
                src={sc8}

                alt="Music result"
              />
            </div>
            <div className={globalStyles.rightCard}>
              <p>
                We are excited to announce the Inter Hall Eastern Instrumental competition. All the musical minds, get ready to radiate through your rhythm and harmony.<br /><br />
                Date-16/03/2022<br />
                Venue-Raman Auditorium<br />
                Time-7:00PM<br />
                Judges: Pratik Sarkar , Devyani Pareek Sarkar<br />
              </p>
            </div>
          </section>



          <center>
            <hr className={globalStyles.hrLine} />
            <h2 className={globalStyles.head2}>Gymkhana Championship Debate</h2>
          </center>
          <section className={globalStyles.cmtCard1}>
            <div className={globalStyles.leftCard}>
              <img
                className={globalStyles.cardImg}
                src={sc9}

                alt="Music result"
              />
            </div>
            <div className={globalStyles.rightCard}>
              <p>

                " For good ideas and true innovation, you need human interaction, conflict, argument, debate."<br /><br />
                Are you a great speaker and spontaneous thinker? Can you make your opinions turn the table? Then, come on people, as it is the time to showcase your debating skills and take them aside for your halls. Cultural, IIT Kharagpur invites you all to speak your mind with Gymkhana Championship Debate. Only with words as your weapons, facts as your shield, and logic as your force can you win this battle.<br />
                𝗗𝗮𝘁𝗲-𝟵𝘁𝗵 𝗠𝗮𝗿𝗰𝗵 𝟮𝟬𝟮𝟮<br />
                𝗩𝗲𝗻𝘂𝗲- 𝗠𝗮𝗶𝗻 𝗕𝘂𝗶𝗹𝗱𝗶𝗻𝗴, 𝗙𝟮𝟰𝟰<br />
                𝗧𝗶𝗺𝗲: 𝟳𝗽𝗺<br />
                𝗧𝗼𝗽𝗶𝗰: 𝗔𝗿𝘁𝗶𝗳𝗶𝗰𝗶𝗮𝗹 𝗜𝗻𝘁𝗲𝗹𝗹𝗶𝗴𝗲𝗻𝗰𝗲 𝗶𝘀 𝗮 𝗳𝗶𝗻𝗲 𝗱𝗿𝗲𝗮𝗺 𝘁𝗵𝗮𝘁 𝗺𝗮𝘆 𝘁𝘂𝗿𝗻 𝗶𝗻𝘁𝗼 𝗱𝗮𝗻𝗴𝗲𝗿𝗼𝘂𝘀 𝗿𝗲𝗮𝗹𝗶𝘁𝗶𝗲𝘀.
              </p>
            </div>
          </section>


          <center>
            <hr className={globalStyles.hrLine} />
            <h2 className={globalStyles.head2}>Thermocol and Clay Modelling</h2>
          </center>
          <section className={globalStyles.cmtCard1}>
            <div className={globalStyles.leftCard}>
              <img
                className={globalStyles.cardImg}
                src={sc10}

                alt="Music result"
              />
            </div>
            <div className={globalStyles.rightCard}>
              <p>

                If you are an artist -driven by passion,delighted by creation,enthralled with expression,fueled by compulsion and blindsided by inspiration-
                then get ready to bring fruition of your creativity and inner artist with Inter Hall Thermocol and Clay Modelling. It's time  bestow your imagination a shape,a structure,a story ,a spectacle like no other  and paint success for your halls.
                Date-06/03/2022<br />
                Time: 12:00PM - 6:00PM<br />
                Venue: S-301 Main building<br /><br />
                Think creatively and innovatively to .This is because motivation creates excitement and enthusiasm to make good models!!<br />

              </p>
            </div>
          </section>




          <center>
            <hr className={globalStyles.hrLine} />
            <h2 className={globalStyles.head2}>Short Film Making</h2>
          </center>
          <section className={globalStyles.cmtCard1}>
            <div className={globalStyles.leftCard}>
              <img
                className={globalStyles.cardImg}
                src={sc11}

                alt="Music result"
              />
            </div>
            <div className={globalStyles.rightCard}>
              <p>

                “ Film is a great tool to portray emotions, thoughts, stories, tragedies, happiness, sadness....it is a chance to live many lifetimes”<br /><br />
                We bring to you an adrenaline-filled competition to tell  tales in your creative style.  Giving a medium to all the geniuses who believe in showing the world unseen with Inter Hall Short film making Gymkhana Championship.<br />
                Theme release: 02nd March<br />
                Submission Deadline: 02nd April<br />
              </p>
            </div>
          </section>



          <center>
            <hr className={globalStyles.hrLine} />.
          </center>
          <h1>February Timeline</h1>
          <section>
            <center>
              <div className={globalStyles.imgContainer}>
                <img src={sc12} alt="timeline" />
              </div>
            </center>

            <p className={globalStyles.description}>
              This year began with lots of opportunities, fun and enthusiasm. To keep the excitement going we packed up the first month with quite a few creative and competitive events. We highly appreciate your ebullient participation until now.<br /><br />
              Needless to say, there are other extremely exhilarating activities coming up for you all. So keep up the high spirit.We hope you enjoy all the upcoming activities vivaciously.
              Do have a look on the event's timeline below.<br /><br />
              So stay tuned to stay thrilled!!!!<br />
              <br />
            </p>
          </section>


          <center>
            <hr className={globalStyles.hrLine} />
            <h2 className={globalStyles.head2}>Open IIT Painting</h2>
          </center>
          <section className={globalStyles.cmtCard1}>
            <div className={globalStyles.leftCard}>
              <img
                className={globalStyles.cardImg}
                src={sc13}

                alt="Music result"
              />
            </div>
            <div className={globalStyles.rightCard}>
              <p>

                There is something beautiful about a blank canvas, the nothingness of the beginning that is so simple and breathtakingly pure. It’s the paint that changes its meaning and the hand that creates the story.<br />
                Painting is a line around the thought.  It is your expression, your imagination, your perception ,your creation that channels the inner emotions through beautiful colors on a blank canvas. <br /><br />
                Technology Students' Gymkhana brings you an opportunity to unleash your inner artist and paint to reveal your love for art through OPEN IIT PAINTING.<br />
                So, all the artists out there get registered by: 24/02/2022 <br />
                Date of the event: 26/02/2022 <br />
                Get ready to paint the magic!!!
              </p>
            </div>
          </section>


          <center>
            <hr className={globalStyles.hrLine} />
            <h2 className={globalStyles.head2}>Solo Dance</h2>
          </center>
          <section className={globalStyles.cmtCard1}>
            <div className={globalStyles.leftCard}>
              <img
                className={globalStyles.cardImg}
                src={sc14}

                alt="Music result"
              />
            </div>
            <div className={globalStyles.rightCard}>
              <p>

                “Dance is the Joy of Moment and the Heart of Life”<br /><br />
                Technology Students’ Gymkhana, IIT Kharagpur summon all the dance enthusiasts to draw in a breath, kick off your shoes, and dance. Reveal your passion for dance and surrender to the music as you channel your grace, swag, or style.<br /><br />
                Tune in and Twirl !!
              </p>
            </div>
          </section>


          <center>
            <hr className={globalStyles.hrLine} />
            <h2 className={globalStyles.head2}>Matribhasa Diwas</h2>
          </center>
          <section className={globalStyles.cmtCard1}>
            <div className={globalStyles.leftCard}>
              <img
                className={globalStyles.cardImg}
                src={sc15}
                alt="Music result"
              />
            </div>
            <div className={globalStyles.rightCard}>
              <p>

                <br />
                Language is the dress of thought. Language is culture, the tradition of living societies. The kaleidoscope of languages is unseen threads that link the massive- colorful fabric of the past to the beautiful couture of the present. <br /><br />
                Matri Bhasha Diwas, observed on 21st February, promotes the dissemination of the mother tongue to inspire solidarity based on understanding, tolerance, and dialogue. On the occasion of this momentous celebration of our lineage and pride, Social and Cultural, Technology Students’ Gymkhana invites you all to reflect on our cultural and linguistic identity to celebrate the essence and magic of unity in diversity.
                We are organizing a host of activities to depict diverse forms of literature and arts which include: <br /><br />
                • Elocution <br />
                • Debating <br />
                • Essay Writing <br />
                • Painting <br />
                • Music <br />
                • Dramatics <br />
              </p>
            </div>
          </section>




          <center>
            <hr className={globalStyles.hrLine} />.
          </center>
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

          <center>
            <hr className={globalStyles.hrLine} />
            <h2 className={globalStyles.head2}>Digital Music Making Result</h2>
          </center>
          <section className={globalStyles.cmtCard1}>
            <div className={globalStyles.leftCard}>
              <img
                className={globalStyles.cardImg}
                src={resultmusic}
                alt="Music result"
              />
            </div>
            <div className={globalStyles.rightCard}>
              <p>
                <br />
                <br />
                <br />
                Technology Students' Gymkhana ,Social and Cultural Committee
                heartily congratulates the top 3 winners of the Digital Music
                Making Competition. <br />
                <br />
                Winner: Abhinav Viju Pilai (21ME10004)
                <br />
                1st Runner-up: Matta Varun(19CS30028)
                <br />
                2nd Runner-up: Ayush Sharma(19BT10009)
                <br />
                <br />
                We are extremely grateful to everyone who participated and
                delivered terrific performances.
                <br />
                <br />
              </p>
            </div>
          </section>

          <center>
            <hr className={globalStyles.hrLine} />
            <h2 className={globalStyles.head2}>
              Open IIT Hindi and English Elocution
            </h2>
          </center>
          <section className={globalStyles.cmtCard1}>
            <div className={globalStyles.leftCard}>
              <img
                className={globalStyles.cardImg3}
                src={elocu}
                alt="Elocution"
              />
            </div>
            <div className={globalStyles.rightCard}>
              <p>
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
                <a className={globalStyles.btn} href="https://docs.google.com/document/d/1SfwNeKQknrynpBWCl7CRlrdVNwa9Z180nj0S-T9j3FU/edit?fbclid=IwAR2FrcM5geO-xN5SYpCU1hg1RlW9Ny0R4kplVOfCxZWcng_RzzLKX0DngpQ">
                  Click here
                </a>
                <br />
                Hindi:
                <a className={globalStyles.btn} href="https://docs.google.com/document/d/1YQcPfEg2hbbt6jd6I5reLa5tV_X3Oe1wlYYVQiIcUtU/edit?fbclid=IwAR33-xj7562A9duEKV6gj9wOIt9-jKqRoLSByIpJteWxPKAyXp4N8zlFWcw">
                  Click here
                </a>
                <br />
                Deadline for registration:28th January 2022 Deadline for
                submissions of performances:5th February 2022
                <br />
                Register below: English:
                {" "}
                <a className={globalStyles.btn} href="https://forms.gle/2snVJTyaPMWRCxAH6">
                  Click here to register
                </a>
                <br />
                Hindi:
                <a className={globalStyles.btn} href="https://forms.gle/VL2xixYYxtfYxiEm9">
                  Click here to register
                </a>
                <br />
                Make sure you go through the rules.
                <br />
              </p>
            </div>
          </section>

          <center>
            <hr className={globalStyles.hrLine} />
            <h2 className={globalStyles.head2}>Logo Making Competition</h2>
          </center>
          <section className={globalStyles.cmtCard1}>
            <div className={globalStyles.leftCard}>
              <center>
                <br />
                <br />
                <br />
                <img
                  className={globalStyles.cardImg}
                  src={logomaking}
                  alt="logo making"
                />
              </center>
            </div>

            <div className={globalStyles.rightCard}>
              <p>
                “Logos are visual representations of what one stands for”
                <br />
                Hello Everyone. Technology Students’ Gymkhana is proud to
                organize a Logo-making competition to decide the official logo
                for the Social and Cultural Committee, Technology Students’
                Gymkhana. Channel your inner artist to create a logo that
                represents the Social and Cultural Committee in the best
                possible form. We highly encourage you to scroll through our
                Facebook page Cultural, IIT Kharagpur to get a better
                understanding of what we do and how we contribute to the culture
                of the Indian Institute of Technology, Kharagpur.
                <br />
                Rules:
                <a className={globalStyles.btn} href="https://docs.google.com/document/d/12AIW1l83Dv8IgaEfCCfbveXrFDDHShTwQC6S5MTX7mw/edit?fbclid=IwAR3Ftok6rugzm4x0UaY1csoR-3dnIBRWHYUPYJdAlgtfeYC5zyd5ju3KNZI">
                  Click here
                </a>
                <br />
                Submission Google form:
                <a className={globalStyles.btn} href="https://forms.gle/bd6AMwUY3HSp9hEZ8">Click here</a>
                <br />
                <br />
                Last date of submission: 28-01-2022, 11:59 PM
                <br />
                The best logo will become the official logo for the Social and
                Cultural Committee, Technology Students’ Gymkhana. The top 3
                logos will be displayed on our Facebook page.
                <br />
                Prizes worth Rs 4,500/-
                <br />
              </p>
            </div>
          </section>

          <center>
            <hr className={globalStyles.hrLine} />
            <br />
            <br />
            <h1>Archieves</h1>
          </center>

          <center>
            <h2 className={globalStyles.head2}>Comedy Night</h2>
          </center>
          <section className={globalStyles.cmtCard1}>
            <div className={globalStyles.leftCard}>
              <img
                className={globalStyles.cardImg}
                src={comedynight}
                alt="comedy night"
              />
            </div>
            <div className={globalStyles.rightCard}>
              <p>
                <br />
                <br />
                <br />
                Hello Everyone!
                <br />
                Technology Students' Gymkhana, Social and Cultural Committee
                Presents “Comedy Night” Laughter is the best medicine to cure
                all the stress and mundanity of our daily lives.
                <br /> On this note, we are thrilled to announce a stand-up
                comedy session presented by the Comedy Club, IIT Kharagpur, as a
                part of the initiative ‘Samyog - Connect IIT Kharagpur’. You are
                invited to join us for a fun-filled evening replete with
                laughter and amusement.
                <br />
                Date and Time: 6 PM on 30th January (Sunday).
                <br />
              </p>
            </div>
          </section>

          <center>
            <hr className={globalStyles.hrLine} />
            <h2 className={globalStyles.head2}>Mime Competition Result</h2>
          </center>
          <section className={globalStyles.cmtCard1}>
            <div className={globalStyles.leftCard}>
              <center>
                <img
                  className={globalStyles.cardImg}
                  src={mime}
                  alt="mime result"
                />
              </center>
            </div>

            <div className={globalStyles.rightCard}>
              <p>
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
            </div>
          </section>

          <center>
            <hr className={globalStyles.hrLine} />
            <h2 className={globalStyles.head2}>KGPLEX</h2>
          </center>
          <section className={globalStyles.cmtCard1}>
            <div className={globalStyles.leftCard}>
              <center>
                <img
                  className={globalStyles.cardImg}
                  src={kgplex}
                  alt="kgplex"
                />
              </center>
            </div>

            <div className={globalStyles.rightCard}>
              <p>
                Are you missing hanging out with friends during a movie night,
                stuffing yourself with popcorns, and jamming in the fun? Though
                we are all apart don't worry, as the fun is never meant to be
                ceased. Technology Students' Gymkhana, Social and Cultural
                Committee invites you to a fun-filled virtual Movie Night. We
                have planned a perfect party for you all as movies are the best
                means to bond, talk, laugh, cry and most importantly create
                wonderful memories together. So what are you waiting for?. Get
                ready to save the date, set your snacks, and enjoy the night
                like never before!!
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
            </div>
          </section>

          <center>
            <hr className={globalStyles.hrLine} />
            <h2 className={globalStyles.head2}>NCA Workshop Flute</h2>
          </center>
          <section className={globalStyles.cmtCard1}>
            <div className={globalStyles.leftCard}>
              <center>
                <img
                  className={globalStyles.cardImg}
                  src={flute}
                  alt="flute workshop"
                />
              </center>
            </div>

            <div className={globalStyles.rightCard}>
              <p>
                Playing flute is like writing a melodious book of music. We
                bring to you an opportunity to dive into flute repertoire.
                <br />
                Technology Students' Gymkhana brings to you an exciting NCA
                Flute Workshop in coordination and support of Academy of Folk
                Arts IIT Kharagpur, under the guidance of Prof. Pallab Dasgupta
                and Professor Parmananda Roy. The Academy of Classical and Folk
                Arts acknowledges the partial support of distinguished alumnus
                Mukund Padmanabhan through the GKF foundation for this workshop.
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
            </div>
          </section>

          <center>
            <hr className={globalStyles.hrLine} />
            <h2 className={globalStyles.head2}>Theme photography event</h2>
          </center>
          <section className={globalStyles.cmtCard1}>
            <div className={globalStyles.leftCard}>
              <center>
                <img
                  className={globalStyles.cardImg}
                  src={img1}
                  alt="Theme Photography Event"
                />
              </center>
            </div>

            <div className={globalStyles.rightCard}>
              <p>
                Photography is a way of feeling, of touching, of loving. What
                you have caught on film is captured foreve. It remembers little
                things, long after you have forgotten everything.”
                <br />
                – Aaron Siskind
                <br />
                Pictures encapsulate moments in a click which is documented for
                eternity. Every photographed snapshot entails a story of what
                goes on – in front and behind the lens.
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
            </div>
          </section>

          <br />
          <br />
        </section>
      </div>
    </Layout>
  );
}
