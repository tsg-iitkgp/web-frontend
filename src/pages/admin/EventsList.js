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
                </tr>
            </thead>
            
            <tbody>
                {props.events.length > 0 ? (
                    props.events.map(item => (
                        <EventsListRow 
                            key={item.id}
                            title={item.title}
                            dates={item.dates}
                            description={item.description.substring(0, 20) + '...'}
                        />
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>There are no Events!</td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}

export default EventsList;