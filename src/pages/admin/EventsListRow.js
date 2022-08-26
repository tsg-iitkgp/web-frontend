import React from 'react';

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
        </tr>
    )
}

export default EventsListRow;