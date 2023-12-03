import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import {
   CLEAN,
   EVALUATE,
   NEGATIVE_POSITIVE,
   OPERATION,
   PERCENT,
   // RESULT,
   // VALUE_1,
   // VALUE_2,
   // VALUE_TEMP,
   // VALUE_VIEW,
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

   const dispatch = useDispatch();

   const btnClicked = (e) => {
      const btnValue = e.target.value;
      const expressions = ["/", "x", "-", "+"];

      // set value 2
      // render in the view
      if (expressions.includes(btnValue)) {
         // if the input is expression
         dispatch({ type: OPERATION, payload: btnValue });
      }

      if (btnValue === "=") {
         dispatch({ type: EVALUATE });
      }

      if (btnValue === "AC") {
         dispatch({ type: CLEAN });
      }

      if (btnValue === "%") {
         dispatch({ type: PERCENT });
      }

      if (btnValue === "+/-") {
         dispatch({ type: NEGATIVE_POSITIVE });
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

export default CalSingleOperation;
