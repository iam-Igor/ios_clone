// import { valueOrDefault } from "chart.js/dist/helpers/helpers.core";
import {
   ADD_NOTE,
   EVALUATE,
   OPERATION,
   PHOTO,
   VALUE_1,
   VALUE_2,
   CLEAN,
   PERCENT,
   DECIMAL,
   ZERO,
   NEGATIVE_POSITIVE,
} from "../store/store";

const initialState = {
   notes: [],
   photos: [],
   value1: "",
   value2: "",
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

      case VALUE_2:
         return {
            ...state,
            value2: action.payload,
         };

      case CLEAN:
         return {
            ...state,
            value1: "",
            value2: "",
         };

      case PERCENT:
         return {
            ...state,
            value1: "",
            value2: state.value2 / 100,
         };

      case DECIMAL: {
         return {
            ...state,
            value2: includeDecimalValue2(state.value2),
         };
      }

      case ZERO: {
         return {
            ...state,
            value2: setZero(state.value2, action.payload),
         };
      }

      case NEGATIVE_POSITIVE:
         return {
            ...state,
            value2: setNegativePositive(state.value2),
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

      default:
         return state;
   }
};

function setNegativePositive(value) {
   if (value.length > 0) {
      return String(parseFloat(value) * -1);
   }
}

function setZero(zero, digit) {
   if (zero === "0") return digit;
   else {
      return zero + digit;
   }
}

function includeDecimalValue2(value2) {
   if (value2.includes(".")) return value2;
   else {
      return value2 + ".";
   }
}

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
      case "AC":
         computation = "";
         break;

      default:
         computation = "";
   }

   return computation.toString();
}

export default mainReducer;
