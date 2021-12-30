import React from "react";
import Styles from "../../styles/pages/past.module.css";
import senateData from "./../senateData.json";
import { useState } from "react";
import ContactCard from "../../components/ContactCard";
import primg from "./../Contacts/Images/prf.png"


const years = ["2020-21", "2019-20", "2018-19", "2017-18", "2016-17", "2015-16"];


export default function PastBearers() {

  const [currentTab, setCurrentTab] = useState("senate");
  const [currentYear, setCurrentYear] = useState("2020-21");

  const handleTabChange = (s) => {
    setCurrentTab(s);
  };

  const president = senateData.President;
  return (

    <div>




      <section className="awards content">


        <div className="tabs">



        </div>
        <div className="select GC_dropdown">
          <select
            value={currentYear}
            onChange={(e) => setCurrentYear(e.target.value)}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {(senateData[currentYear][currentTab]["profs"] !== undefined ||
          currentTab === "specialRecog") && (
            <>
              <div
                className={Styles.shead1}
              >
                {" "}
                Previous   Year  Senate{" "}
              </div>
              <div className="cards">
                {currentTab !== "specialRecog"
                  ? senateData[currentYear][currentTab]["profs"]?.map(
                    (winner) => (
                      <ContactCard
                        name={winner.Name}
                        imgSrc={primg}
                        designation={winner.Post}
                      />
                    )
                  )
                  : senateData[currentYear][currentTab].map((winner) => (
                    <ContactCard
                      name={winner.Name}
                      imgSrc={"primg"}
                      designation={winner.Post}
                    />
                  ))}
              </div>
            </>
          )}
        {currentTab !== "specialRecog" && (
          <>

            <div className={Styles.senateCard}>

              {/* <thead>
                  <tr>
                    <th>Post</th>
                    <th>Name</th>
                  </tr>
                </thead> */}

              {senateData[currentYear][currentTab]["honours"].map(
                (winner) => (

                  <card className={Styles.card1}>
                    <p >
                      <span style={{ color: "rgb(190, 190, 190)" }}> {winner.Post}</span>
                      <br />


                      {winner.Name}
                    </p>

                  </card>

                  // <tr>
                  //   <td>{winner.Post}</td>
                  //   <td>{winner.Name} </td>


                  // </tr>


                )
              )}


            </div>


          </>
        )}
      </section>




      <br />
      <br />

      <br />
      <br />


    </div>
  );
}
