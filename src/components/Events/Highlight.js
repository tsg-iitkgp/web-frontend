import React from "react";
import Styles from "../../styles/components/Events/highlights.module.css";
import eventsData from "./eventsData";
function Highlight({ events }) {
  return (
    <div>
      {events.map((event, index) => {
        if (event.isHighlight) {
          return (
            <div className={Styles.highlight}>
              <div className={Styles.highlightHeadingContainer}>
                <h1>{event.title}</h1>
              </div>

              <div className={Styles.highlightBody}>
                <p>{event.description}</p>

                {/* Links */}

                {event.links.map((link, index) => {
                  return (
                    <p>
                      {link.description}{" "}
                      <a href={link.href} target="blank">
                        Click Here
                      </a>
                    </p>
                  );
                })}
              </div>

              <div className={Styles.highlightFooter}>
                <div className={Styles.highlightFooterContactCard}>
                  <div>Name</div>
                  <div>+91 7013160459</div>
                </div>

                <div className={Styles.highlightFooterContactCard}>
                  <div>Name</div>
                  <div>+91 7013160459</div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Highlight;
