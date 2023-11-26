import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalSingleBtn from "./CalSingleBtn";
import "./Calculator.css";
import { useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import CalSingleOperation from "./CalSingleOperation";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { VALUE_1 } from "../../redux/store/store";

function Calculator() {
   // const [isValue1, setIsValue1] = useState(false);
   // const [value1, setValue1] = useState("0");

   const reduxValue1 = useSelector((state) => state.value1);
   const reduxValue2 = useSelector((state) => state.value2);
   const reduxValueView = useSelector((state) => state.valueView);
   const reduxResult = useSelector((state) => state.result);
   // console.log("value ", reduxValue1, reduxValue2, reduxValueView);

   // useEffect(() => {
   //    console.log("output exact: ", reduxValue2);
   // }, [reduxValue2]);

   return (
      <Container>
         <Row>
            <Col>
               <div className="w-100 text-end">{reduxValue2}</div>
               <Form>
                  <Form.Group className="mb-3">
                     <Form.Control
                        type="number"
                        placeholder="input1"
                        value={reduxValue1}
                     />
                  </Form.Group>
                  <Form.Group className="mb-3">
                     <Form.Control
                        type="number"
                        placeholder="input2"
                        value={reduxValue2}
                     />
                  </Form.Group>
                  <Form.Group className="mb-3">
                     <Form.Control
                        type="number"
                        placeholder="result"
                        value={reduxResult}
                     />
                  </Form.Group>
               </Form>
            </Col>
         </Row>
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
      </Container>
   );
}

export default Calculator;
