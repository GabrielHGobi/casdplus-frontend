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
  return async (formdata) => {
    try {
      data = formdata;
      console.log(data);
      const response = await studentAPI.post("/absence", {
        data,
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
    }
  };
};

export const { Provider, Context } = createDataContext(
  absenceReducer,
  { sendAbsenceJustification },
  { data: null }
);
