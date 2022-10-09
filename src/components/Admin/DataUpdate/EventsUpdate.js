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

    const [announcementDate, setAnnouncementDate] = useState('');
    const [title, setTitle] = useState('');
    const [dates, setDates] = useState('');
    const [description, setDescription] = useState('');
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [file, setFile] = useState('');
    const [link1, setLink1] = useState(null);
    const [link2, setLink2] = useState(null);
    const [link3, setLink3] = useState(null);
    const [eventViewStatus, setEventViewStatus] = useState({
        status: false,
        modalStatus: false,
        eventData: {}
    });

    useEffect(() => {
        fetchEvents();
        getDefaultDate();
    }, []);

    const inputRef = useRef(null);

    const getDefaultDate = () => {
        var d = new Date(),
            mm = '' + (d.getMonth() + 1),
            dd = '' + d.getDate(),
            yy = d.getFullYear();

        if (mm.length < 2)
            mm = '0' + mm;
        if (dd.length < 2)
            dd = '0' + dd;
        var dateString = [yy, mm, dd].join('-');

        setAnnouncementDate(dateString);
    }

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
        getDefaultDate();
        setTitle('');
        setDates('');
        setDescription('');
        setLink1(null);
        setLink2(null);
        setLink3(null);
        setFile('');
        inputRef.current.value = null;

    }
    const handleAddEvent = () => {
        let formData = new FormData();
        formData.append('announcementDate', announcementDate);
        formData.append('title', title);
        formData.append('dates', dates);
        formData.append('description', description);
        formData.append('link1', link1);
        formData.append('link2', link2);
        formData.append('link3', link3);
        formData.append('file', file);
        axios
            .post(`${host}/admin/event/create`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
            .then(res => {
                fetchEvents();
                handleInputsReset()
            })
            .catch(err => console.log(`There was this ${err} error in adding the event: ${title}`));
    }

    const handleEventSubmit = () => {
        if (title.length > 0 && dates.length > 0 && description.length > 0) {
            handleAddEvent()
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
                        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ "width": "30%", "marginRight": "0", "marginLeft": "auto" }}>
                            <Form.Label>Event Announcement Date</Form.Label>
                            <Form.Control type="date" value={announcementDate} onChange={(e) => setAnnouncementDate(e.currentTarget.value)} />
                        </Form.Group>

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
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Registration Link (optional)</Form.Label>
                            <Form.Control type="text" placeholder="ex. https://www.google.com" onChange={(e) => setLink1(e.currentTarget.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Facebook Link (optional)</Form.Label>
                            <Form.Control type="text" placeholder="ex. https://www.google.com" onChange={(e) => setLink2(e.currentTarget.value)} />
                        </Form.Group><Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Rules and Regulations (optional)</Form.Label>
                            <Form.Control type="text" placeholder="ex. https://www.google.com" onChange={(e) => setLink3(e.currentTarget.value)} />
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