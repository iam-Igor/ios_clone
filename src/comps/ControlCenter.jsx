import { Container, Offcanvas, Row, Col } from "react-bootstrap";
import { useState } from "react";

const ControlCenter = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Offcanvas show={show} onHide={handleClose} placement="top">
      <Offcanvas.Body className="control">
        <Row>
          <Col className="d-flex fs-1 flex-wrap border rounded-4 p-3 col-6 text-white">
            <div className="w-50 text-center my-2 bg-warning p-3 rounded-circle">
              <i className="bi bi-airplane-fill"></i>
            </div>
            <div className="w-50 text-center my-2 bg-success p-3 rounded-circle">
              <i className="bi bi-arrow-down-up"></i>
            </div>
            <div className="w-50 text-center my-2 bg-primary p-3 rounded-circle">
              <i className="bi bi-wifi"></i>
            </div>
            <div className="w-50 text-center my-2 bg-primary p-3 rounded-circle">
              <i className="bi bi-bluetooth"></i>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ControlCenter;
