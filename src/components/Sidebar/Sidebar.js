import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "../../styles/components/Sidebar/sidebar.module.css";
export default function Sidebar({ itemsList }) {
  return (
    <div className={Styles.sidebar}>
      <ul className={Styles.itemlist}>
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
    </div>
  );
}
