import { Col, Container, Row } from "react-bootstrap";

const MessagesApp = () => {
  const smsArray = [
    {
      user: "Alice",
      message: "Hey, how are you?",
      date: "24/11",
    },
    {
      user: "Bob",
      message: "I'm good, thanks! How about you?",
      date: "24/11",
    },
    {
      user: "Alice",
      message: "I'm doing great!",
      date: "14/11",
    },
    {
      user: "Charlie",
      message: "What's up?",
      date: "12/11",
    },
    {
      user: "David",
      message: "Not much, just chilling.",
      date: "10/09",
    },
    {
      user: "Eva",
      message: "Anyone up for a movie tonight?",
      date: "24/11",
    },
    {
      user: "Frank",
      message: "Sure, what movie are you thinking?",
      date: "24/11",
    },
    {
      user: "Grace",
      message: "I'm in too!",
      date: "24/11",
    },
    {
      user: "Harry",
      message: "Count me in as well.",
      date: "04/11",
    },
    {
      user: "Alice",
      message: "Great! Let's watch the new Spiderman movie.",
      date: "22/11",
    },
  ];

  return (
    <Container>
      <Row className="mt-2 flex-column">
        <Col className="d-flex text-primary justify-content-between align-items-center">
          <p className="m-0">Edit</p>
          <i className="bi bi-pencil-square fs-4"></i>
        </Col>
        <Col className="mx-2 border-bottom p-0">
          <h1>Messages</h1>
        </Col>

        {smsArray.map((message, index) => {
          return (
            <Col key={index} className="d-flex align-items-center py-3">
              <div>
                <i className="bi bi-person-circle fs-1 text-primary"></i>
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

export default MessagesApp;
