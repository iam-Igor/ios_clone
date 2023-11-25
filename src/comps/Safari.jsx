import { Col, Container, Form, Row } from "react-bootstrap";

const Safari = () => {
  const bookmarks = [
    {
      name: "Google",
      url: "https://www.google.com",
      img: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com",
      img: "https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png",
    },
    {
      name: "Amazon",
      url: "https://www.amazon.com",
      img: "https://cdn4.iconfinder.com/data/icons/socialcones/508/Amazon-512.png",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com",
      img: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/395_Youtube_logo-512.png",
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com",
      img: "https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-512.png",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com",
      img: "https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png",
    },
    {
      name: "Wikipedia",
      url: "https://www.wikipedia.org",
      img: "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_wikipedia-512.png",
    },
  ];

  const articles = [
    {
      name: "Black Friday 2023",
      sitoWeb: "iSpazio.net",
      url: "https://www.ispazio.net/2060259/yankee-candles-black-friday-2023",
    },
    {
      name: "Epic Games Store, gioco gratis del 23 novembre disponibile",
      sitoWeb: "multiplayer.it",
      url: "https://multiplayer.it/notizie/epic-games-store-gioco-gratis-23-novembre-2023-disponibile-come-scaricarlo.html",
    },
    {
      name: "Apple pronta a reinventare il mercato dei portatili",
      sitoWeb: "Computer_idea.it",
      url: "https://www.computer-idea.it/apple-pronta-a-reinventare-il-mercato-dei-portatili-modificando-i-propri-macbook-la-data-della-rivoluzione/",
    },
  ];

  return (
    <Container className="bg-black text-white">
      <Row className="flex-column">
        <Col className="d-flex align-items-center justify-content-between mt-5">
          <h1>Bookmarks</h1>
          <p className="m-0 text-primary">
            Show all<i className="bi bi-chevron-right"></i>
          </p>
        </Col>
        <Col className="mt-4">
          <Row>
            {bookmarks.map((bookmark, index) => {
              return (
                <Col key={index} className="col-4">
                  <a
                    href={bookmark.url}
                    className="text-white text-decoration-none"
                  >
                    <img
                      src={bookmark.img}
                      alt="logo"
                      style={{ width: "50%" }}
                    />
                    <p>{bookmark.name}</p>
                  </a>
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col>
          <h1>Privacy summary</h1>

          <div className="d-flex align-items-center p-4 bg-dark rounded-4">
            <div className="me-3">
              <i className="bi bi-shield-shaded"></i>
              54
            </div>
            <div className="w-75">
              In the last seven days, Safari has blocked 54 trackers from
              profiling you.
            </div>
          </div>
        </Col>
        <Col className="mt-3 d-flex align-items-center justify-content-between">
          <h1>Reading list</h1>
          <p className="m-0 text-primary">
            Show all<i className="bi bi-chevron-right"></i>
          </p>
        </Col>
        <Col>
          {articles.map((article, index) => {
            return (
              <div
                key={index}
                className="d-flex align-items-center p-4 bg-dark rounded-4 my-2"
              >
                <div>
                  <a href={article.url} className="text-white">
                    <p className="fw-bold">{article.sitoWeb}</p>
                    <p>{article.name}</p>
                  </a>
                </div>
              </div>
            );
          })}
        </Col>
        <Col className="bg-dark fixed-bottom py-4 d-flex justify-content-center">
          <Form.Control
            type="text"
            placeholder="Search websites"
            className="w-75"
          ></Form.Control>
        </Col>
      </Row>
    </Container>
  );
};

export default Safari;
