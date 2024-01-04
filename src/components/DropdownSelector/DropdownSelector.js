import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DropdownSelector.css";

// CONTACTS PAGE
import contactsStyles from "../../styles/pages/contacts.module.css";
import CurrentOfficeBearers from "../../pages/Contacts/CurrentOfficeBearers";
import PreviousOfficeBearers from "../../pages/Contacts/PreviousOfficeBearers";
import Staff from "../../pages/Contacts/Staff";

export function DropdownSelector({ itemList }) {
  // Option state
  const [option, setOption] = useState("");

  // Update state variable values on the basis of path
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/contacts") {
      setOption("CURRENT OFFICE BEARERS");
    } else if (location.pathname === "/contacts/cob") {
      setOption("CURRENT OFFICE BEARERS");
    } else if (location.pathname === "/contacts/staff") {
      setOption("STAFF");
    } else if (location.pathname === "/contacts/pob") {
      setOption("PREVIOUS OFFICE BEARERS");
    }
  }, [location.pathname]);

  return (
    <div>
      {/* Render Dropdown Menu */}
      <div className="dropdownSelector">
        <select
          value={option}
          onChange={(e) => setOption(e.target.value)}
          className="selectButton"
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
      <div className={contactsStyles.content}>
        {option === "CURRENT OFFICE BEARERS" && <CurrentOfficeBearers />}
        {option === "PREVIOUS OFFICE BEARERS" && <PreviousOfficeBearers />}
        {option === "STAFF" && <Staff />}
      </div>
    </div>
  );
}
