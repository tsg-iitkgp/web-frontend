import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ViewEvent from './ViewEvent';
import EventCardModal from '../../Events/EventCardModal';
import axios from 'axios';
import EventsList from './EventsList'
import host from '../../../apiService'
import DbAndLogout from '../../../pages/admin/DbAndLogout';
import "./EventsUpdate.css"

const EventsUpdate = () => {

    const [title, setTitle] = useState('');
    const [dates, setDates] = useState('');
    const [description, setDescription] = useState('');
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [file, setFile] = useState('');
    const [eventViewStatus, setEventViewStatus] = useState({
        status: false,
        modalStatus: false,
        eventData: {}
    });

    useEffect(() => {
        fetchEvents();
    }, []);
    const inputRef = useRef(null);

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
        setFile('');
        inputRef.current.value = null;

    }
    const handleAddEvent = () => {
        let formData = new FormData();
        formData.append('title', title);
        formData.append('dates', dates);
        formData.append('description', description);
        formData.append('file', file);
        axios
            .post(`${host}/admin/event/create`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
            .then(res => {
                fetchEvents();
            })
            .catch(err => console.log(`There was this ${err} error in adding the event: ${title}`));
    }

    const handleEventSubmit = () => {
        if (title.length > 0 && dates.length > 0 && description.length > 0) {
            handleAddEvent()
            handleInputsReset()
            // console.info(`Event: ${title} was added!`);
        }
    }

    const handleEventRemove = (id, title) => {
        axios
            .put(`${host}/admin/event/delete`, { id: id, title: title })
            .then(() => {
                // console.log(`Event: ${title} removed.`);

                fetchEvents();
            })
            .catch(err => console.error(`There was an error in deleting the ${title} event: ${err}`));
    }

    return (
        <>
            <div className='update-div'>
                <DbAndLogout />
                <div>
                    <h1>Events Update</h1>
                </div>
            <section className='w-50' style={{ marginTop: "5em" }}>
                <Form className='text-white'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Event Title</Form.Label>
                        <Form.Control type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Event Dates</Form.Label>
                        <Form.Control type="text" placeholder="YYYY-MM-DD" value={dates} onChange={(e) => setDates(e.currentTarget.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Event Description</Form.Label>
                        <Form.Control as="textarea" rows={5} type="text" placeholder="Event Description" value={description} onChange={(e) => setDescription(e.currentTarget.value)} />
                    </Form.Group>
                    <Form.Group controlId="formFileSm" className="mb-3">
                        <Form.Label>Event Poster (optional)</Form.Label>
                        <Form.Control type="file" size="sm" ref={inputRef} onChange={(e) => setFile(e.currentTarget.files[0])} />
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
                    setEventViewStatus={setEventViewStatus}
                />
            </section>
            <section>
                <EventCardModal onClose={() => setEventViewStatus({
                    status: true,
                    modalStatus: false,
                    eventData: eventViewStatus.eventData
                })} eventViewStatus={eventViewStatus} />
                <ViewEvent eventViewStatus={eventViewStatus} setEventViewStatus={setEventViewStatus} />
            </section>
            </div>
        </>
    );
}

export default EventsUpdate;