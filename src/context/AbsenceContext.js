import { useContext } from "react";
import createDataContext from "./createDataContext";
import studentAPI from "../api/CASDplus_student";

import { Context as AuthContext } from "../context/AuthContext";

const absenceReducer = (state, action) => {
  switch (action.type) {
    case "add_formdata":
      return action.payload;
    default:
      return state;
  }
};

const sendAbsenceJustification = (dispatch) => {
  const { state } = useContext(AuthContext);
  const token = state.token;
  return async (data) => {
    try {
      const response = await fetch("https://casdplus.herokuapp.com/student/absence",{
        method: 'post',
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      dispatch({
        type: "add_absence_justification",
        payload: data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const { Provider, Context } = createDataContext(
  absenceReducer,
  { sendAbsenceJustification },
  { data: null }
);
