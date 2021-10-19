import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import studentAPI from "../api/CASDplus_student";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "clear_error":
      return { ...state, errorMessage: "" };
    case "signup":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

const signup =
  (dispatch) =>
  async ({ username, password }) => {
    try {
      const response = await studentAPI.post("/login", { username, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({
        type: "signup",
        payload: response.data.token,
      });
      navigate("Home");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: err.message,
      });
    }
  };

const signin = (dispatch) => {
  return ({ email, password }) => {
    // Try to signin
    // Handle success by updatin state
    // Handle failure by showing error message (somehow)
  };
};

const signout = (dispatch) => {
  return () => {
    // somehow signout!!
  };
};

const tryagain = (dispatch) => () => {
  dispatch({
    type: "clear_error",
  });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout, tryagain },
  { token: null, errorMessage: "" }
);
