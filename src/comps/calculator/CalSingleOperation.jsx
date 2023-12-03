import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";
import {
   CLEAN,
   EVALUATE,
   NEGATIVE_POSITIVE,
   OPERATION,
   PERCENT,
} from "../../redux/store/store";

const CalSingleOperation = ({ num }) => {
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
