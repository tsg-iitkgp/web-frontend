import { useState } from "react";
import GCdata from "./GCdata";

const years = [
  "2022-23",
  "2021-22",
  "2020-21",
  "2019-20",
  "2018-19",
  "2017-18",
  "2016-17",
];

export default function RenderGcFromDropDown({ option }) {
  const [year, setYear] = useState(years[0]);

  return (
    <>
      {/* Year Dropdown menu selector */}
      <div className="select GC_dropdown">
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* SPORTS & GAMES SECTION */}
      {option === "SPORTS & GAMES" && (
        <>
          {/* MEN'S STANDING */}
          <h2 style={{ padding: "1%", color: "white" }}> Men's Standings</h2>
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
                {GCdata[String(year)].Sports.Male.map((item) => (
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

          {/* WOMEN'S STANDING */}
          <h2 style={{ padding: "1%", color: "white" }}> Women's Standings</h2>
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
                {GCdata[String(year)].Sports.Female.map((item) => (
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

      {/* SOCIAL & CULTURAL */}
      {option === "SOCIAL & CULTURAL" && (
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
                {GCdata[String(year)].Socult.map((item) => (
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

      {/* TECHNOLOGY */}
      {option === "TECHNOLOGY" && (
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
                {GCdata[String(year)].Technology.map((item) => (
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
    </>
  );
}
