import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Tabs, Tab } from "react-bootstrap";
import { useSelector } from "react-redux";

const PhotosApp = () => {
  const [photoData, setPhotoData] = useState(null);

  const [activeTab, setActiveTab] = useState(true);
  const [activeTab2, setActiveTab2] = useState(false);

  const imagesAlbum = useSelector((state) => state.photos);

  const tabSettings = (param) => {
    if (param === "library") {
      setActiveTab(true);
      setActiveTab2(false);
    } else if (param === "album") {
      setActiveTab2(true);
      setActiveTab(false);
    }
  };

  const getPhotos = () => {
    fetch("https://api.pexels.com/v1/search?query=games&per_page=50", {
      headers: {
        Authorization:
          "yJLe58wdcJk7SzlU9TNot1JNebbnlGGDW6SYwRsbUFiR2C0C5DzdsWav",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("error in fetchin images");
        }
      })
      .then((data) => {
        setPhotoData(data.photos);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <Container>
      <Row className="mt-2 sticky-top z-index-2 top-bar-img py-2">
        <Col className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <i className="bi bi-chevron-left fs-4"></i>
            <p className="m-0">Album</p>
          </div>
          <div className="buttons-text">
            <Button className="btn-secondary rounded-pill p-1">
              Seleziona
            </Button>
            <Button className="btn-secondary rounded-circle p-1 mx-2">
              <i className="bi bi-three-dots"></i>
            </Button>
          </div>
        </Col>
      </Row>
      <Tabs id="uncontrolled-tab-example">
        {photoData && (
          <Tab eventKey="library" active={activeTab}>
            <Row>
              {photoData.map((photo, index) => {
                return (
                  <Col key={index} className="col-4 p-0">
                    <img
                      src={photo.src.large2x}
                      alt="gallery-item"
                      style={{ height: "100px", width: "100%" }}
                    />
                  </Col>
                );
              })}
            </Row>
          </Tab>
        )}

        <Tab eventKey="album" active={activeTab2}>
          {imagesAlbum.length > 0 ? (
            <Row>
              {imagesAlbum.map((photo, index) => {
                return (
                  <Col key={index} className="col-4 p-0">
                    <img
                      src={photo}
                      alt="gallery-item"
                      style={{ height: "100px", width: "100%" }}
                    />
                  </Col>
                );
              })}
            </Row>
          ) : (
            <Row>
              <Col>No images yet</Col>
            </Row>
          )}
        </Tab>
      </Tabs>
      <Row className="fixed-bottom bg-white p-2 py-3">
        <Col className="d-flex justify-content-around">
          <div
            className="text-center pointer"
            onClick={() => {
              tabSettings("library");
            }}
          >
            <i className="bi bi-images fs-3"></i>
            <p className="m-0 bottom-text">Library</p>
          </div>
          <div
            className="text-center pointer"
            onClick={() => {
              setActiveTab("for-you");
            }}
          >
            <i className="bi bi-card-text fs-3"></i>
            <p className="m-0 bottom-text">For you</p>
          </div>
          <div
            className="text-center pointer"
            onClick={() => {
              tabSettings("album");
            }}
          >
            <i className="bi bi-collection fs-3"></i>
            <p className="m-0 bottom-text">Album</p>
          </div>
          <div className="text-center pointer">
            <i className="bi bi-search fs-3"></i>
            <p className="m-0 bottom-text">Search</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PhotosApp;
