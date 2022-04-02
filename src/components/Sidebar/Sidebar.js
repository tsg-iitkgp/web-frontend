import React, { useState } from "react";
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
            <li key={index}>
              <a
                href={item.route}
                className={Styles.sidebarItem}
                activeClassName={Styles.active}
              >
                {item.title}
              </a>
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
