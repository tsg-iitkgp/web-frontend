import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "./EventsUpdate.css";
import ResultsEdit from './ResultsEdit';

const EventsListRow = (props) => {
    const eventData = props.eventData;
    const [display, setDisplay] = useState(false);

    return (
        <>
            <ResultsEdit resultExists={eventData.resultExists} eventTitle={eventData.title} eventId={eventData.id} display={display} disable={()=>{
                setDisplay(false);
            }} />
            <tr>
                <td>
                    {eventData.title}
                </td>
                <td>
                    {eventData.dates}
                </td>
                <td>
                    {eventData.description.substring(0, 20) + '...'}
                </td>
                <td >
                    <div className="btns-conti">
                        <Button variant="primary" className='list-row-btn mr-2' onClick={() => props.setEventViewStatus({
                            status: true,
                            modalStatus: false,
                            eventData: eventData
                        })} >View</Button>
                        <Button variant="danger" className='list-row-btn' onClick={() => props.handleEventRemove(eventData.id, eventData.title)} >Delete</Button>
                        <Button variant='success' className='list-row-btn' onClick={() => {
                            setDisplay(true);
                        }}>Results</Button>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default EventsListRow;