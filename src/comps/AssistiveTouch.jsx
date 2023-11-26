import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Draggable from "react-draggable";
import assistive from "../assets/unnamed.webp";

const AssistiveTouch = () => {
  const location = useNavigate();
  const [showmenu, setShowMenu] = useState(false);
  const [draggable, setDraggable] = useState(false);

  const [startCoord, setStartCoord] = useState(null);
  const [stopCoord, setStopCoord] = useState(null);

  const evaluateCLick = (param) => {
    setStopCoord(param);
    if (param === startCoord) {
      setTimeout(() => {
        setDraggable(true);
      }, 500);
      setShowMenu(!showmenu);
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
      disabled={draggable}
    >
      <div
        className="fab-wrapper col-3 d-flex flex-column align-items-center"
        style={{ position: "absolute" }}
      >
        <img
          src={assistive}
          style={{ width: "70%" }}
          alt="Assistive Touch"
          className="img"
        />
        <div
          className={`assistive-menu fs-1 text-white bg-dark justify-content-around d-flex px-2 py-3 rounded-4 mb-5 w-100 ${
            showmenu ? "open" : "close"
          }`}
        >
          <i
            className="bi bi-lock-fill"
            onClick={() => {
              setDraggable(false);
              location("/Lockscreen/");
              setShowMenu(false);
            }}
          ></i>
          <i
            className="bi bi-house-door-fill"
            onClick={() => {
              setDraggable(false);
              location("/");
              setShowMenu(false);
            }}
          ></i>
        </div>
      </div>
    </Draggable>
  );
};

export default AssistiveTouch;
