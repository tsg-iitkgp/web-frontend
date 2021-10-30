import { useState } from "react";
import "./interiit.css";
import pointsData from "./pointsData";

const years = ["2019-20"];

export default function InterIIT() {
  const [currentTab, setCurrentTab] = useState("Sports");
  const [currentYear, setCurrentYear] = useState("2019");

  const handleTabChange = (s) => {
    setCurrentTab(s);
  };

  return (
    <>
      <h1>
        <title>InterIIT 2019</title>
      </h1>
      <section className="awards">
        <h2
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            paddingBottom: "3%",
            alignItems: "center",
          }}
        >
          InterIIT {currentYear} {currentTab} Standings
        </h2>
        <div className="tabs">
          <div
            className={`tab ${currentTab === "Sports" ? "active" : ""}`}
            onClick={() => handleTabChange("Sports")}
            style={{display: "flex", justifyContent: "center"}}
          >
            <button className="btn_interiit">Sports &amp; Games</button>
          </div>

          <div
            className={`tab ${currentTab === "Technology" ? "active" : ""}`}
            onClick={() => handleTabChange("Technology")}
            style={{display: "flex", justifyContent: "center"}}
          >
            <button className="btn_interiit">Technology</button>
          </div>
          <div
            className={`tab ${currentTab === "Socult" ? "active" : ""}`}
            onClick={() => handleTabChange("Socult")}
            style={{display: "flex", justifyContent: "center"}}
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
                  {pointsData.interIIT[0].map((item) => (
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
                <thead>
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
                <tbody>
                  {pointsData.interIIT[1].map((item) => (
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
          </>
        )}
        {currentTab === "Socult" && (
          <>
            <div className="table-container" style={{ paddingTop: "3%" }}>
              <table>
                <thead>
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
                <tbody>
                  {pointsData.interIIT[2].map((item) => (
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
