import React, { useState } from "react";
import { serviceDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "../../styles/components/Navbar/Dropdown.css";

function Dropdown(props) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => {
          setDropdown(!dropdown);
          props.handleClick();
        }}
      >
        {serviceDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;