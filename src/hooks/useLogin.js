import { useState } from "react";
import CASDplus_student from "../api/CASDplus_student";

export default () => {
  // hooks to handle the user login information
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const authenticateAPI = async () => {
    try {
      const response = await CASDplus_student.get("/login", {
        params: {
          username: login,
          password: password,
        },
      });
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };

  return [login, setLogin, password, setPassword, authenticateAPI];
};
