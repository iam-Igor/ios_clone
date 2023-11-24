import { Container, Row, Col } from "react-bootstrap";
import SingleApp from "./SingleApp";

const BottomBar = ({ appList }) => {
  return (
    <Container fluid className="bottom-bar rounded-5 sticky-bottom">
      <Row className="rounded-5">
        {appList.map((app, index) => {
          return (
            <SingleApp key={index} appName={app.name} appIcon={app.icon} />
          );
        })}
      </Row>
    </Container>
  );
};

export default BottomBar;
