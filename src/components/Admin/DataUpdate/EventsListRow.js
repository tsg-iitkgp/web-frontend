import React from 'react';
import Button from 'react-bootstrap/Button';

const EventsListRow = (props) => {
    return (
        <tr>
            <td>
                {props.title}
            </td>
            <td>
                {props.dates}
            </td>
            <td>
                {props.description}
            </td>
            <td style={{'textAlign': 'center'}}>
                <Button variant="danger" className='m-auto' style={{'padding': '1px 10px', 'margin': 'auto'}} onClick={() => props.handleEventRemove(props.id, props.title)} >Delete</Button>
            </td>
        </tr>
    )
}

export default EventsListRow;