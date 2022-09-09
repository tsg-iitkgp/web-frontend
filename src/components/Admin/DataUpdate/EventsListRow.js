import React from 'react';
import Button from 'react-bootstrap/Button';

const EventsListRow = (props) => {
    const eventData = props.eventData;

    return (
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
            <td style={{ 'textAlign': 'center' }}>
                <Button variant="primary" className='m-auto' style={{ 'padding': '1px 10px', 'margin': 'auto' }} onClick={() => props.setEventViewStatus({
                    status: true,
                    modalStatus: false,
                    eventData: eventData
                })} >View</Button>
                <Button variant="danger" className='m-auto' style={{ 'padding': '1px 10px', 'margin': 'auto' }} onClick={() => props.handleEventRemove(eventData.id, eventData.title)} >Delete</Button>
            </td>
        </tr>
    )
}

export default EventsListRow;