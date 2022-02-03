import { useState } from "react";
import ContactCard from "../components/ContactCard";
import Layout from "../components/Layout";
import awardsData from "./awardsData.json";
import "./Awards.css";
import primg from "./Contacts/Images/prf.png";

const years = ["2020-21", "2019-20", "2018-19", "2017-18", "2016-17", "2015-16"];
function Awards() {
  const [currentTab, setCurrentTab] = useState("socult");
  const [currentYear, setCurrentYear] = useState("2020-21");

  const handleTabChange = (s) => {
    setCurrentTab(s);
  };

  document.title = "Hall Of Fame | TSG";

  return (
    <Layout>
      <h1>
        <title>Hall of Fame</title>
      </h1>
      <section className="awards content" data-aos="zoom-in-up">
        <h2 className="awards_h2">TSG Awards!</h2>

        <div className="tabs">
          <div
            className={`tab ${currentTab === "socult" ? "active" : ""}`}
            onClick={() => handleTabChange("socult")}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button className="btn_interiit">Social &amp; Cultural</button>
          </div>
          <div
            className={`tab ${currentTab === "sports" ? "active" : ""}`}
            onClick={() => handleTabChange("sports")}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button className="btn_interiit">Sports &amp; Games</button>
          </div>
          <div
            className={`tab ${currentTab === "tech" ? "active" : ""}`}
            onClick={() => handleTabChange("tech")}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button className="btn_interiit">Technology</button>
          </div>
          {Object.keys(awardsData[currentYear]).length === 4 && (
            <div
              className={`tab ${currentTab === "specialRecog" ? "active" : ""}`}
              onClick={() => handleTabChange("specialRecog")}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button className="btn_interiit">Special Recognition</button>
            </div>
          )}
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

        {(awardsData[currentYear][currentTab]["awards"] !== undefined ||
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
                Awards{" "}
              </h2>
              <div className="cards" data-aos="zoom-in-up">
                {currentTab !== "specialRecog"
                  ? awardsData[currentYear][currentTab]["awards"]?.map(
                    (winner, index) => (
                      <ContactCard
                        key={index}
                        name={winner.Name}
                        imgSrc={primg}
                        designation={winner.Award}
                      />
                    )
                  )
                  : awardsData[currentYear][currentTab].map((winner, index) => (
                    <ContactCard
                      key={index}
                      name={winner.Name}
                      imgSrc={primg}
                      designation={winner.Award}
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
              Honours{" "}
            </h2>
            <div className="table-container" data-aos="zoom-in-up">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Roll No.</th>
                    <th>Institute Award</th>
                    {currentTab === "sports" && <th>Game</th>}
                  </tr>
                </thead>
                <tbody>
                  {awardsData[currentYear][currentTab]["honours"].map(
                    (winner, index) => (
                      <tr key={index}>
                        <td>{winner.Name}</td>
                        <td>{winner.Roll} </td>
                        <td>{winner.Award}</td>
                        {currentTab === "sports" && <td>{winner.Game}</td>}
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>
    </Layout>
  );
}

export default Awards;
