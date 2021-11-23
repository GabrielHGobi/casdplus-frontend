import { useContext } from "react";
import createDataContext from "./createDataContext";
import studentAPI from "../api/CASDplus_student";

import { Context as AuthContext } from "./AuthContext";

const scheduleReducer = (state, action) => {
  switch (action.type) {
    case "add_schedule":
      return action.payload;
    default:
      return state;
  }
};

const getSchedule = (dispatch) => {
  const { state } = useContext(AuthContext);
  return async () => {
    try {
      const response = await studentAPI.get("/classes", {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
      console.log(response);
      dispatch({
        type: "add_schedule",
        payload: response.schedule,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const { Provider, Context } = createDataContext(
  scheduleReducer,
  { getSchedule },
  { schedule: null }
);
