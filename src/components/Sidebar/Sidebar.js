import React, { useState } from "react";
import Styles from "./sidebar.module.css";
import { NavLink } from "react-router-dom";
export default function Sidebar({ itemsList }) {
  const [active, setActive] = useState(false);
  function onMouseEnter() {
    setActive(true);
  }
  function onMouseLeave() {
    setActive(false);
  }
  return (
    <>
      <ul
        className={
          active ? `${Styles.sidebar} ${Styles.active}` : `${Styles.sidebar}`
        }
        onMouseEnter={() => onMouseEnter()}
        onMouseLeave={() => onMouseLeave()}
      >
        {itemsList.map((item, index) => {
          return (
            // <li className={Styles.navItem} key={index}>
            //   <a
            //     href={item.route}
            //     className={Styles.sidebarItem}
            //     activeClassName={Styles.activeLink}
            //   >
            //     {item.title}
            //   </a>
            // </li>


            <li className={Styles.navItem}>
              <NavLink
              to={item.route}
              className={Styles.sidebarItem}
              activeClassName={Styles.acitveLink}
            >
              {item.title}
            </NavLink>
            </li>
          );
        })}
        <div
          className={
            active
              ? `${Styles.arrowButton} ${Styles.left}`
              : `${Styles.arrowButton} ${Styles.right}`
          }
        >
          <i
            className={
              active ? `fas fa-chevron-left left` : `fas fa-chevron-right right`
            }
          ></i>
        </div>
      </ul>
    </>
  );
}
