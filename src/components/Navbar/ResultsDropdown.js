import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/components/Navbar/ResultsDropdown.css";

export default function ResultsDropdown(props) {
  const [dropdown, setDropdown] = useState(false);
  const resultsDropdownList = [
    {
      id: 1,
      title: "General Championship",
      path: "/results/gc",
      cName: "submenu-item",
    },
    {
      id: 2,
      title: "Inter IIT",
      path: "/results/interiit",
      cName: "submenu-item",
    },
  ];

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => {
          setDropdown(!dropdown);
          props.handleClick();
        }}
      >
        {resultsDropdownList.map((item) => {
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
