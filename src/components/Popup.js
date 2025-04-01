import React from 'react';
import './PopupStyles.css';

const Popup = (props) => {
    if (props.show === true) {
        // console.log(props.content);
        let showLink1 = 'noDisplay';
        let showLink2 = 'noDisplay';
        let showLink3 = 'noDisplay';
        (props.content.link1 !== 'null') ? showLink1 = 'linkDisplay' : showLink1 = 'noDisplay';
        (props.content.link2 !== 'null') ? showLink2 = 'linkDisplay' : showLink2 = 'noDisplay';
        (props.content.link3 !== 'null') ? showLink3 = 'linkDisplay' : showLink3 = 'noDisplay';
        // console.log(showLink1, showLink2 , showLink3);
        return (
            <>
                <div className="popup" >
                    <div className="popup-body" data-aos="flip-up" data-aos-duration="1000">
                        <div className="popup-heading">
                            <div className="props-title">
                                {props.content.title}
                            </div>
                            <div className="popup-closeButton" onClick={props.disable} >
                                <i className="fa fa-times fa-2x" aria-hidden="true"></i>
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
                                <div className='content-date'>{props.content.dates}</div> <br />
                                <div className='content-description'>{props.content.description}</div> <br />
                                <div className={showLink1}><span style={{ color: '#f1c40f' }}>Registration Link :</span> <a href={props.content.registrationLink} target="_blank" rel='noreferrer'> {props.content.registrationLink?props.content.registrationLink:"N/A"} </a></div>
                                <div className={showLink2}><span style={{ color: '#f1c40f' }}>Facebook Post Link :</span> <a href={props.content.fbPostLink} target="_blank" rel='noreferrer'> {props.content.fbPostLink?props.content.fbPostLink:"N/A"} </a></div>
                                <div className={showLink3}><span style={{ color: '#f1c40f' }}>Rules and Regulations :</span> <a href={props.content.rulesAndRegulationLink} target="_blank" rel='noreferrer'>{props.content.rulesAndRegulationLink?props.content.rulesAndRegulationLink:"N/A"}</a></div>
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