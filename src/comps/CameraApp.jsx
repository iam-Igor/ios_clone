import { Col, Container, Row } from "react-bootstrap";
import bckg from "../assets/IMG_5730.png";
import { useState, useRef, useEffect } from "react";

const CameraApp = () => {
  const videoRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  // Funzione per catturare l'immagine dalla webcam
  const captureImage = async () => {
    if (videoRef.current) {
      const video = videoRef.current;

      // Accedi alla webcam
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        video.srcObject = stream;
      } catch (err) {
        console.error("Errore nell'accesso alla webcam:", err);
      }
    }
  };

  useEffect(() => {
    captureImage();
  }, []);

  // Funzione per scattare l'immagine
  const takeSnapshot = () => {
    if (videoRef.current) {
      const video = videoRef.current;

      // Crea un canvas per l'elaborazione dell'immagine
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");

      // Disegna il frame attuale del video sul canvas
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Ottieni l'immagine come URL base64
      const image = canvas.toDataURL("image/png");

      // Imposta l'immagine catturata nello stato
      setCapturedImage(image);

      // Stoppa il video stream
      video.srcObject.getVideoTracks().forEach((track) => {
        track.stop();
      });
    }
    captureImage();
  };

  return (
    <Container>
      <Row className="flex-column">
        <Col className="d-flex align-items-center justify-content-between bg-black py-3 text-white">
          <div>
            <i className="bi bi-lightning-charge-fill me-2 text-warning"></i>
            <i className="bi bi-moon-fill"></i>
          </div>
          <div>
            <i className="bi bi-chevron-up"></i>
          </div>
          <div>
            <i className="bi bi-slash-circle-fill"></i>
          </div>
        </Col>
        <Col className="p-0">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            style={{ width: "160%" }}
          />
        </Col>
        <Col className="fixed-bottom bg-black text-white py-5">
          <div className="d-flex justify-content-between">
            <p>VIDEO</p>
            <p>SLO-MO</p>
            <p className="text-warning">FOTO</p>
            <p>PANO</p>
            <p>RITRATTO</p>
          </div>
          <div className="d-flex justify-content-between mt-2 align-items-center">
            <img
              src={capturedImage ? capturedImage : bckg}
              style={{ width: "50px", height: "50px" }}
              alt="last-img"
            />
            <i
              className="bi bi-circle-fill circle me-4"
              onClick={takeSnapshot}
            ></i>
            <i className="bi bi-arrow-repeat fs-1"></i>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CameraApp;
