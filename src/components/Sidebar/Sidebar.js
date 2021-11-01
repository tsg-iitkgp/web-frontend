import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Styles from "./sidebar.module.css";
export default function Sidebar({ itemsList }) {
  const [active, setActive] = useState(false);
  function onMouseEnter() {
    setActive(true);
  }
  function onMouseLeave() {
    setActive(false);
  }
  return (
    <ul
      className={
        active ? `${Styles.sidebar} ${Styles.active}` : `${Styles.sidebar}`
      }
      onMouseEnter={() => onMouseEnter()}
      onMouseLeave={() => onMouseLeave()}
    >
      {itemsList.map((item, index) => {
        return (
          <li key={index}>
            <NavLink
              to={item.route}
              className={Styles.sidebarItem}
              activeClassName={Styles.active}
            >
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
