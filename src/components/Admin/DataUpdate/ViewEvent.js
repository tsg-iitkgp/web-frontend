import React from 'react';
import { useState } from 'react';
import Popup from '../../Popup';
import EventCard from '../../Events/EventCard';

const ViewEvent = (props) => {
    const eventData = props.eventViewStatus.eventData;
    const [show, setShow] = useState(false);
    const [content, setContent] = useState(null);
    const [image, setImage] = useState(null);
    let imgSrc = null;

    if (eventData.image) {
        imgSrc = `data:${eventData.imageMimeType};base64,${Buffer.from(eventData.image).toString('base64')}`;
    }

    if (props.eventViewStatus.status) {
        return (
            <>
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
                    imgSrc={imgSrc}
                    index={eventData.id}
                    displayTrue={()=>{
                      setShow(true);
                      setContent(eventData);
                      setImage(imgSrc);
                    }}
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