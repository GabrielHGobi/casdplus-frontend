import { useContext } from "react";
import createDataContext from "./createDataContext";
import { Context as AuthContext } from "./AuthContext";
import { navigate } from "../navigationRef";
import studentAPI from "../api/CASDplus_student";

const noticesReducer = (state, action) => {
    switch (action.type) {
      case "get_messages":
        return action.payload;
      default:
        return state;
    }
  };
  
const getMessages = (dispatch) => {
    const { state } = useContext(AuthContext);
    return async () => {
        try {
            response = await studentAPI.get('/messages',{
                headers: { Authorization: `Bearer ${state.token}` },
            });
         dispatch({ type: 'get_messages', payload: response.data })
        }
        catch (err) {
            console.log(err);
        }
    }
}

export const { Provider, Context } = createDataContext(
  noticesReducer,
  { getMessages },
  []
);
