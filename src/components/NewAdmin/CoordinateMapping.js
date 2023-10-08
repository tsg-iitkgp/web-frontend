import React, { useState, useEffect, useRef } from "react";
import { getImageSize } from "react-image-size";
import "./CoordinateMapping.css";

import image from "./image.json";
const imgPath = "";

export default function CoordinateMapping() {
    const canvasRef = useRef();
    let canvas = canvasRef.current;

    const [imageBase64, setImageBase64] = useState("");
    const [imgSize, setImgSize] = useState({
        width: 0,
        height: 0
    });
    const [isHovering, setIsHovering] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startingPos, setStartingPos] = useState({ x: 0, y: 0 });
    const [endingPos, setEndingPos] = useState({ x: 0, y: 0 });
    const [rectName, setRectName] = useState("")
    const [allRects, setAllRects] = useState([]);

    useEffect(() => {
        setupCanvas();
        function setupCanvas() {
            if (canvas) {
                getImageSize(imgPath).then(size => {
                    setImgSize(scaleDownPixels(size));
                    // console.log("Done");
                    console.log(canvas.width, canvas.height);
                    console.log(imgSize);
                    canvas.width = imgSize.width;
                    canvas.height = imgSize.height;
                    console.log(canvas.width, canvas.height);
                })
            }
        }
        setImageBase64(image.base64);
    }, [canvas, imgSize.height, imgSize.width]);


    function handleMouseDown(e) {
        setIsMouseDown(true);
        setStartingPos(getCoordinates(e));
        // console.log("Mouse Down - original", getCoordinates(e));
    }

    function handleMouseMove(e) {
        if (isMouseDown) {
            let currentMousePos = getCoordinates(e);
            drawRect(currentMousePos);
        }
    }

    function handleMouseUp(e) {
        setIsMouseDown(false);
        setEndingPos(getCoordinates(e));
    }

    // function to get coordinates on click
    function getCoordinates(e) {
        const rect = canvas.getBoundingClientRect();

        // mouse x, y relative to canvas
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        return {
            x: x,
            y: y
        }
    }

    function clearCanvas() {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function drawRect(currentMousePos) {
        if (isMouseDown) {
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = "red"
            ctx.strokeRect(startingPos.x, startingPos.y, currentMousePos.x - startingPos.x, currentMousePos.y - startingPos.y);
        }
    }

    function handleSave() {
        if (rectName && rectName !== "" && areCoordsAcceptable(startingPos, endingPos)) {
            let rectData = allRects;
            rectData.push({
                name: rectName,
                startingX: startingPos.x,
                startingY: startingPos.y,
                endingX: endingPos.x,
                endingY: endingPos.y
            });
            setAllRects(rectData);
            setStartingPos({
                x: 0,
                y: 0
            });
            setEndingPos({
                x: 0,
                y: 0
            });
            setRectName("");
            clearCanvas();
            console.log(allRects);
        }
    }

    function areCoordsAcceptable(coords1, coords2) {
        const initialPoints = (coords1?.x === 0 && coords1?.y === 0 && coords2?.x === 0 && coords2?.y === 0);
        const equalPoints = (coords1.x === coords2.x && coords1.y === coords2.y);
        const verticalPoints = (coords1.x === coords2.y);
        const horizontalPoints = (coords1.y === coords2.y);
        return !(initialPoints || equalPoints || verticalPoints || horizontalPoints);
    }

    function removeRect(id) {
        let rectArray = allRects;
        let newArray = rectArray.filter((rect, index) => index !== id);
        setAllRects(newArray);
    }

    return (
        <>
        <div className="CoordinateMappingDiv">
            <div className='CanvasDiv'>
                <canvas
                    id='myCanvas'
                    ref={canvasRef}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onClick={getCoordinates}
                    style={{
                        ...imgSize,
                        backgroundImage: `${imageBase64}`,
                        backgroundSize: "contain",
                        cursor: isHovering ? 'crosshair' : 'default'
                    }}
                >
                </canvas>
            </div>
            <div className="RectDiv">
                <div className='InputDiv'>
                    <div className="Form">
                        <label className="name" for="fieldName" >Field Name :</label> 
                        <input value={rectName} id="fieldName"onChange={(e) => setRectName(e.target.value)} />
                    </div>
                    <button onClick={clearCanvas} style={{color:"white",backgroundColor:"#5da9ff",border:"none"}}>Clear Canvas</button>
                    <button onClick={handleSave} style={{color:"white",backgroundColor:"#4CAF50",border:"none"}}>Save</button>
                </div>
                <div className="TableDiv">
                    <table>
                        <thead>

                        <tr>
                            <th>
                                Sr. No.
                            </th>
                            <th>
                                Field Name
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                        </thead>
                        <tbody> 
                            {allRects.map((rect, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}.</td>
                                        <td>{rect.name}</td>
                                        <td><button onClick={() => removeRect(index)} style={{color:"red",fontSize:"20px"}}><i className="fa fa-times">Delete</i></button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    );
    
}

// function to scale down 
function scaleDownPixels(imgSize) {
    const scaleDownFactor = 0.3;
    // console.log(imgSize.width * scaleDownFactor, imgSize.height * scaleDownFactor);
    return {
        width: imgSize?.width * scaleDownFactor,
        height: imgSize?.height * scaleDownFactor
    }
}
