import { useState } from "react";
import axios from "axios";

export default () => {
  const [token, setToken] = useState("");
  const studentAPI = axios.create({
    baseURL: "https://casdplus.herokuapp.com/student",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(token);

  return [studentAPI, setToken];
};
