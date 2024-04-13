import React ,{useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import CertiTemplate from '../../pages/newadmin/certifgen2/certi.png';

export default function PreviewCarousel(){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
        <div style ={{height :'auto',width:'45vw',margin:'1.5vw auto'}}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item key="1">
                    <img className="d-block w-100" src= {CertiTemplate}/>
                    <Carousel.Caption style={{color:"black"}}>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item key="2">
                    <img className="d-block w-100" src= {CertiTemplate}/>
                    <Carousel.Caption style={{color:"black"}}>
                        <h3>Second slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item key="3">
                    <img className="d-block w-100" src= {CertiTemplate}/>
                    <Carousel.Caption style={{color:'black'}}>
                        <h3>Third slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 
        </div>
        <div>
            <button className='generate_btn'>Generate</button>
        </div>
        </>
    )
}
