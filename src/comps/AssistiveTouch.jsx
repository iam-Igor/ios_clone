import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Draggable from "react-draggable";
import assistive from "../assets/unnamed.webp";

const AssistiveTouch = () => {
  const location = useNavigate();

  const [startCoord, setStartCoord] = useState(null);
  const [stopCoord, setStopCoord] = useState(null);

  const evaluateCLick = (param) => {
    setStopCoord(param);
    if (param === startCoord) {
      location("/");
      console.log(param, "parametro stop");
    }
  };

  return (
    <Draggable
      onStart={(e) => {
        console.log("start", e);
        setStartCoord(e.changedTouches[0].clientX);
      }}
      onStop={(e) => {
        console.log("stop", e);
        evaluateCLick(e.changedTouches[0].clientX);
      }}
    >
      <div className="fab-wrapper" style={{ position: "absolute" }}>
        <img
          src={assistive}
          style={{ width: "20%" }}
          alt="Assistive Touch"
          className="img"
        />
      </div>
    </Draggable>
  );
};

export default AssistiveTouch;
