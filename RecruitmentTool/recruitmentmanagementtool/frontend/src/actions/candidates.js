import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";
import { GET_CANDIDATES, DEL_CANDIDATES, ADD_CANDIDATES } from "./types";

//get candidates
export const getCandidates = () => (dispatch, getState) => {
  axios
    .get("/api/candidates/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_CANDIDATES,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//delete candidates

export const delCandidates = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/candidates/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteCandidate: "candidate deleted" }));
      dispatch({
        type: DEL_CANDIDATES,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// add candidates

export const addCandidates = (candidates) => (dispatch, getState) => {
  axios
    .post("/api/candidates/", candidates, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addCandidate: "candidate added" }));
      dispatch({
        type: ADD_CANDIDATES,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
