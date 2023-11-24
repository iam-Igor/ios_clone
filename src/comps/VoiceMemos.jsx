import { Button, Col, Container, Row } from "react-bootstrap";

const VoiceMemos = () => {
  return (
    <Container fluid>
      <Row className="flex-column">
        <Col className="d-flex justify-content-between fs-4 mt-2 text-primary">
          <i className="bi bi-chevron-left"></i>
          <p className="m-0">Edit</p>
        </Col>
        <Col>
          <h1>All memos</h1>
        </Col>
        <Col className="d-flex justify-content-between p-1 border-bottom">
          <div>
            <p className="m-0 fw-bold">New memo #1</p>
            <p className="m-0">Oct 27</p>
          </div>
          <p className="m-0">00:50</p>
        </Col>
        <Col className="d-flex justify-content-between p-1 border-bottom">
          <div>
            <p className="m-0 fw-bold">New memo #2</p>
            <p className="m-0">Oct 29</p>
          </div>
          <p className="m-0">04:50</p>
        </Col>
        <Col className="d-flex justify-content-between p-1 border-bottom">
          <div>
            <p className="m-0 fw-bold">New memo #3</p>
            <p className="m-0">Nov 2</p>
          </div>
          <p className="m-0">00:10</p>
        </Col>
        <Col className="d-flex justify-content-between p-1 border-bottom">
          <div>
            <p className="m-0 fw-bold">New memo #4</p>
            <p className="m-0">Nov 15</p>
          </div>
          <p className="m-0">02:30</p>
        </Col>
        <Col className="d-flex justify-content-between p-1 border-bottom">
          <div>
            <p className="m-0 fw-bold">New memo #5</p>
            <p className="m-0">Nov 20</p>
          </div>
          <p className="m-0">00:50</p>
        </Col>
      </Row>
      <Row className="fixed-bottom">
        <Col className="text-center p-5 bgCustom">
          <Button className="btn btn-danger rounded-circle p-4"></Button>
        </Col>
      </Row>
    </Container>
  );
};

export default VoiceMemos;
