import { Container, Row, Col, Form } from "react-bootstrap";

const MailApp = () => {
  const emailArray = [
    {
      user: "TechVision Inc.",
      message: "Hello, we hope your business is thriving!",
      date: "25/11",
    },
    {
      user: "InnovaTech Solutions",
      message: "Good day! How's everything on your end?",
      date: "26/11",
    },
    {
      user: "DigitalSynergy Corp.",
      message: "Greetings! Have you explored our latest services?",
      date: "27/11",
    },
    {
      user: "NexGen Innovations",
      message: "Hi, any new projects in the pipeline?",
      date: "28/11",
    },
    {
      user: "SpectraSoft Enterprises",
      message: "Hello there! Let's discuss potential collaborations.",
      date: "29/11",
    },
    {
      user: "AquaByte Systems",
      message: "Hey! We're excited about our upcoming products.",
      date: "30/11",
    },
    {
      user: "EcoTech Innovations",
      message: "Greetings! Let's talk about sustainability initiatives.",
      date: "01/12",
    },
    {
      user: "InnoWave Technologies",
      message: "Hello! Any tech trends catching your attention?",
      date: "02/12",
    },
  ];

  return (
    <Container>
      <Row className="flex-column mt-3">
        <Col className="d-flex align-items-center text-primary justify-content-between mb-3">
          <div className="d-flex align-items-center text-primary">
            <i className="bi bi-chevron-left fs-4"></i>
            <p className="m-0">Folders</p>
          </div>
          <div>
            <p className="m-0">Edit</p>
          </div>
        </Col>
        <Col>
          <h1>Incoming(All)</h1>
          <Form.Control type="text" placeholder="Search"></Form.Control>
        </Col>

        {emailArray.map((message, index) => {
          return (
            <Col key={index} className="d-flex align-items-center py-3">
              <div>
                <i className="bi bi-dot fs-1 text-primary"></i>
              </div>
              <div className="border-bottom ms-2 w-100">
                <p className="fw-bold m-0">{message.user}</p>
                <p className="m-0">{message.message}</p>
              </div>
              <div className="align-self-start">
                <p>{message.date}</p>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default MailApp;
