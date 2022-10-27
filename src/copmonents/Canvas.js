import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const { draw, ...rest } = props;
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    draw(context, canvas);
  }, [draw]);

  return <canvas ref={canvasRef} {...rest} />;
};

export default Canvas;

export function draw(fontName, text, fontSize) {
  return function (context, canvas) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.textAlign = "left";
    context.font = fontSize + "px " + fontName;
    context.fillStyle = "black";
    // align text vertically center
    context.textBaseline = "middle";
    context.fillText(text, 0, fontSize);
  };
}
