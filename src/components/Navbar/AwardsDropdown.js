import React, { useState } from "react";
import { AwardsDropdown } from "./MenuItems";
import { NavLink } from "react-router-dom";
import Styles from "../../styles/components/Navbar/dropdown.module.css";
export default function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div>
      <ul
        onClick={() => handleClick()}
        className={
          click ? `${Styles.dropdownMenu} clicked` : `${Styles.dropdownMenu}`
        }
      >
        {AwardsDropdown.map((item, index) => {
        //   console.log("map");
          return (
            <li
              key={index}
              onClick={() => setClick(false)}
              className={item.cName}
            >
              <NavLink to={item.path}>{item.title}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
