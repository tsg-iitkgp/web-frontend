import { useState } from "react";
import "./interiit.css";
import InterIITdata from "./InterIITdata";

const years = [
  "2016-17",
  "2017-18",
  "2018-19",
  "2019-20",
  "2020-21",
  "2021-22",
  "2022-23",
];

export default function InterIIT() {
  const [currentTab, setCurrentTab] = useState("Sports");
  const [currentYear, setCurrentYear] = useState("2022-23");

  const handleTabChange = (s) => {
    setCurrentTab(s);
  };

  return (
    <>
      <section className="awards">
        <p className="pageHeading">INTER IIT</p> {/* Global CSS */}
        <div className="tabs">
          <div
            className={`tab${currentTab === "Sports" ? "active" : ""}`}
            onClick={() => handleTabChange("Sports")}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button className="btn_interiit">Sports &amp; Games</button>
          </div>

          <div
            className={`tab${currentTab === "Technology" ? "active" : ""}`}
            onClick={() => handleTabChange("Technology")}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button className="btn_interiit">Technology</button>
          </div>
          <div
            className={`tab${currentTab === "Socult" ? "active" : ""}`}
            onClick={() => handleTabChange("Socult")}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button className="btn_interiit">Socult</button>
          </div>
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
        {currentTab === "Sports" && (
          <>
            <h2 style={{ padding: "1%" }}> Men's Standings</h2>
            <div className="table-container">
              <table>
                <thead style={{ border: "10px solid #fff" }}>
                  <tr>
                    <th>Sport</th>
                    <th>
                      <span className="medal gold"></span> Gold
                    </th>
                    <th>
                      <span className="medal silver"></span> Silver
                    </th>
                    <th>
                      <span className="medal bronze"></span> Bronze
                    </th>
                  </tr>
                </thead>
                <tbody style={{ border: "10px solid #fff" }}>
                  {InterIITdata[String(currentYear)].Sports.Male.map((item) => (
                    <tr id="overall">
                      <td>{item.Sport}</td>
                      <td>{item.Gold} </td>
                      <td>{item.Silver} </td>
                      <td>{item.Bronze} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 style={{ padding: "1%" }}> Women's Standings</h2>
            <div className="table-container">
              <table>
                <thead style={{ border: "10px solid #fff" }}>
                  <tr>
                    <th>Sport</th>
                    <th>
                      <span className="medal gold"></span> Gold
                    </th>
                    <th>
                      <span className="medal silver"></span> Silver
                    </th>
                    <th>
                      <span className="medal bronze"></span> Bronze
                    </th>
                  </tr>
                </thead>
                <tbody style={{ border: "10px solid #fff" }}>
                  {InterIITdata[String(currentYear)].Sports.Female.map(
                    (item) => (
                      <tr id="overall">
                        <td>{item.Sport}</td>
                        <td>{item.Gold} </td>
                        <td>{item.Silver} </td>
                        <td>{item.Bronze} </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
        {currentTab === "Socult" && (
          <>
            <div className="table-container" style={{ paddingTop: "3%" }}>
              <table>
                <thead style={{ border: "10px solid #fff" }}>
                  <tr>
                    <th>Event Genre</th>
                    <th>
                      <span className="medal gold"></span> Gold
                    </th>
                    <th>
                      <span className="medal silver"></span> Silver
                    </th>
                    <th>
                      <span className="medal bronze"></span> Bronze
                    </th>
                  </tr>
                </thead>
                <tbody style={{ border: "10px solid #fff" }}>
                  {InterIITdata[String(currentYear)].Socult.map((item) => (
                    <tr id="overall">
                      <td>{item.Event}</td>
                      <td>{item.Gold} </td>
                      <td>{item.Silver} </td>
                      <td>{item.Bronze} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
        {currentTab === "Technology" && (
          <>
            <div className="table-container" style={{ paddingTop: "3%" }}>
              <table>
                <thead style={{ border: "10px solid #fff" }}>
                  <tr>
                    <th>Event Genre</th>
                    <th>
                      <span className="medal gold"></span> Gold
                    </th>
                    <th>
                      <span className="medal silver"></span> Silver
                    </th>
                    <th>
                      <span className="medal bronze"></span> Bronze
                    </th>
                  </tr>
                </thead>
                <tbody style={{ border: "10px solid #fff" }}>
                  {InterIITdata[String(currentYear)].Technology.map((item) => (
                    <tr id="overall">
                      <td>{item.Event}</td>
                      <td>{item.Gold} </td>
                      <td>{item.Silver} </td>
                      <td>{item.Bronze} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>
    </>
  );
}
