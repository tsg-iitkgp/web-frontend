import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DropdownSelector.css";

// CONTACTS PAGE
import CurrentOfficeBearers from "../../pages/Contacts/CurrentOfficeBearers";
import PreviousOfficeBearers from "../../pages/Contacts/PreviousOfficeBearers";
import Staff from "../../pages/Contacts/Staff";

// AWARDS PAGE
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

export function DropdownSelector({ itemList, defaultOption }) {
  /**
   * States
   */
  // Option state
  const [option, setOption] = useState(defaultOption);
  // Awards states
  const [year, setYear] = useState("2022-23");

  /**
   * Constants
   */
  const location = useLocation();

  return (
    <div>
      {/* Render Dropdown Selector */}
      <div className="dropdownSelector">
        <select
          value={option}
          onChange={(e) => setOption(e.target.value)}
          className="selector"
        >
          {itemList.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <span className="material-icons expandMore">expand_more</span>
      </div>

      {/* Render page content based on Selected option from Dropdown menu */}

      {/* CONTACTS PAGE */}
      {location.pathname === "/contacts" && (
        <div className="content">
          {option === "CURRENT OFFICE BEARERS" && <CurrentOfficeBearers />}
          {option === "PREVIOUS OFFICE BEARERS" && <PreviousOfficeBearers />}
          {option === "STAFF" && <Staff />}
        </div>
      )}

      {/* AWARDS PAGE */}
      {location.pathname === "/awards" && (
        <div className="content">
          {/* Year Dropdown menu selector */}
          <div className="select GC_dropdown gcSelector">
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
        </div>
      )}
    </div>
  );
}
