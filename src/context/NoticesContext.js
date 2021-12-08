import { useContext } from "react";
import createDataContext from "./createDataContext";
import { Context as AuthContext } from "./AuthContext";
import studentAPI from "../api/CASDplus_student";


const noticesReducer = (state, action) => {
  switch (action.type) {
    case "get_messages":
      let messages =  action.payload.filter(function (message) {
        return !message.pin;
      })
      if (state.pinMessage) messages.unshift(state.pinMessage);
      return { ...state, messages: messages};
    case "pin_message":
      return { ...state, pinMessage: action.payload };
    case "set_label":
      return {
        ...state,
        params: { ...state.params, label_id: action.payload },
      };
    case "set_dates":
      if (action.payload.start_date != action.payload.end_date) {
        return {
          ...state,
          params: {
            ...state.params,
            start_date: action.payload.start_date,
            end_date: action.payload.end_date,
          },
        };
      } else return state;
    case "clear_filters":
      return { ...state, params: {} };
    default:
      return state;
  }
};

const getMessages = (dispatch) => {
  const { state } = useContext(AuthContext);
  const token = state.token;
  console.log(token);
  return async (queryParams) => {
    try {
      response = await studentAPI.get("/messages", {
        headers: { Authorization: `Bearer ${token}` },
        params: queryParams,
      });
      dispatch({ type: "get_messages", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
};

const getPinnedMessage = (dispatch) => {
  const { state } = useContext(AuthContext);
  const token = state.token;
  return async () => {
    try {
      response = await studentAPI.get("/messages", {
        headers: { Authorization: `Bearer ${token}` }
      });
      let pinned_msg = response.data.find(item => item.pin === true);
      dispatch({ type: "pin_message", payload: pinned_msg });
    } catch (err) {
      console.log(err);
    }
  };
};

const setLabelID = (dispatch) => {
  return ({ label_id }) => {
    dispatch({ type: "set_label", payload: label_id });
  };
};

const setDates = (dispatch) => {
  return ({ start_date, end_date }) => {
    dispatch({ type: "set_dates", payload: { start_date, end_date } });
  };
};

const clearFilters = (dispatch) => {
  return () => {
    dispatch({ type: "clear_filters" });
  };
};

export const { Provider, Context } = createDataContext(
  noticesReducer,
  { getMessages, getPinnedMessage, setLabelID, setDates, clearFilters },
  {
    params: {},
    messages: [],
    pinMessage : {}
  }
);
