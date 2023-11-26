import { Button, Col, Container, Row } from "react-bootstrap";
import backgroundImg from "../assets/IMG_5730.png";
import torch from "../assets/ios-flashlight-1-64.png";
import swipeDetect from "swipe-detect";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LockScreen = () => {
  const targetElementRef = useRef(null);
  const [show, setShow] = useState(true);
  const passKey = ["1", "2", "3", "4"];
  const [code, setCode] = useState("");
  const location = useNavigate();
  const [error, setError] = useState(false);
  console.log(code);

  useEffect(() => {
    const isMatching = passKey.every((val, index) => val === code[index]);
    if (isMatching && code.length === 4) {
      location("/");
      setCode("");
    } else if (!isMatching && code.length === 4) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      setCode("");
    }
  }, [code]);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();

  const day = now.getDate();
  const dayOfTheweek = now.getDay();
  const month = now.getMonth();

  useEffect(() => {
    if (targetElementRef.current) {
      const handleSwipe = (swipeDirection) => {
        console.log("Swiped:", swipeDirection);
        // Tua logica per gestire lo swipe
        if (swipeDirection === "up") {
          console.log("ciao");
          setShow(false);
        }
      };

      swipeDetect(targetElementRef.current, handleSwipe, 50);
    }
  }, []);

  return (
    <Container
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
      }}
      className="vh-100"
      ref={targetElementRef}
    >
      {show ? (
        <Row className="flex-column">
          <Col className="text-white align-items-center d-flex flex-column mt-5">
            <p>
              {days[dayOfTheweek]} {day} {monthsArray[month]}
            </p>
            <h1 className="lock-time">
              {hours}:{minutes}
            </h1>
          </Col>
          <Col className="d-flex flex-column lock-bottom mb-4">
            <div className="d-flex align-items-center justify-content-between">
              <div className="bg-white rounded-circle w-25 text-center">
                <img src={torch} alt="torch" style={{ width: "90%" }} />
              </div>
              <div className="bg-white rounded-circle w-25 text-center">
                <i className="bi bi-camera-fill"></i>
              </div>
            </div>
            <div className="text-center fs-4 text-white d-flex flex-column align-items-center">
              <p>Slide to top</p>
              <p className="border w-50 bounce-top "></p>
            </div>
          </Col>
        </Row>
      ) : (
        <Row className="flex-column text-white">
          <Col className="mt-5 text-center">
            <p className={error ? "vibrate" : ""}>
              {error ? "Wrong code" : "Enter code"}
            </p>
          </Col>
          <Col className="col-10 align-self-center d-flex flex-wrap btn-cont">
            {numbers.map((n, i) => {
              return (
                <Button
                  key={i}
                  className="lock-btn rounded-circle my-2"
                  value={parseInt(n)}
                  onClick={(e) => {
                    setCode([...code, e.target.value]);
                  }}
                >
                  {n}
                </Button>
              );
            })}
          </Col>
        </Row>
      )}
    </Container>
  );
};
export default LockScreen;
