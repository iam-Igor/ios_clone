import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import weatherBG from "../assets/iOS-16-Weather-Wallpaper-1.jpg";

const WeatherApp = () => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  function success(pos) {
    let crd = pos.coords;
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);

    setLocationInfo({ lat: crd.latitude, lon: crd.longitude });
  }

  const getWeatherData = () => {
    fetch(
      "https://weatherapi-com.p.rapidapi.com/current.json?q=" +
        locationInfo.lat +
        "%2C" +
        locationInfo.lon,

      {
        headers: {
          "X-RapidAPI-Key":
            "146b3484dfmsh6a74755abd8268bp1e6739jsnaa8d50dd6aae",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then((data) => {
        console.log(data);
        setWeatherInfo(data);
        getForecastData(data.location.name);
      })
      .catch((err) => {
        console.log("error in fetching data", err);
      });
  };

  const getForecastData = (param) => {
    fetch(
      "https://weatherapi-com.p.rapidapi.com/forecast.json?q=" +
        param +
        "&days=3",

      {
        headers: {
          "X-RapidAPI-Key":
            "146b3484dfmsh6a74755abd8268bp1e6739jsnaa8d50dd6aae",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then((data) => {
        console.log(data, "forecast");
        setForecastData(data.forecast.forecastday);
      })
      .catch((err) => {
        console.log("error in fetching data", err);
      });
  };

  useEffect(() => {
    if (!locationInfo) {
      if (navigator.geolocation) {
        navigator.permissions
          .query({ name: "geolocation" })
          .then(function (result) {
            console.log(result);
            if (result.state === "granted") {
              navigator.geolocation.getCurrentPosition(success);
            } else if (result.state === "prompt") {
              navigator.geolocation.getCurrentPosition();
            } else if (result.state === "denied") {
              console.log("unable to find your current position");
            }
          });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }
  }, [locationInfo]);

  useEffect(() => {
    if (locationInfo) {
      getWeatherData();
    }
  }, [locationInfo]);

  return (
    <Container
      style={{
        backgroundImage: `url(${weatherBG})`,
        backgroundSize: "cover",
      }}
    >
      {weatherInfo && forecastData && (
        <Row className="flex-column pt-4 px-2">
          <Col className="text-white d-flex flex-column align-items-center weather-data-1 my-4">
            <h5 className="fs-1">My Position</h5>
            <p className="m-0">{weatherInfo.location.name}</p>
            <h1>{weatherInfo.current.temp_c}°C</h1>
            <p className="m-0">{weatherInfo.current.condition.text}</p>
          </Col>
          <Col className="forecast-text-1 rounded-5 my-3">
            {forecastData && weatherInfo && (
              <Row className="p-1">
                {forecastData[0].hour.slice(0, 5).map((hour, index) => {
                  return (
                    <Col key={index} className="text-white ">
                      <div>
                        <p className="m-0">
                          {index === 0 ? "Now" : hour.time.slice(10)}
                        </p>
                        <img
                          src={hour.condition.icon}
                          alt="weather-icon"
                          style={{ width: "90%" }}
                        />
                        <p>{hour.temp_c}°C</p>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            )}
          </Col>
          <Col className="forecast-text-1 rounded-5">
            <Row className="p-2 py-4 flex-column">
              <h5 className="text-white">Daily Forecast</h5>
              <Col className="d-flex justify-content-between text-white align-items-center border-bottom">
                <div className="d-flex align-items-center">
                  <p className="m-0">{forecastData[0].date.slice(5)}</p>
                  <img
                    src={forecastData[0].day.condition.icon}
                    alt="weather-icon"
                    style={{ width: "30%" }}
                  />
                </div>
                <div>
                  <p className="m-0">{forecastData[0].day.avgtemp_c}°C</p>
                </div>
                <div>
                  <i className="bi bi-thermometer-high"></i>
                  {forecastData[0].day.maxtemp_c}°C
                </div>
              </Col>
              <Col className="d-flex justify-content-between text-white align-items-center my-3 border-bottom">
                <div className="d-flex align-items-center">
                  <p className="m-0">{forecastData[1].date.slice(5)}</p>
                  <img
                    src={forecastData[1].day.condition.icon}
                    alt="weather-icon"
                    style={{ width: "30%" }}
                  />
                </div>
                <div>
                  <p className="m-0">{forecastData[1].day.avgtemp_c}°C</p>
                </div>
                <div>
                  <i className="bi bi-thermometer-high"></i>
                  {forecastData[1].day.maxtemp_c}°C
                </div>
              </Col>
              <Col className="d-flex justify-content-between text-white align-items-center">
                <div className="d-flex align-items-center">
                  <p className="m-0">{forecastData[2].date.slice(5)}</p>
                  <img
                    src={forecastData[2].day.condition.icon}
                    alt="weather-icon"
                    style={{ width: "32%" }}
                  />
                </div>
                <div>
                  <p className="m-0">{forecastData[2].day.avgtemp_c}°C</p>
                </div>
                <div>
                  <i className="bi bi-thermometer-high"></i>
                  {forecastData[2].day.maxtemp_c}°C
                </div>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="text-white my-3">
              <Col className="forecast-text-1  p-3 me-2 rounded-5">
                <p className="m-0">
                  Uv index<i className="bi bi-brightness-high-fill"></i>
                </p>
                {forecastData[0].day.uv}
                <p>
                  {forecastData[0].day.uv <= 3
                    ? "Low"
                    : forecastData[0].day.uv < 7
                    ? "Medium"
                    : "High"}
                </p>
              </Col>
              <Col className="forecast-text-1 p-3 rounded-5">
                <p className="m-0">
                  Sunrise<i className="bi bi-sunrise-fill"></i>
                </p>
                <p className="m-0 fs-4">{forecastData[0].astro.sunrise}</p>
                <p className="m-0">Sunset: {forecastData[0].astro.sunset}</p>
              </Col>
            </Row>
          </Col>
          <Col className="text-white forecast-text-1 rounded-5 p-3 d-flex justify-content-between">
            <div>
              <p>
                Precipitations<i className="bi bi-cloud-drizzle ms-2"></i>
              </p>
              <p className="fs-3"> {forecastData[0].day.totalprecip_mm} mm</p>
            </div>
            <div>
              <p>
                Wind speed<i className=" ms-2 bi bi-wind"></i>
              </p>
              <p className="fs-3"> {forecastData[0].day.maxwind_kph}Km/h</p>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default WeatherApp;
