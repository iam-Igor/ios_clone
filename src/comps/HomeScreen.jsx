import { Container, Row, Pagination } from "react-bootstrap";
import swipeDetect from "swipe-detect";
import { TRANSITION } from "../redux/store/store";

import weatherApp from "../assets/macOS Big Sur [icons - Update]/01_weather.png";
import memosApp from "../assets/macOS Big Sur [icons - Update]/03_voice-memos.png";
import settingsApp from "../assets/macOS Big Sur [icons - Update]/08_system-preferences.png";
import stocksApp from "../assets/macOS Big Sur [icons - Update]/09_stocks.png";
import siriApp from "../assets/macOS Big Sur [icons - Update]/10_siri.png";
import safariApp from "../assets/macOS Big Sur [icons - Update]/15_safari.png";
import photosApp from "../assets/macOS Big Sur [icons - Update]/20_photos.png";
import notesApp from "../assets/macOS Big Sur [icons - Update]/23_notes.png";
import messagesApp from "../assets/macOS Big Sur [icons - Update]/27_messages.png";
import mailApp from "../assets/macOS Big Sur [icons - Update]/29_mail.png";
import mapsApp from "../assets/macOS Big Sur [icons - Update]/28_maps.png";
import clockApp from "../assets/macOS Big Sur [icons - Update]/53_clock.png";
import calcApp from "../assets/macOS Big Sur [icons - Update]/56_calculator.png";
import calendarApp from "../assets/macOS Big Sur [icons - Update]/55_calendar.png";
import appStore from "../assets/macOS Big Sur [icons - Update]/63_appstore.png";
import cameraApp from "../assets/macOS Big Sur [icons - Update]/32_image-capture.png";
import findMy from "../assets/macOS Big Sur [icons - Update]/38_findmy.png";
import contactsApp from "../assets/macOS Big Sur [icons - Update]/50_contacts.png";
import reminders from "../assets/macOS Big Sur [icons - Update]/16_reminders.png";

import SingleApp from "./SingleApp";
import backgroundImg from "../assets/IMG_5730.png";
import BottomBar from "./BottomBar";

import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const HomeScreen = () => {
  const targetElementRef = useRef(null);
  const dispatch = useDispatch();

  const allApps = [
    { name: "Weather", icon: weatherApp },
    { name: "Memos", icon: memosApp },
    { name: "Stocks", icon: stocksApp },
    { name: "Siri", icon: siriApp },
    { name: "Photos", icon: photosApp },
    { name: "Notes", icon: notesApp },
    { name: "Messages", icon: messagesApp },
    { name: "Mail", icon: mailApp },
    { name: "Maps", icon: mapsApp },
    { name: "Clock", icon: clockApp },
    { name: "Calculator", icon: calcApp },
    { name: "Calendar", icon: calendarApp },
    { name: "Camera", icon: cameraApp },
    { name: "Find", icon: findMy },
    { name: "Contacts", icon: contactsApp },
    { name: "Reminders", icon: reminders },
  ];

  const bottomApp = [
    { name: "App Store ", icon: appStore },
    { name: "Settings", icon: settingsApp },
    { name: "Safari", icon: safariApp },
  ];

  const appsPerPage = 13;

  // Stato per tenere traccia della pagina corrente
  const [currentPage, setCurrentPage] = useState(1);

  // Calcola l'indice dell'ultimo e del primo elemento dell'array per la pagina corrente
  const indexOfLastApp = currentPage * appsPerPage;
  const indexOfFirstApp = indexOfLastApp - appsPerPage;

  // Estrai le app da visualizzare sulla pagina corrente
  const currentApps = allApps.slice(indexOfFirstApp, indexOfLastApp);

  // Cambia pagina

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    // Verifica che il riferimento all'elemento esista prima di chiamare swipeDetect
    if (targetElementRef.current) {
      const handleSwipe = (swipeDirection) => {
        console.log("Swiped:", swipeDirection);
        // Tua logica per gestire lo swipe
        if (swipeDirection === "left") {
          paginate(2);
        } else if (swipeDirection === "right") {
          paginate(1);
        } else if (swipeDirection === "down") {
          dispatch({ type: TRANSITION, payload: true });
        } else if (swipeDirection === "up") {
          dispatch({ type: TRANSITION, payload: false });
        }
      };

      swipeDetect(targetElementRef.current, handleSwipe, 50); // Adatta la soglia per il rilevamento dello swipe
    }
  }, []);

  return (
    <>
      {" "}
      <Container
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
        }}
        className="overflow-hidden pb-4 pt-3 vh-100"
        ref={targetElementRef}
      >
        <Row>
          {currentApps.map((app, index) => {
            return (
              <SingleApp key={index} appName={app.name} appIcon={app.icon} />
            );
          })}
        </Row>
        <Pagination>
          {Array.from({ length: Math.ceil(allApps.length / appsPerPage) }).map(
            (item, index) => (
              <Pagination.Item key={index} active={index + 1 === currentPage}>
                {index + 1}
              </Pagination.Item>
            )
          )}
        </Pagination>
        <BottomBar appList={bottomApp} />
      </Container>
    </>
  );
};

export default HomeScreen;
