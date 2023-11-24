import { useState } from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLongPress } from "use-long-press";

const SingleApp = ({ appName, appIcon }) => {
  const location = useNavigate();
  const [wiggle, setWiggle] = useState(false);

  const press = useLongPress(() => {
    console.log("ciao");
    setWiggle(!wiggle);
  });

  return (
    <Col
      className={`col-4 my-2 d-flex align-items-center flex-column justify-content-center ${
        wiggle ? "wiggle" : ""
      }`}
      onClick={() => {
        location(`/${appName}`);
      }}
      {...press()}
    >
      <div className="text-center">
        <img
          src={appIcon}
          style={{ width: "80%" }}
          alt="app-logo"
          className="app-icon"
        />
      </div>
      <p className="m-0 text-white">{appName}</p>
    </Col>
  );
};

export default SingleApp;
