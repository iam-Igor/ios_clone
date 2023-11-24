import { Col, Container, Row } from "react-bootstrap";

const CustomNav = () => {
  return (
    <Container fluid className="bg-black text-white py-2">
      <Row className="justify-content-between">
        <Col>
          22:10
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="0.8em"
            viewBox="0 0 448 512"
            fill="white"
            className="ms-2"
          >
            <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" />
          </svg>
        </Col>
        <Col className="text-end">
          <i className="bi bi-reception-3"></i>
          <i className="bi bi-wifi-2 mx-2"></i>
          <i className="bi bi-battery-half"></i>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomNav;
