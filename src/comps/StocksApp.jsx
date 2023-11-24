import { Col, Container, Form, Row } from "react-bootstrap";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import StockChart from "./StocksChart";

const StocksApp = () => {
  const now = new Date();
  const dayOfWeek = format(now, "dd");
  const monthName = format(now, "MMMM");

  const [stockData, setStockData] = useState(null);

  const getQuotes = () => {
    fetch(
      "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=AMD%2CIBM%2CAAPL%2CHD%2CNKE",
      {
        headers: {
          "X-RapidAPI-Key":
            "146b3484dfmsh6a74755abd8268bp1e6739jsnaa8d50dd6aae",
          "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("error in fetching quotes");
        }
      })
      .then((data) => {
        console.log(data.quoteResponse.result);
        setStockData(data.quoteResponse.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <Container fluid>
      {stockData && (
        <Row className="flex-column">
          <Col className="d-flex justify-content-between my-3">
            <div>
              <h4 className="fw-bold m-0">Stocks</h4>
              <h4 className="fw-bold">
                {dayOfWeek} {""}
                {monthName}
              </h4>
            </div>
            <i className="bi bi-three-dots text-primary fs-4"></i>
          </Col>
          <Col>
            <Form.Control type="text" placeholder="Search"></Form.Control>
          </Col>
          <Col className="my-3">
            <p className="text-primary fw-bold">
              My assets <i className="bi bi-arrow-down-up"></i>
            </p>
          </Col>
          {stockData.map((asset, index) => {
            return (
              <Col
                key={index}
                className="d-flex justify-content-between border-bottom"
              >
                <div className="w-50">
                  <h4 className="fw-bold m-0">{asset.symbol}</h4>
                  <h4 className="fs-6">{asset.longName}</h4>
                </div>
                <div>
                  <StockChart stockData={stockData} />
                </div>
                <div>
                  <p className="m-0">{asset.bid}</p>
                  <p>+{asset.shortPercentFloat}%</p>
                </div>
              </Col>
            );
          })}
        </Row>
      )}
    </Container>
  );
};

export default StocksApp;
