import { combineReducers } from "redux";
import candidates from "./candidates";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
export default combineReducers({
  candidates,
  errors,
  messages,
  auth,
});
