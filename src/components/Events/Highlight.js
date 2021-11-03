import React from 'react';
import Styles from '../../styles/components/Events/highlights.module.css';

function Highlight() {
    return (
        <div className={Styles.highlight}>
            <div className={Styles.highlightHeadingContainer}>
                <h1>
                    Hackathon 2021
                </h1>
            </div>
            <div className={Styles.highlightBody}>
                <p>
                    Technology Students' Gymkhana is organising a hackathon of developing a web application for gymkhana.
                    The main purpose of this web application is to bring all the gymkhana related information and services under a single umbrella.
                    This application would serve as a non-academic ERP for all the students of the Indian Institute of Technology Kharagpur.
                </p>
                <p>
                    Link to the pdf: <a href='/'>PDF</a>
                </p>
            </div>
            <div className={Styles.highlightFooter}>
                <div className={Styles.highlightFooterContactCard}>
                    <div>
                        Name
                    </div>
                    <div>
                        +91 7013160459
                    </div>
                </div>
                <div className={Styles.highlightFooterContactCard}>
                    <div>
                        Name
                    </div>
                    <div>
                        +91 7013160459
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Highlight;
