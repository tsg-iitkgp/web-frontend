import React from "react";
import Styles from "../styles/components/SocAndCell.module.css";

export default function SocAndCell() {
  return (
    <div className={Styles.socs}>
      <div className={Styles.container}>
        <div className={Styles.card}>
          <div className={`${Styles.face} ${Styles.face1} ${Styles.sc}`}>
            <div className={Styles.content}>
              <h3>Social and Cultural</h3>
            </div>
          </div>
          <div className={`${Styles.face} ${Styles.face2} `}>
            <div className={Styles.content}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum cumque minus iste veritatis provident at.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>

        <div className={Styles.card}>
          <div className={`${Styles.face} ${Styles.face1} ${Styles.te}`}>
            <div className={Styles.content}>
              <h3>Tech and Educational</h3>
            </div>
          </div>
          <div className={`${Styles.face} ${Styles.face2}`}>
            <div className={Styles.content}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum cumque minus iste veritatis provident at.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>

        <div className={Styles.card}>
          <div className={`${Styles.face} ${Styles.face1} ${Styles.rg}`}>
            <div className={Styles.content}>
              <h3>Research Groups</h3>
            </div>
          </div>
          <div className={`${Styles.face} ${Styles.face2}`}>
            <div className={Styles.content}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum cumque minus iste veritatis provident at.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
