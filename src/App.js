import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import CustomNav from "./comps/CustomNav";
import HomeScreen from "./comps/HomeScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeatherApp from "./comps/WeatherApp";
import AssistiveTouch from "./comps/AssistiveTouch";
import VoiceMemos from "./comps/VoiceMemos";
import StocksApp from "./comps/StocksApp";
import PhotosApp from "./comps/PhotosApp";
import NoteApp from "./comps/NoteApp";
import MessagesApp from "./comps/MessagesApp";
import MailApp from "./comps/MailApp";
import CameraApp from "./comps/CameraApp";
import Safari from "./comps/Safari";
import CalendarApp from "./comps/CalendarApp";
import ControlCenter from "./comps/ControlCenter";
import { useSelector } from "react-redux";
import LockScreen from "./comps/LockScreen";

function App() {
  const transition = useSelector((state) => state.transition);

  return (
    <BrowserRouter>
      <CustomNav />
      <ControlCenter show={transition} />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Weather/" element={<WeatherApp />} />
        <Route path="/Memos/" element={<VoiceMemos />} />
        <Route path="/Stocks/" element={<StocksApp />} />
        <Route path="/Photos/" element={<PhotosApp />} />
        <Route path="/Notes/" element={<NoteApp />} />
        <Route path="/Messages/" element={<MessagesApp />} />
        <Route path="/Mail/" element={<MailApp />} />
        <Route path="/Camera/" element={<CameraApp />} />
        <Route path="/Safari/" element={<Safari />} />
        <Route path="/Calendar/" element={<CalendarApp />} />
        <Route path="/Lockscreen/" element={<LockScreen />} />
      </Routes>
      <AssistiveTouch />
    </BrowserRouter>
  );
}

export default App;
