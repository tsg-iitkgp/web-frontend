import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ControlledCarousel.css';
// import './certif.css';

import CertiTemplate from '../../data/CertiTemplate.json'
import ExcelPreview from './ExcelPreview';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handleTemplate = (selectedTemplate, e) => {
        setSelectedTemplate(selectedTemplate.target.id);
    };

    return (
        <>
            <div style={{height: 'auto', width: '40vw'}}>
            <Carousel activeIndex={index} onSelect={handleSelect} interval={null} fade= {true} touch={true}>
                {CertiTemplate.Templates.map(template => (
                    <Carousel.Item key={template.key}>
                        <img
                            className="d-block w-200"
                            src={template.src}
                            alt={template.alt}
                            style={{ borderRadius:'1rem'}}
                        />
                        <Carousel.Caption>
                            <h3>{template.alt}</h3>
                            <button className='btn btn-warning' 
                            id={template.id} 
                            onClick={handleTemplate} >Select</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            </div>
            <p className='text-center d-block btn btn-success m-auto'
            style={{background:'transparent', color:'yellow' ,border:'none'}}>Certificate {parseInt(selectedTemplate) + 1} selected!</p>
            <div style={{height: 'auto', width: '40vw'}}><ExcelPreview id={selectedTemplate} /></div> 

        </>
    );
}

export default ControlledCarousel;