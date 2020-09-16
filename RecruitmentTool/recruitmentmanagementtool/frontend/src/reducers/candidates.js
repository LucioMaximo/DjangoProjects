import {
  GET_CANDIDATES,
  DEL_CANDIDATES,
  ADD_CANDIDATES,
} from "../actions/types.js";
import { func } from "prop-types";

const initialState = {
  candidates: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CANDIDATES:
      return {
        ...state,
        candidates: action.payload,
      };
    case DEL_CANDIDATES:
      return {
        ...state,
        candidates: state.candidates.filter(
          (candidates) => candidates.id !== action.payload
        ),
      };
    case ADD_CANDIDATES:
      return {
        ...state,
        candidates: [...state.candidates, action.payload],
      };
    default:
      return state;
  }
}
