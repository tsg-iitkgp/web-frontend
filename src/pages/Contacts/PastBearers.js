import React from "react";
import Styles from "../../styles/pages/past.module.css";
import senateData from "./../senateData.json";
import { useState } from "react";
import ContactCard from "../../components/ContactCard";


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
      <center>

    

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
            <h2
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                padding: "3%",
                alignItems: "center",
                color: "#fff",
              }}
            >
              {" "}
              Previous   Year  Senate{" "}
            </h2>
            <div className="cards">
              {currentTab !== "specialRecog"
                ? senateData[currentYear][currentTab]["profs"]?.map(
                    (winner) => (
                      <ContactCard
                        name={winner.Name}
                        imgSrc={""}
                        designation={winner.Post}
                      />
                    )
                  )
                : senateData[currentYear][currentTab].map((winner) => (
                    <ContactCard
                      name={winner.Name}
                      imgSrc={""}
                      designation={winner.Post}
                    />
                  ))}
            </div>
          </>
        )}

        {currentTab !== "specialRecog" && (
          <>
            <h2
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                padding: "3%",
                alignItems: "center",
                color: "#fff",
              }}
            >
              {" "}
              {" "}
            </h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Post</th>
                    <th>Name</th>
                 
                  </tr>
                </thead>
                <tbody>
                  {senateData[currentYear][currentTab]["honours"].map(
                    (winner) => (
                      <tr>
                        <td>{winner.Post}</td>
                        <td>{winner.Name} </td>
          
                       
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>



      
        <br />
        <br />
     
        <br />
        <br />
      
      </center>
    </div>
  );
}
