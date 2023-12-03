import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { DECIMAL, VALUE_2, ZERO } from "../../redux/store/store";

const CalSingleBtn = ({ num }) => {
   const reduxValue2 = useSelector((state) => state.value2);
   const dispatch = useDispatch();

   const btnClicked = (e) => {
      const btnValue = e.target.value;

      // set value 2
      // render in the view
      if (!isNaN(Number(btnValue)) && btnValue !== "," && btnValue !== "0") {
         reduxValue2 === ""
            ? dispatch({ type: VALUE_2, payload: btnValue })
            : dispatch({ type: VALUE_2, payload: reduxValue2 + btnValue });
      }

      if (btnValue === ",") {
         dispatch({ type: DECIMAL });
      }

      if (btnValue === "0") {
         dispatch({ type: ZERO, payload: btnValue });
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

export default CalSingleBtn;
