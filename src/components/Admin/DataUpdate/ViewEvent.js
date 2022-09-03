import React from 'react';
import EventCardPreview from './EventCardPreview';

const ViewEvent = (props) => {
    const eventData = props.modalStatus.eventData;
    let imgSrc = null;

    if (eventData.image) {
        imgSrc = `data:${eventData.imageMimeType};base64,${Buffer.from(eventData.image).toString('base64')}`;
    }

    if (props.modalStatus.status) {
        return (
            <div>
                <div>
                    <h1>Event Preview</h1>
                </div>
                <button className='btn btn-danger' onClick={() => {
                    props.setModalStatus({
                        status: false,
                        eventData: {}
                    });
                }}>Close Preview</button>
                <EventCardPreview
                    title={eventData.title}
                    date={eventData.dates}
                    description={eventData.description}
                    imgSrc={imgSrc}
                    index = {eventData.id}
                />
            </div>
        )
    } else {
        return (
            <p></p>
        )
    }

};

export default ViewEvent;   