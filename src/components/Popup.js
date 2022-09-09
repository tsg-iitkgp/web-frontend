import React, { useState } from 'react';
import './PopupStyles.css';

const Popup = (props) => {
    if (props.show === true) {
        return (
            <>
                <div className="popup" >
                    <div className="popup-body" data-aos="flip-up" data-aos-duration="1000">
                        <div className="popup-heading">
                            <div className="props-title">
                                {props.content.title}
                            </div>
                            <div className="popup-closeButton" onClick={props.disable} >
                                <i class="fa fa-times fa-2x" aria-hidden="true"></i>
                            </div>
                        </div>
                        <hr />
                        <div className="popup-content">
                            <div className="popup-content-image">
                                <div style={{
                                    // display: "flex",
                                    height: "100%",
                                    width: "100%",
                                    backgroundImage: `url(${props.imgSrc})`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                }}>.
                                </div>
                            </div>
                            <div className="popup-content text">
                                <div className='content-date'>{props.content.dates}</div>
                                <div className='content-description'>{props.content.description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    else {
        return null;
    }

}

export default Popup;