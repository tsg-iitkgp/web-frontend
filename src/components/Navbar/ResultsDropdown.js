import React, { useState } from "react";
import { ResultsDropdown } from "./MenuItems";
import { NavLink } from "react-router-dom";
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
