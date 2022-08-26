import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import EventsList from './EventsList'
import host from '../../apiService'

const DataUpdate = () => {

    const [title, setTitle] = useState('');
    const [dates, setDates] = useState('');
    const [description, setDescription] = useState('');
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        axios
            .get(`${host}/admin/events/all`)
            .then(res => {
                setEvents(res.data.events);

                setLoading(false);
            })
            .catch(err => console.error(`There was an error in retrieving the events data: ${err}`));
    }

    const handleInputsReset = () => {
        setTitle('');
        setDates('');
        setDescription('');
    }

    const handleAddEvent = () => {
        axios
            .post(`${host}/admin/event/create`, {
                title: title,
                dates: dates,
                description: description
            })
            .then(res => {
                console.log(res.data);

                fetchEvents();
            })
            .catch(err => console.log(`There was this ${err} error in adding the event: ${title}`));
    }

    const handleEventSubmit = () => {
        if (title.length > 0 && dates.length > 0 && description.length > 0) {
            handleAddEvent()
            handleInputsReset()
            console.info(`Event: ${title} was added!`);
        }
    }

    const handleEventRemove = (id, title) => {
        axios
            .put(`${host}/admin/event/delete`, {id: id})
            .then(() => {
                console.log(`Event: ${title} removed.`);

                fetchEvents();
            })
            .catch(err => console.error(`There was an error in deleting the ${title} event: ${err}`));
    }

    return (
        <>
            <section className='w-50'>
                <Form className='text-white'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Event Title</Form.Label>
                        <Form.Control type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Event Dates</Form.Label>
                        <Form.Control type="text" placeholder="Event Dates" value={dates} onChange={(e) => setDates(e.currentTarget.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Event Description</Form.Label>
                        <Form.Control as="textarea" rows={5} type="text" placeholder="Event Description" value={description} onChange={(e) => setDescription(e.currentTarget.value)} />
                    </Form.Group>

                    <Button variant="warning" onClick={handleEventSubmit}>
                        Submit
                    </Button>
                </Form>
            </section>
            <section className='w-75'>
                <EventsList
                    loading={loading}
                    events={events}
                    handleEventRemove={handleEventRemove}
                />
            </section>
        </>
    );
}

export default DataUpdate;