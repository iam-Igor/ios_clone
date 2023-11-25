import { Container, Offcanvas, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { TRANSITION } from "../redux/store/store";

const ControlCenter = ({ show }) => {
  const dispatch = useDispatch();

  return (
    <Offcanvas
      show={show}
      placement="top"
      onHide={() => {
        dispatch({ type: TRANSITION, payload: false });
      }}
    >
      <Offcanvas.Body className="control-top">
        <Row className="justify-content-around px-2">
          <Col className="d-flex fs-6 flex-wrap border rounded-4 p-3 py-0 col-5 text-white control">
            <div className="custom-div text-center my-2 bg-warning p-3 rounded-circle me-2">
              <i className="bi bi-airplane-fill"></i>
            </div>
            <div className="custom-div text-center my-2 bg-success p-3 rounded-circle">
              <i className="bi bi-arrow-down-up"></i>
            </div>
            <div className="custom-div text-center my-2 bg-primary p-3 rounded-circle me-2">
              <i className="bi bi-wifi"></i>
            </div>
            <div className="custom-div text-center my-2 bg-primary p-3 rounded-circle">
              <i className="bi bi-bluetooth"></i>
            </div>
          </Col>
          <Col className="d-flex flex-column border rounded-4 col-5 p-3 py-2 justify-content-between control">
            <div className="text-end">
              <i className="bi bi-cast"></i>
            </div>
            <div className="text-center">
              <p className="mb-2">Now playing</p>
            </div>
            <div className="d-flex fs-1 justify-content-center mt-3">
              <i className="bi bi-skip-backward"></i>
              <i className="bi bi-play-fill"></i>
              <i className="bi bi-skip-forward"></i>
            </div>
          </Col>
          <Col className="col-5 d-flex flex-wrap fs-4 p-0 justify-content-between mt-2">
            <div className="custom-div border rounded-3 text-center p-2 control">
              <i className="bi bi-arrow-counterclockwise"></i>
            </div>
            <div className="custom-div border rounded-3 text-center p-2 control">
              <i className="bi bi-view-stacked"></i>
            </div>
            <div className="d-flex align-items-center border rounded-3 w-100 p-2 mt-2 control">
              <div>
                <i className="bi bi-moon-fill"></i>
              </div>
              <div className="fs-6">
                <p className="m-0">Full Immersion</p>
              </div>
            </div>
          </Col>
          <Col className="col-5"></Col>
        </Row>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ControlCenter;
