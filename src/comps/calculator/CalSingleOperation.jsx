import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import {
   EVALUATE,
   OPERATION,
   RESULT,
   VALUE_1,
   VALUE_2,
   VALUE_TEMP,
   VALUE_VIEW,
} from "../../redux/store/store";

const CalSingleOperation = ({ num }) => {
   // console.log("number", typeof num, num);
   const [isExp, setExp] = useState(false);
   // const [value1, setValue1] = useState("0");

   const [isAdd, setAdd] = useState(false);
   const [input1, setInput1] = useState("0");
   const [input2, setInput2] = useState("0");
   const [result, setResult] = useState("0");
   const [tempInput, setTempInput] = useState("0");

   const reduxValue1 = useSelector((state) => state.value1);
   const reduxValue2 = useSelector((state) => state.value2);
   const reduxValueTemp = useSelector((state) => state.tempValue);
   const reduxValueView = useSelector((state) => state.valueView);
   // console.log("value ", reduxValue1, reduxValue2, reduxValueTemp);
   const dispatch = useDispatch();

   useEffect(() => {
      setInput1(reduxValue1);
      setInput2(reduxValue2);
   }, [reduxValue1, reduxValue2]);

   // useEffect(() => {
   //    dispatch({
   //       type: VALUE_2,
   //       payload: Number(input1) + Number(input2),
   //    });
   // }, [isAdd]);

   // useEffect(() => {
   //    setInput1(reduxValue2);
   // }, [reduxValue2]);

   // useEffect(() => {
   //    dispatch({ type: VALUE_2, payload: "0" });
   // }, [reduxValue1, dispatch]);

   // useEffect(() => {
   //    dispatch({
   //       type: RESULT,
   //       payload: Number(reduxValue1) + Number(reduxValue2),
   //    });
   // }, [reduxValue1, reduxValue2, dispatch]);

   // useEffect(() => {
   //    dispatch({ type: VALUE_2, payload: input2 });
   // }, [input2, dispatch]);
   // useEffect(() => {
   //    dispatch({ type: VALUE_1, payload: input1 });
   // }, [input1, dispatch]);
   // useEffect(() => {
   //    dispatch({ type: RESULT, payload: result });
   // }, [result, dispatch]);

   const btnClicked = (e) => {
      const btnValue = e.target.value;
      const expressions = ["AC", "+/-", "%", "/", "x", "-", "+", "=", ","];

      // set value 2
      // render in the view
      if (expressions.includes(btnValue)) {
         // if the input is expression
         dispatch({ type: OPERATION, payload: btnValue });
      }

      if (btnValue === "=") {
         dispatch({ type: EVALUATE });
      }
      // else if (expressions.includes(btnValue)) {
      //    // console.log("entered to exp", btnValue);

      //    // setExp(true);
      //    // set input value as a temp value
      //    // calculate temp with value1 which is 0 at the beginig aslo covert them into Numbers
      //    // dispatch({ type: VALUE_2, payload: reduxValueView });
      //    // if (btnValue === "+") {
      //    //    // someting
      //    // }
      // }
   };

   return (
      <Col
         // sx={num === 0 ? 6 : 3}
         className={
            num === 0
               ? "d-flex justify-content-end align-items-center py-1 col-6 "
               : "d-flex justify-content-end align-items-center py-1 col-3"
         }
      >
         <button
            onClick={btnClicked}
            value={num}
            className={
               num === 0
                  ? "btn-cal fs-1 p-3 text-start ps-4 rounded-pill w-100 border-0"
                  : typeof num === "string"
                  ? "btn-cal fs-1 p-3 rounded-circle text-center btn-cal-expression border-0"
                  : "btn-cal fs-1 p-3 rounded-circle text-center border-0"
            }
         >
            {num}
         </button>
      </Col>
   );
};

export default CalSingleOperation;
