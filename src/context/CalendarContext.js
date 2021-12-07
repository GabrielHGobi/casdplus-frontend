import { useContext } from "react";
import createDataContext from "./createDataContext";
import { Context as AuthContext } from "./AuthContext";
import studentAPI from "../api/CASDplus_student";

const eventsReducer = (state, action) => {
  switch (action.type) {
    case "get_events":
      const items = {};
      action.payload.map((item)=>{
        if (typeof items[item.date] == 'undefined') {
          items[item.date] = [];
        }
        items[item.date].push({name: item.name});
      })
      console.log(items);
      return { events: items };
    default:
      return state;
  }
};

const getEvents = (dispatch) => {
  const { state } = useContext(AuthContext);
  return async () => {
    try {
      response = await studentAPI.get("/events", {
        headers: { Authorization: `Bearer ${state.token}` },
      });
      dispatch({ type: "get_events", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const { Provider, Context } = createDataContext(
  eventsReducer,
  { getEvents },
  { events: {} }
);
