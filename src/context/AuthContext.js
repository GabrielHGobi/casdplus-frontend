import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import studentAPI from "../api/CASDplus_student";
import useFonts from "../hooks/useFonts";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      const errorMessage = action.payload;
      if (errorMessage.includes("400")) {
        return { ...state, errorMessage: "Login e/ou senha em branco" };
      } else if (errorMessage.includes("404")) {
        return { ...state, errorMessage: "Sem conexão com o servidor" };
      } else if (errorMessage.includes("406")) {
        return { ...state, errorMessage: "Login e/ou senha inválido(s)" };
      } else {
        return { ...state, errorMessage };
      }
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignin =
  (dispatch) =>
  async ({ getStudentInfo }) => {
    const token = await AsyncStorage.getItem("token");
    await useFonts();
    if (token) {
      dispatch({ type: "signin", payload: token });
      await getStudentInfo({ token });
      navigate("Home");
    } else {
      navigate("Login");
    }
  };

const signin =
  (dispatch) =>
  async ({ username, password, getStudentInfo }) => {
    try {
      const response = await studentAPI.post("/login", { username, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({
        type: "signup",
        payload: response.data.token,
      });
      getStudentInfo({ token: response.data.token });
      navigate("Home");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: err.message,
      });
    }
  };

const signout = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  try {
    const response = await studentAPI.delete("/logout", {
      headers: { Authorization: `Bearer ${token}` },
    });
    await AsyncStorage.removeItem("token");
    dispatch({ type: "signout" });
    navigate("Login");
  } catch (err) {
    console.log(err.message); 
  }
  await AsyncStorage.removeItem("token");
    dispatch({ type: "signout" });
    navigate("Login");
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({
    type: "clear_error_message",
  });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
