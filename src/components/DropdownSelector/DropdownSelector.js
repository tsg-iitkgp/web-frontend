import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./DropdownSelector.css";

import RenderContactsFromDropdown from "../../pages/Contacts/RenderContacts";
import RenderAwardsFromDropdown from "../../pages/Awards/RenderAwards";
import RenderFaqFromDropdown from "../../pages/FAQ/RenderFaq";
import RenderResultsFromDropdown from "../../pages/Results/RenderResults";

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
            <option key={item} value={item?.index ?? item}>
              {item?.title ?? item}
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

        {/* FAQ PAGE */}
        {location.pathname === "/faq" && (
          <RenderFaqFromDropdown option={option} />
        )}

        {/* RESULTS PAGE */}
        {(location.pathname === "/results/interiit" ||
          location.pathname === "/results/gc") && (
          <RenderResultsFromDropdown option={option} />
        )}
      </div>
    </>
  );
}
