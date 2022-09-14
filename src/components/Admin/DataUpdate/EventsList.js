import React from 'react';
import EventsListRow from './EventsListRow'
import Table from 'react-bootstrap/Table';

const EventsList = (props) => {
    if (props.loading) return <p>Events List is loading... </p>

    return (
        <Table bordered size='sm' className='text-light'>
            <thead className='text-warning'>
                <tr>
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
    )
}

export default EventsList;