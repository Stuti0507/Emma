import React, { useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import "./canvas.css";
import {NavLink} from 'react-router-dom'
import AnimatedBot from "./AnimatedBot";


const Canvas = () => {
  const canvasRef = useRef(null);
  const [eraseMode, setEraseMode] = useState(false);
  const [strokeColor, setStrokeColor] = useState("#000000");
  const [canvasColor, setCanvasColor] = useState("#ffffff");
  const [strokeWidth, setStrokeWidth] = useState(5);
  const [eraserWidth, setEraserWidth] = useState(10);


  const handleGetPaths = async () => {
    const paths = await canvasRef.current?.exportPaths();
    console.log(paths);
  };

  const handleEraserClick = () => {
    setEraseMode(true);
    canvasRef.current?.eraseMode(true);
  };

  const handlePenClick = () => {
    setEraseMode(false);
    canvasRef.current?.eraseMode(false);
  };

  const handleUndoClick = () => {
    canvasRef.current?.undo();
  };

  const handleRedoClick = () => {
    canvasRef.current?.redo();
  };

  const handleClearClick = () => {
    canvasRef.current?.clearCanvas();
  };

  const handleResetClick = () => {
    canvasRef.current?.resetCanvas();
  };

  const handleStrokeColorChange = (e) => {
    setStrokeColor(e.target.value);
  };

  const handleCanvasColorChange = (e) => {
    setCanvasColor(e.target.value);
  };

  const handleStrokeWidthChange = (e) => {
    setStrokeWidth(+e.target.value);
  };

  const handleEraserWidthChange = (e) => {
    setEraserWidth(+e.target.value);
  };

  return (
     <div id="canvass">
      < nav>
        <NavLink to="/dashboard" id="drawnav">HOME</NavLink>
      </nav>
      <div id="mee">
      <AnimatedBot />
     
      <div>
      <h1 id="withemma">Lets make Something Cool</h1>
    <div className="canvas-container">

      <div className="tools">
        <button disabled={!eraseMode} onClick={handlePenClick}>Pen</button>
        <button disabled={eraseMode} onClick={handleEraserClick}>Eraser</button>

        <label>Stroke</label>
        <input type="range" min="1" max="20" value={strokeWidth} onChange={handleStrokeWidthChange} disabled={eraseMode} />

        <label>Eraser</label>
        <input type="range" min="1" max="50" value={eraserWidth} onChange={handleEraserWidthChange} disabled={!eraseMode} />

        <label>Stroke Color</label>
        <input type="color" id="co" value={strokeColor} onChange={handleStrokeColorChange} />

        <label>Canvas Color</label>
        <input type="color" id="co" value={canvasColor} onChange={handleCanvasColorChange} />

        <button onClick={handleUndoClick}>Undo</button>
        <button onClick={handleRedoClick}>Redo</button>
        <button onClick={handleClearClick}>Clear</button>
        <button onClick={handleResetClick}>Reset</button>
      </div>

      <ReactSketchCanvas
        id="board"
        ref={canvasRef}
        width="800px"
        height="460px"
        strokeColor={strokeColor}
        canvasColor={canvasColor}
        strokeWidth={strokeWidth}
        eraserWidth={eraserWidth}
      />
    </div>
    <button onClick={handleGetPaths} id="askemma">What it is?</button>
    </div>
    </div>
    </div>
  );
};

export default Canvas;