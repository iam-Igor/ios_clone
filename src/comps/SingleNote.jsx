import { Col } from "react-bootstrap";

const SingleNote = ({ note }) => {
  return (
    <Col className="border-bottom px-3">
      <h5>{note.title}</h5>
      <p className="m-0">{note.description}</p>
      <p className="m-0">{note.date}</p>
    </Col>
  );
};

export default SingleNote;
