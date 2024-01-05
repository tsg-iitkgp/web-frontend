import { useState } from "react";
import InterIITdata from "./InterIITdata";

const years = [
  "2022-23",
  "2021-22",
  "2020-21",
  "2019-20",
  "2018-19",
  "2017-18",
  "2016-17",
];

export default function RenderInterIitFromDropdown({ option }) {
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

      {option === "SPORTS & GAMES" && (
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
                {InterIITdata[String(year)].Sports.Male.map((item) => (
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
                {InterIITdata[String(year)].Sports.Female.map((item) => (
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
                {InterIITdata[String(year)].Socult.map((item) => (
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
                {InterIITdata[String(year)].Technology.map((item) => (
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
