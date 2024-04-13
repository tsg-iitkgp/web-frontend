import awardsData from "./awardsData.json";

export default function HonourSection({ currentYear, currentTab }) {
  return (
    <>
      <h2 className="sectionHeading"> Honours </h2>
      <div className="table-container" data-aos="zoom-in-up">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll No.</th>
              <th>Institute Award</th>
              {currentTab === "SPORTS & GAMES" && <th>Game</th>}
            </tr>
          </thead>
          <tbody>
            {awardsData[currentYear][currentTab]["honours"].map(
              (winner, index) => (
                <tr key={index}>
                  <td>{winner.Name}</td>
                  <td>{winner.Roll} </td>
                  <td>{winner.Award}</td>
                  {currentTab === "SPORTS & GAMES" && <td>{winner.Game}</td>}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
