import React from 'react';
import { useState } from 'react';
import Popup from '../../Popup';
import EventCard from '../../Events/EventCard';
import ResultsPreview from './ResultsPreview';

const ViewEvent = (props) => {
    const eventData = props.eventViewStatus.eventData;
    const [show, setShow] = useState(false);
    const [showRes, setShowRes] = useState(false);
    const [eventResults, setEventResults]= useState(null);
    const [title, setTitle]= useState(null);
    const [index, setIndex] = useState(null);
    const [content, setContent] = useState(null);
    const [image, setImage] = useState(null);
    let imgSrc = null;

    if (eventData.image) {
        imgSrc = `data:${eventData.imageMimeType};base64,${Buffer.from(eventData.image).toString('base64')}`;
    }

    if (props.eventViewStatus.status) {
        return (
            <>
            <ResultsPreview eventTitle={title} eventResults={eventResults} showRes={showRes} index={index} disable={() => { setShowRes(false) }} />
                <Popup show={show} content={content} disable={()=>{setShow(false)}} imgSrc={image}/>
                <div>
                    <div>
                        <h1>Event Preview</h1>
                    </div>
                    <button className='btn btn-danger' onClick={() => {
                        props.setEventViewStatus({
                            status: false,
                            eventData: {}
                        });
                    }}>Close Preview</button>
                    <EventCard
                    title={eventData.title}
                    date={eventData.dates}
                    description={eventData.description}
                    resultExists={eventData.resultExists}
                    imgSrc={imgSrc}
                    index={eventData.id}
                    displayTrue={()=>{
                      setShow(true);
                      setContent(eventData);
                      setImage(imgSrc);
                    }}
                    displayResults={() => {
                        setShowRes(true);
                        setTitle(eventData.title);
                        setIndex(eventData.id);
                        // console.log(`The title is ${title} id = ${event.id}`);
                    }}
                    setEventResults= {setEventResults}
                  />
                </div>
            </>
        )
    } else {
        return (
            <p></p>
        )
    }

};

export default ViewEvent;   