import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import {
   DECIMAL,
   RESULT,
   VALUE_1,
   VALUE_2,
   VALUE_TEMP,
   VALUE_VIEW,
} from "../../redux/store/store";

const CalSingleBtn = ({ num }) => {
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

   const btnClicked = (e) => {
      const btnValue = e.target.value;

      // set value 2
      // render in the view
      if (!isNaN(Number(btnValue)) && btnValue !== ",") {
         reduxValue2 === ""
            ? dispatch({ type: VALUE_2, payload: btnValue })
            : dispatch({ type: VALUE_2, payload: reduxValue2 + btnValue });
      }

      if (btnValue === ",") {
         dispatch({ type: DECIMAL });
      }
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
