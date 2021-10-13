import { useState } from "react";
import CASDplus_student from "../api/CASDplus_student";

export default () => {
  // hooks to handle the user login information
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  [studentAPI, setToken] = CASDplus_student();

  const authenticateAPI = async () => {
    try {
      const response = await studentAPI.post("/login", {
        username: login,
        password: password,
      });
      setToken(response.data.token);
    } catch (err) {
      console.log(err.message);
    }
  };

  return [login, setLogin, password, setPassword, authenticateAPI];
};
