import {
   ADD_NOTE,
   EVALUATE,
   OPERATION,
   PHOTO,
   RESULT,
   VALUE_1,
   VALUE_2,
   VALUE_TEMP,
   VALUE_VIEW,
} from "../store/store";

const initialState = {
   notes: [],
   photos: [],
   value1: "0",
   value2: "0",
   tempValue: "0",
   valueView: "0",
   result: 0,
   operation: "",
};

const mainReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_NOTE:
         return { ...state, notes: [...state.notes, action.payload] };
      case PHOTO:
         return { ...state, photos: [...state.photos, action.payload] };

      // calculator
      case VALUE_1:
         return { ...state, value1: action.payload };
      // case VALUE_1:
      //    return { ...state, value1: action.payload };
      case VALUE_2:
         return {
            ...state,
            value2: action.payload,
         };

      case OPERATION:
         if (state.operation === "" && state.value2 === "") {
            return state;
         }

         if (state.value1 === "") {
            return {
               ...state,
               operation: action.payload,
               value1: state.value2,
               value2: "",
            };
         }

         if (state.value2 === "") {
            return {
               ...state,
               operation: action.payload,
            };
         }

         return {
            ...state,
            value1: evaluate(state),
            operation: action.payload,
            value2: "",
         };

      case EVALUATE:
         if (
            state.operation === "" ||
            state.value1 === "" ||
            state.value2 === ""
         ) {
            return state;
         }

         return {
            ...state,
            value1: "",
            operation: "",
            value2: evaluate(state),
         };

      case VALUE_TEMP:
         return { ...state, tempValue: action.payload };
      case VALUE_VIEW:
         return { ...state, valueView: action.payload };
      case RESULT:
         return { ...state, result: action.payload };
      default:
         return state;
   }
};

function evaluate({ value1, value2, operation }) {
   const previous = parseFloat(value1);
   const current = parseFloat(value2);
   if (isNaN(previous) || isNaN(current)) return "";
   let computation = "";
   switch (operation) {
      case "+":
         computation = previous + current;
         break;
      case "-":
         computation = previous - current;
         break;
      case "x":
         computation = previous * current;
         break;
      case "/":
         computation = previous / current;
         break;

      default:
         computation = "";
   }

   return computation.toString();
}

export default mainReducer;
