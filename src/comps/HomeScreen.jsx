import { Container, Row } from "react-bootstrap";

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

import SingleApp from "./SingleApp";
import backgroundImg from "../assets/IMG_5730.png";
import BottomBar from "./BottomBar";

const HomeScreen = () => {
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
  ];

  const bottomApp = [
    { name: "App Store ", icon: appStore },
    { name: "Settings", icon: settingsApp },
    { name: "Safari", icon: safariApp },
  ];

  return (
    <>
      {" "}
      <Container
        fluid
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
        }}
        className="overflow-hidden pb-3 pt-3"
      >
        <Row>
          {allApps.map((app, index) => {
            return (
              <SingleApp key={index} appName={app.name} appIcon={app.icon} />
            );
          })}
        </Row>
        <BottomBar appList={bottomApp} />
      </Container>
    </>
  );
};

export default HomeScreen;
