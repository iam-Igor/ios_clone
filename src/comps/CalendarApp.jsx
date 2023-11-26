import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const CalendarApp = () => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
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

  const now = new Date();
  const dayOfTheWeek = now.getDay();
  const nameOfTheDay = days[dayOfTheWeek];
  const monthIndex = now.getMonth();
  const nameOfTheMonth = monthsArray[monthIndex];
  const year = now.getFullYear();
  const dayOfTheMonth = now.getDate();

  console.log(dayOfTheMonth);

  const lastDayOfMonth = new Date(year, monthIndex, 0).getDate();

  const daysOfMonth = [];
  for (let i = 1; i <= lastDayOfMonth; i++) {
    const dayOfWeekIndex = new Date(year, monthIndex, i).getDay();

    const dayName = days[dayOfWeekIndex];
    daysOfMonth.push({ day: i, name: dayName });
  }

  let width = "";

  for (let i = 1; i <= 1; i++) {
    const dayOfWeekIndex = new Date(year, monthIndex, i).getDay();
    console.log(dayOfWeekIndex);
    const firstDayofTheMonth = daysOfMonth[0].name;
    const dayName = days[dayOfWeekIndex];
    daysOfMonth.push({ day: i, name: dayName });

    if (firstDayofTheMonth === days[0]) {
      width = "0%";
    } else {
      width = 14.2857 * dayOfWeekIndex;
    }
  }

  console.log(width.toString());
  return (
    <Container>
      <Row className="flex-column border-bottom">
        <Col className="text-danger d-flex justify-content-between mt-2">
          <div className="d-flex align-items-center">
            <i className="bi bi-chevron-left fs-4"></i>
            <p className="m-0">{year}</p>
          </div>
          <div className="d-flex align-items-center">
            <i className="bi bi-view-list fs-4"></i>
            <i className="bi bi-search fs-4 mx-2"></i>
            <i className="bi bi-plus-lg fs-4"></i>
          </div>
        </Col>
        <Col className="d-flex">
          {days.map((day, index) => {
            return (
              <div key={index} className="col-custom text-center">
                <p className="m-0">{day}</p>
              </div>
            );
          })}
        </Col>
      </Row>
      <h1 className="mt-3 text-danger fs-5 ms-3">
        {nameOfTheMonth.slice(0, 3)}
      </h1>
      <Row className="mt-4">
        <Col className="d-flex  flex-wrap">
          <div style={{ width: `${width.toString()}%` }}></div>
          {daysOfMonth.slice(0, daysOfMonth.length).map((day, index) => {
            return (
              <div key={index} className="col-custom text-center my-3">
                <p className="m-0">{day.day}</p>
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default CalendarApp;
