import { useContext } from "react";
import createDataContext from "./createDataContext";
import { Context as AuthContext } from "./AuthContext";
import { navigate } from "../navigationRef";
import studentAPI from "../api/CASDplus_student";

const noticesReducer = (state, action) => {
  switch (action.type) {
    case "get_messages":
      return { ...state, messages: action.payload };
    default:
      return state;
  }
};

const getMessages = (dispatch) => {
  const { state } = useContext(AuthContext);
  return async ({ initialDate, finalDate, label_id }) => {
    try {
      const params = {};
      const start_date = initialDate.toISOString().slice(0, 10);
      const end_date = finalDate.toISOString().slice(0, 10);
      if (label_id != 0) {
        params.label_id = label_id;
      }
      if (start_date != end_date) {
        params.start_date = start_date;
        params.end_date = end_date;
      }
      console.log(params);
      response = await studentAPI.get("/messages", {
        headers: { Authorization: `Bearer ${state.token}` },
        params,
      });
      dispatch({ type: "get_messages", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const { Provider, Context } = createDataContext(
  noticesReducer,
  { getMessages },
  { messages: [] }
);
