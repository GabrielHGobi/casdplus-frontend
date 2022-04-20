import { useContext } from "react";
import { Context as AuthContext } from "./AuthContext";
import createDataContext from "./createDataContext";
import studentAPI from "../api/CASDplus_student";

const formReducer = (state, action) => {
  switch(action.type){
    case "form_info":
      return{
        text: action.payload.text,
        body: action.payload.body,
        url:  action.payload.url,
      };
    default:
      return state;
  }
  };

const getFormInfo =
 (dispatch) =>
  async ({ token }) =>{
    try{
      const response = await studentAPI.get("/form",{
        headers: {Authorization: `Bearer ${token}`},
      });
      dispatch({
        type:"form_info",
        payload:{
          text: response.data.text,
          body: response.data.body,
          url: response.data.url,
        },
      });
    } catch (err) {
      console.log(err.message);
    }

  };



export const { Provider, Context } = createDataContext(
    formReducer,
    { },
    { title: "",
      body: "",
      url: ""}
  );