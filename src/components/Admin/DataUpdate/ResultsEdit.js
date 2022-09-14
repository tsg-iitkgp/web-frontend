import React, { useState , useRef } from 'react';
import axios from 'axios';
import '../../PopupStyles.css';
import Button from 'react-bootstrap/Button';
import host from '../../../apiService';
import Form from 'react-bootstrap/Form';

const ResultsEdit = (props) => {
    const [resDescription, setResDescription] = useState('');
    const [file, setFile] = useState('');
    const inputRef = useRef(null);

    const handleAddEvent = () => {
        let formData = new FormData();
        formData.append('eventId', props.eventId);
        formData.append('resDescription', resDescription);
        formData.append('file', file);
        axios
            .post(`${host}/admin/event/results`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
            .then(res => {
                // fetchEvents();
                console.log(res);
            })
            .catch(err => console.log(`There was this ${err} error in showing the results.`));
    }

    const handleEditEvent = () => {
        let formData = new FormData();
        formData.append('eventId', props.eventId);
        formData.append('resDescription', resDescription);
        formData.append('file', file);
        axios
            .put(`${host}/admin/event/results`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
            .then(res => {
                // fetchEvents();
                console.log(res);
            })
            .catch(err => console.log(`There was this ${err} error in showing the results.`));
    }

    const handleEventSubmit = () => {
        if (resDescription.length > 0  ) {
            if (props.resultExists) {
                handleEditEvent();
            } else {
                handleAddEvent();
            }
            // handleInputsReset()
            // console.log("Event Added.");
        }
    }

    if (props.display === true) {
        return (
            <>
                <div className="popup" >
                    <div className="popup-body" data-aos="flip-up" data-aos-duration="1000">
                        <div className="popup-heading">
                            <div className="props-title">
                                Publish Results
                            </div>
                            <div className="popup-closeButton" onClick={props.disable} >
                                <i class="fa fa-times fa-2x" aria-hidden="true" ></i>
                            </div>
                        </div>
                        <hr />
                        <div className="popup-content" id="resultsForm">  

                            <div>
                                <div className='content-date' id="subHeading">{props.eventTitle}</div>
                            </div>
                            <div className="popup-form" id='formConti'>
                                <Form className='text-white' >

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Event Results</Form.Label>
                                        <Form.Control as="textarea" rows={5} type="text" placeholder="Event Results" value={resDescription} onChange={(e) => setResDescription(e.currentTarget.value)} />
                                    </Form.Group>

                                    <Form.Group controlId="formFileSm" className="mb-3">
                                        <Form.Label>Event Result Poster (optional)</Form.Label>
                                        <Form.Control type="file" size="sm" ref={inputRef} onChange={(e) => setFile(e.currentTarget.files[0])} />
                                    </Form.Group>
                                    <Button variant="success" className='save-btn' onClick={()=>{
                                        handleEventSubmit();
                                        props.disable();
                                        }}>
                                        Publish
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    else {
        return null;
    }

}

export default ResultsEdit;