import { useContext } from "react";
import createDataContext from "./createDataContext";
import { Context as AuthContext } from "./AuthContext";
import studentAPI from "../api/CASDplus_student";
import { navigate } from "../navigationRef";

const studentReducer = (state, action) => {
  switch (action.type) {
    case "register_info":
      return { name: action.payload.name };
    default:
      return state;
  }
};

const getStudentInfo =
  (dispatch) =>
  async ({ token }) => {
    try {
      const response = await studentAPI.get("", {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch({
        type: "register_info",
        payload: {
          name: response.data.first_name,
        },
      });
    } catch (err) {
      console.log(err.message);
    }
  };

export const { Provider, Context } = createDataContext(
  studentReducer,
  { getStudentInfo },
  { name: "" }
);
