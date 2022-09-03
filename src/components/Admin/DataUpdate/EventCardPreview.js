import React from "react";
import Styles from "../../../styles/components/Events/eventcard.module.css";

export default function EventCardPreview({
    title,
    date,
    description,
    index,
    imgSrc,
}) {
    let blogCardClass;
    if (index % 2 !== 0) {
        blogCardClass = `${Styles.blogCard} ${Styles.alt}`;
    } else {
        blogCardClass = `${Styles.blogCard}`;
    }
    return (
        <div className={blogCardClass}>
            {imgSrc && (
                <div className={Styles.meta}>
                    <div
                        className={Styles.photo}
                        style={{
                            backgroundImage: `url(${imgSrc})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    ></div>
                    <ul className={Styles.details}>
                        <li className={Styles.author}>
                            <a href="www.google.com" alt="secy_responsible">
                                {" "}
                            </a>
                        </li>
                        <li className={Styles.author}>
                            <a href="www.google.com"> </a>
                        </li>
                    </ul>
                </div>
            )}
            <div className={Styles.description}>
                <h1>{title}</h1>
                <h2>{date}</h2>
                <p> {description}</p>
                <p>

                </p>
                <p className={Styles.readMore}>
                    <a href="www.google.com">Read More</a>
                </p>
            </div>
        </div>
    );
}
