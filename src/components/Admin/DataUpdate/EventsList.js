import React from 'react';
import EventsListRow from './EventsListRow'
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';

const EventsList = (props) => {

    const [btnStyles, setBtnStyles] = useState('btn-warning');

    useEffect(() => {
        if (props.noMoreEvents) {
            setBtnStyles('btn-secondary');
        }
    }, [props.noMoreEvents])

    if (props.loading) return <p>Events List is loading... </p>

    return (
        <>
            <Table bordered size='sm' className='text-light'>
                <thead className='text-warning'>
                    <tr>
                        <th>Announcement Date</th>
                        <th>Title</th>
                        <th>Dates</th>
                        <th>Description</th>
                        <th style={{ 'textAlign': 'center' }}>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {props.events.length > 0 ? (
                        props.events.map(item => (
                            <EventsListRow
                                key={item.id}
                                eventData={item}
                                handleEventRemove={props.handleEventRemove}
                                setEventViewStatus={props.setEventViewStatus}
                            />
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4}>There are no Events!</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <button style={{ "display": "block", "width": "30%", "margin": "auto" }} className={`mr-0 ml-auto btn ${btnStyles} text-white`} disabled={props.noMoreEvents} onClick={() => {
                props.setEventIndex({
                    startIndex: props.eventIndex.startIndex + props.paginationNumber,
                    stopIndex: props.eventIndex.stopIndex + props.paginationNumber
                })
            }}>See More Events</button>
        </>
    )
}

export default EventsList;