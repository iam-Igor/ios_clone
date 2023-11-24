import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNav from "./comps/CustomNav";
import HomeScreen from "./comps/HomeScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeatherApp from "./comps/WeatherApp";
import AssistiveTouch from "./comps/AssistiveTouch";

function App() {
  return (
    <BrowserRouter>
      <CustomNav />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Weather/" element={<WeatherApp />} />
      </Routes>
      <AssistiveTouch />
    </BrowserRouter>
  );
}

export default App;
