import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalSingleBtn from "./CalSingleBtn";
import "./Calculator.css";
import { useSelector } from "react-redux";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { VALUE_1 } from "../../redux/store/store";

function Calculator() {
   // const [isValue1, setIsValue1] = useState(false);
   // const [value1, setValue1] = useState("0");

   const reduxValue1 = useSelector((state) => state.value1);
   // const reduxValue2 = useSelector((state) => state.value2);
   const reduxValueView = useSelector((state) => state.valueView);
   console.log("value ", reduxValue1);

   // useEffect{()=> {

   // },[reduxValue1]}

   return (
      <Container>
         <Row>
            <Col>
               <div className="w-100 text-end">{reduxValueView}</div>
            </Col>
         </Row>
         <Row>
            <CalSingleBtn num={"AC"} />
            <CalSingleBtn num={"+/-"} />
            <CalSingleBtn num={"%"} />
            <CalSingleBtn num={"/"} />
         </Row>
         <Row>
            <CalSingleBtn num={7} />
            <CalSingleBtn num={8} />
            <CalSingleBtn num={9} />
            <CalSingleBtn num={"x"} />
         </Row>
         <Row>
            <CalSingleBtn num={6} />
            <CalSingleBtn num={5} />
            <CalSingleBtn num={4} />
            <CalSingleBtn num={"-"} />
         </Row>
         <Row>
            <CalSingleBtn num={3} />
            <CalSingleBtn num={2} />
            <CalSingleBtn num={1} />
            <CalSingleBtn num={"+"} />
         </Row>
         <Row>
            <CalSingleBtn num={0} />
            <CalSingleBtn num={","} />
            {/* <CalSingleBtn num={1} /> */}
            <CalSingleBtn num={"="} />
         </Row>
      </Container>
   );
}

export default Calculator;
