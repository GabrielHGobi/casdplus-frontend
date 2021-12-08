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
  return async (data) => {
    try {
      console.log(data);
      console.log(state.token);
      
      const response = await fetch("https://casdplus.herokuapp.com/student/absence",{
        method: 'post',
        body: data,
        headers: {
          Authorization: `Bearer ${state.token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      dispatch({
        type: "add_absence_justification",
        payload: data,
      });
    } catch (err) {
      console.log(err.message);
      console.log(response)
    }
  };
};

export const { Provider, Context } = createDataContext(
  absenceReducer,
  { sendAbsenceJustification },
  { data: null }
);
