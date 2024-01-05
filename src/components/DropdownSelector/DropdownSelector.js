import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./DropdownSelector.css";

import RenderContactsFromDropdown from "../../pages/Contacts/RenderContacts";
import RenderAwardsFromDropdown from "../../pages/Awards/RenderAwards";

export function DropdownSelector({ itemList, defaultOption }) {
  /**
   * States
   */
  const [option, setOption] = useState(defaultOption);

  /**
   * Constants
   */
  const location = useLocation();

  return (
    <>
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
      <div className="content">
        {/* CONTACTS PAGE */}
        {location.pathname === "/contacts" && (
          <RenderContactsFromDropdown option={option} />
        )}

        {/* AWARDS PAGE */}
        {location.pathname === "/awards" && (
          <RenderAwardsFromDropdown option={option} />
        )}
      </div>
    </>
  );
}
