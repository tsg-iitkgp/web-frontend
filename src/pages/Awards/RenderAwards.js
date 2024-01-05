import { useState } from "react";
import "../../pages/Awards/Awards.css";
import AwardSection from "../../pages/Awards/AwardSection";
import HonourSection from "../../pages/Awards/HonourSection";

const years = [
  "2022-23",
  "2021-22",
  "2020-21",
  "2019-20",
  "2018-19",
  "2017-18",
  "2016-17",
  "2015-16",
];

export default function RenderAwardsFromDroopdown({ option }) {
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

      {/* Awards Section */}
      <AwardSection currentYear={year} currentTab={option} />

      {/* Honour Section */}
      {option !== "SPECIAL RECOGNITION" && (
        <HonourSection currentYear={year} currentTab={option} />
      )}
    </>
  );
}
