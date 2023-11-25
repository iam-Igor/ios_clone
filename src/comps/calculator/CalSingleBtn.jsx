import { useState } from "react";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import {
   VALUE_1,
   VALUE_2,
   VALUE_TEMP,
   VALUE_VIEW,
} from "../../redux/store/store";

const CalSingleBtn = ({ num }) => {
   console.log("number", typeof num, num);
   const [isExp, setExp] = useState(false);
   // const [value1, setValue1] = useState("0");

   const reduxValue1 = useSelector((state) => state.value1);
   const reduxValue2 = useSelector((state) => state.value2);
   const reduxValueTemp = useSelector((state) => state.tempValue);
   const reduxValueView = useSelector((state) => state.valueView);
   console.log("value ", reduxValue1, reduxValue2, reduxValueTemp);
   const dispatch = useDispatch();

   const btnClicked = (e) => {
      const btnValue = e.target.value;
      const expressions = ["AC", "+/-", "%", "/", "x", "-", "+", "=", ","];

      // set value 2
      // render in the view
      if (!isNaN(Number(btnValue)) && !isExp) {
         reduxValueView === "0"
            ? dispatch({ type: VALUE_VIEW, payload: btnValue })
            : dispatch({
                 type: VALUE_VIEW,
                 payload: reduxValueView + btnValue,
              });
         // console.log("new value: ");

         // if the input is expression
      } else if (expressions.includes(btnValue)) {
         console.log("entered to exp", btnValue);

         // setExp(true);
         // set input value as a temp value
         // calculate temp with value1 which is 0 at the beginig aslo covert them into Numbers
         dispatch({ type: VALUE_2, payload: reduxValueView });
         if (btnValue === "+") {
            dispatch({
               type: VALUE_1,
               payload: Number(reduxValue1) + Number(reduxValue2),
            });
            dispatch({ type: VALUE_VIEW, payload: reduxValue1 });
            console.log("output: ", reduxValueView);
         }

         // console.log("set value 2", btnValue);
      }

      // if (!isNaN(Number(btnValue)) && !isValue1) {
      //    value1 === "0" ? setValue1(btnValue) : setValue1(value1 + btnValue);
      //    console.log("new value: ", value1);
      // } else {
      //    setIsValue1(true);
      //    console.log("set value 2");
      // }

      console.log("this is the value of btn: ", e.target.value);
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

export default CalSingleBtn;
