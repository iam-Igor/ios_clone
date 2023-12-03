import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalSingleBtn from "./CalSingleBtn";
import "./Calculator.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CalSingleOperation from "./CalSingleOperation";

function Calculator() {
   const reduxValue1 = useSelector((state) => state.value1);
   const reduxValue2 = useSelector((state) => state.value2);

   const [windowHeight, setWindowHeight] = useState(window.innerHeight);

   useEffect(() => {
      // handle the size of the window
      const handleResize = () => {
         setWindowHeight(window.innerHeight);
      };

      window.addEventListener("resize", handleResize);

      // cleanup function
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, [windowHeight]);

   return (
      <Container
         className="d-flex flex-column"
         style={{ height: windowHeight - 100 }}
      >
         <div className="flex-grow-1 d-flex flex-column justify-content-center">
            <Row>
               <Col>
                  <div className="w-100 text-end calc-display-top p-3">
                     {reduxValue1}
                  </div>
                  <div className="w-100 text-end calc-display fs-1 p-3">
                     {reduxValue2}
                  </div>
               </Col>
            </Row>
         </div>
         <div>
            <Row>
               <CalSingleOperation num={"AC"} />
               <CalSingleOperation num={"+/-"} />
               <CalSingleOperation num={"%"} />
               <CalSingleOperation num={"/"} />
            </Row>
            <Row>
               <CalSingleBtn num={7} />
               <CalSingleBtn num={8} />
               <CalSingleBtn num={9} />
               <CalSingleOperation num={"x"} />
            </Row>
            <Row>
               <CalSingleBtn num={6} />
               <CalSingleBtn num={5} />
               <CalSingleBtn num={4} />
               <CalSingleOperation num={"-"} />
            </Row>
            <Row>
               <CalSingleBtn num={3} />
               <CalSingleBtn num={2} />
               <CalSingleBtn num={1} />
               <CalSingleOperation num={"+"} />
            </Row>
            <Row>
               <CalSingleBtn num={0} />
               <CalSingleBtn num={","} />
               {/* <CalSingleBtn num={1} /> */}
               <CalSingleOperation num={"="} />
            </Row>
         </div>
      </Container>
   );
}

export default Calculator;
