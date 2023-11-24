import { Container, Row, Col, Button, Form, Offcanvas } from "react-bootstrap";
import SingleNote from "./SingleNote";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { ADD_NOTE } from "../redux/store/store";

const NoteApp = () => {
  const newNotes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const saveNote = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_NOTE, payload: exampleNote });
  };

  const [exampleNote, setExampleNOte] = useState({
    title: "",
    date: "",
    description: "",
  });

  console.log(newNotes);

  const staticNotes = [
    {
      title: "Films to watch",
      date: "22/10/23",
      description: "LOTR, Spiderman, Avengers",
    },
    {
      title: "Tools for CSS",
      date: "27/10/23",
      description: "Animista.net, CSS BUD, Transitions.css",
    },
    {
      title: "NPM commands",
      date: "13/11/23",
      description:
        "Npm install react-redux, Npm install react-router-dom,npm install react.bootstrap ",
    },
    {
      title: "JavaScript Frameworks",
      date: "07/12/23",
      description: "Vue.js, Angular, Ember.js",
    },
    {
      title: "Python Libraries",
      date: "18/12/23",
      description: "Pandas, NumPy, Matplotlib",
    },
    {
      title: "Healthy Recipes",
      date: "25/12/23",
      description: "Quinoa Salad, Grilled Vegetable Wraps, Chia Seed Pudding",
    },
    {
      title: "Frontend Development Tips",
      date: "31/12/23",
      description:
        "Use Flexbox for layout, Optimize images for performance, Implement lazy loading",
    },
  ];

  return (
    <>
      <Container className="bgCustom px-4">
        <Row className="mt-2 flex-column">
          <Col className="d-flex justify-content-between text-warning">
            <div className="d-flex align-items-center">
              <i className="bi bi-chevron-left fs-4"></i>
              <p className="m-0">Folders</p>
            </div>
            <div className="buttons-text">
              <Button variant="outline-warning" className="rounded-circle">
                {" "}
                <i className="bi bi-three-dots fs-6"></i>
              </Button>{" "}
            </div>
          </Col>
          <Col>
            <h1>All notes</h1>
            <Form.Control type="text" placeholder="Search notes"></Form.Control>
          </Col>
          <Col className="my-4">
            <div className="d-flex justify-content-between">
              {" "}
              <h2>Important notes</h2>
              <i className="bi bi-chevron-down text-warning fs-5"></i>
            </div>
          </Col>
        </Row>
        <Row className="flex-column bg-white rounded-5 p-2 pb-3">
          {staticNotes.map((note, index) => {
            return <SingleNote key={index} note={note} />;
          })}
        </Row>
        {newNotes.length > 0 && (
          <>
            <h2>Last saved notes</h2>
            <Row className="flex-column bg-white rounded-5 p-2 mt-3">
              {newNotes.map((note, index) => {
                return <SingleNote key={index} note={note} />;
              })}
            </Row>
          </>
        )}
      </Container>
      <Row className="bg-white sticky-bottom p-2 text-end">
        <Col>
          <i
            className="bi bi-pencil-square text-warning fs-4"
            onClick={handleShow}
          ></i>
        </Col>
      </Row>
      <>
        <Offcanvas show={show} onHide={handleClose} placement={"bottom"}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              New note{" "}
              <Button variant="outline-warning" onClick={saveNote}>
                Save
              </Button>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form
              onSubmit={(e) => {
                saveNote(e);
              }}
            >
              <Form.Control
                type="text"
                placeholder="Title"
                onChange={(e) => {
                  setExampleNOte({ ...exampleNote, title: e.target.value });
                }}
              ></Form.Control>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Description"
                onChange={(e) => {
                  setExampleNOte({
                    ...exampleNote,
                    description: e.target.value,
                  });
                }}
              />{" "}
            </Form>
            <Form.Control
              type="date"
              placeholder="date"
              onChange={(e) => {
                setExampleNOte({
                  ...exampleNote,
                  date: e.target.value,
                });
              }}
              className="my-2"
            ></Form.Control>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </>
  );
};

export default NoteApp;
