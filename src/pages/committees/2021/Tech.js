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
import tradex from "./images/tech/tradex.jpg";
import techvistara from "./images/tech/techvistar.png";
import techmeet from "./images/tech/techmeet.png";
import openiit from "./images/tech/openiitintro.jpg";
import result_t from "./images/tech/res-tradex.jpg";
import sociop from "./images/tech/sociopren.jpg";

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
              title="Tech Movie"
              className={Styles.techMovieVideo}
            />
          </div>
        </section>
        {/* <h1>
          Events (Ongoing)
        </h1> */}
        <br />

        <center>
          <h2 className={globalStyles.head2} >Sociopreneurship</h2>
        </center>

        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <img className={globalStyles.cardImg}
                src={sociop}
                alt="Sociopreneurship"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              Hello everyone!<br />
              You all have been waiting in the wings to bring forth an extraordinary idea that can change the world with your powerful innovation. Technology Students' Gymkhana provides you with a brilliant opportunity with Sociopreneurship Challenge.
              We haul you to present the greatest ideas from your brightest business minds that creatively tackle giant social issues.
              The competition will be held in two rounds where you will propose a solution to the provided theme.<br />To check out the entire details,
              <button className={globalStyles.btn} ><a href=" https://drive.google.com/file/d/1UM04U_QcyMSWQ-3Bc2SoiIDmUwKnmgc8/view?fbclid=IwAR1hTSrRWq_idVUfpn3JgAmypwCC7XWxftAaescR169GqL1gK1HzUpZVUp4">Click here</a></button><br />
              Form Link: <button className={globalStyles.btn} ><a href="https://forms.gle/LbbfJBCtUo3DqAgc9">Click here</a></button>
              Registration Deadline: 4th February 2022, 8 PM<br />
              The winners might also get a chance to get seed-funded by Technology Students' Gymkhana on their winning prototypes.


            </p>
          </div>
        </section>


        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}><b>Introductory Seminar<br />
            Open IIT and Technology General Championship events</b></h2>
        </center>

        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <img className={globalStyles.cardImg}
                src={openiit}
                alt="open iit tech intro"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              Hello Freshers,<br />
              We hope that you are enjoying a ravishing start to a momentous journey at IIT Kharagpur. As you have known by now, IIT Kharagpur offers myriads opportunities to explore with a healthy learning process, intense competition and lots of insights.<br />
              Owing to the current situation the beneficial bond and interaction between seniors – juniors is barred. But don’t you worry, as we cover this for you. To get you acquainted with the coveted General Championships and Open IIT events, we have organised an extremely insightful session with your much-experienced seniors.<br /> Accumulating their memories, fundaes, suggestions, experiences and strategies, this session will provide productive understandings of mastering in these competitions. <br />
              <br />
              Link to join MS Teams Channel : <button className={globalStyles.btn} > <a href="https://bit.ly/techvistara" style={{ color: 'black' }} >Click here</a></button><br />
              Make sure to join in on 26th December 2021, 5:00 PM<br />
              Looking forward to seeing you there!!<br />

            </p>
          </div>
        </section>


        <center>
          <hr className={globalStyles.hrLine} />
        </center>

        {/*Right alignment code for committee page */}

        {/*  
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard2}>
            <p>
              Hello Freshers,<br />
              We hope that you are enjoying a ravishing start to a momentous journey at IIT Kharagpur. As you have known by now, IIT Kharagpur offers myriads opportunities to explore with a healthy learning process, intense competition and lots of insights.<br />
              Owing to the current situation the beneficial bond and interaction between seniors – juniors is barred. But don’t you worry, as we cover this for you. To get you acquainted with the coveted General Championships and Open IIT events, we have organised an extremely insightful session with your much-experienced seniors.<br /> Accumulating their memories, fundaes, suggestions, experiences and strategies, this session will provide productive understandings of mastering in these competitions. <br />
              <br />
              Link to join MS Teams Channel : <button className={globalStyles.btn} > <a href="https://bit.ly/techvistara" style={{ color: 'black' }} >Click here</a></button><br />
              Make sure to join in on 26th December 2021, 5:00 PM<br />
              Looking forward to seeing you there!!<br />

            </p>

          </div>

          <div className={globalStyles.rightCard}>
            <center>
              <img className={globalStyles.cardImg}
                src={openiit}
                alt="open iit tech intro"
              />
            </center>
          </div>
        </section> 

        <center>
          <hr className={globalStyles.hrLine} />
        </center>

        */}



        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2} >10th Inter IIT Tech Meet</h2>
        </center>


        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <img className={globalStyles.cardImg2}
                src={techmeet}
                alt="Tech meet"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              Hello Kgpians,<br />
              10th Inter IIT Tech Meet is around the corner and this year IIT Kharagpur is the proud host of this enormous technological fiesta. Every edition our team has performed stupendously well and this time too we are prepared with our dedicated, innovative and imaginative team for a successful venture. Introducing you to, “Mann Goel”, the team Contingent Captain.<br />
              Combining his technical and leadership skills, Mann is keen to master all the aspects of problems with thorough discussion and solutions. He has been consistently performing well and is determined to give his best to secure Gold.<br />
              Mann's message to all the KGPians: "With the other two inter IIT trophies already at kgp, now is the time to set the records straight and make kgp the defending champion in all the 3 inter iits at the same time. To realise this kgp dream, I call out each and every kgpian to put in their cent per cent in the upcoming tech meet."<br />

            </p>
          </div>
        </section>


        <center>

          <hr className={globalStyles.hrLine} />
          <br />
          <br />

          <h1>
            Archieves
          </h1>

          <h2 className={globalStyles.head2} >Tradex</h2>
        </center>


        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <img className={globalStyles.cardImg}
                src={tradex}
                alt="tradex"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              Hello KGPians,<br />
              Want to implement your knowledge of investing in a risk-free environment or acquire first-hand experience of the stock market and its vagaries?<br />
              Technology, IIT Kharagpur brings an excellent opportunity to grill and test your skills with an online simulation trading competition- Open IIT Tradex.  Understand the trends in the market, invest accordingly and build a strong portfolio that stands out.
              The competition is completely risk- free conducted on the Dalal Street Investment Journal Trading platform. You will trade with virtual money in a real-time trading simulation, the way it happens in the real world.
              Acquire your seats as the bid starts soon. It will be exciting, nerve-wracking, gruelling and most of all fun!!<br />
              <br />
            </p>
          </div>
          <div className={globalStyles.leftCard}>
            <center>
              <br /><br />
              <img className={globalStyles.cardImg}

                src={result_t}
                alt="tradex"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              <h2 className={globalStyles.head2} >Results</h2><br />
              After facing squarely the ups and downs of the market, our trading champions are:<br />
              Gold: Akshay Chordia (18CY20004)<b />
              Portfolio valuation 1379616.579<br />
              Silver: Bharath Hegde (20HS20016)<br />
              Portfolio valuation 1322532.152<br />
              Bronze: Mohammad Ayan Akhtar (19CE3FP20)<br />
              Portfolio valuation 1314806.087<br />
              Heartiest congratulations to them!<br />

              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2} >Tech Vistara (Blockchain Workshop)</h2>
        </center>

        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <img className={globalStyles.cardImg}
                src={techvistara}
                alt="Tech vistara"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              Hello KGPians,<br />
              The stock market is a no-called strike game. You don’t have to swing at everything – you can wait for your pitch.”<br /> – Warren Buffet<br />
              Want to implement your knowledge of investing in a risk-free environment or acquire first-hand experience of the stock market and its vagaries?
              Technology, IIT Kharagpur brings an excellent opportunity to grill and test your skills with an online simulation trading competition- Open IIT Tradex.  Understand the trends in the market, invest accordingly and build a strong portfolio that stands out.
              Acquire your seats as the bid starts soon. It will be exciting, nerve-wracking, gruelling and most of all fun!!<br />

              Registration Link:<button className={globalStyles.btn} ><a href=" https://forms.gle/esCWFdW5MLMRq6L98">Click here</a></button> <br />
              Registration Deadline: 16th January 2022, 6:00 PM <br />
              Document for reference:<button className={globalStyles.btn} > <a href="https://bit.ly/tradexkgp ">Click here</a></button><br />
              Further information will be mailed to the registered participants.


            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2} >Website Hackathon</h2>
        </center>

        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <img className={globalStyles.cardImg}
                src={img1}
                alt="Website"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              In this event, the students were expected to develop a website that
              would synchronize a student's academic, extracurricular, and
              co-curricular information in one place. As a part of the event, the
              participating teams would develop an API-based backend for the
              website and use it to serve the content for the frontend(s).
              <br />
              <br />
              <br />
              Link to Problem Statement: <button className={globalStyles.btn} >
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1Hmfomj7pa0o8AZonzxC0O0GNTPU0PjgW/view?usp=sharing"
                  rel="noreferrer"
                >  Click Here
                </a></button>

            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2} >Samsung Innovation Award : IIT Kharagpur Chapter</h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <img className={globalStyles.cardImg}
                src={img2}
                alt="Samsung innovation"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              <br />
              <br />
              <br />
              <br />
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
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2} >TechVistara</h2>
        </center>

        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <img className={globalStyles.cardImg}
                src={img3}
                alt="Techvistara"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              <br />
              <br />
              <br />

              <br />
              <br />
              <br />
              TechVistara is a series of interactive sessions aimed to unravel the
              world around us and present it in the most optimized way possible.
              The first episode shed light on “Discovery of Exoplanets and Search
              for the habitable world”. It was presented by Professor Anand
              Narayanan, an astrophysicist scholar and a professor at IIST.
            </p>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />


      </div>
    </Layout>
  );
}
