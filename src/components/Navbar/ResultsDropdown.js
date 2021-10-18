import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { ResultsDropdown } from "./MenuItems";
import Styles from "../../styles/components/Navbar/dropdown.module.css";

export default function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className={Styles.dropdownContainer}>
      <ul
        onClick={() => handleClick()}
        className={
          click ? `${Styles.dropdownMenu} clicked` : `${Styles.dropdownMenu}`
        }
      >
        {/* Mapping on all items of array to render all dropdown items */}
        {ResultsDropdown.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => setClick(false)}
              className={`Styles.${item.cName}`}
            >
              <NavLink to={item.path}>{item.title}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
