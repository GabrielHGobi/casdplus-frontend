import createDataContext from "./createDataContext";
import studentAPI from "../api/CASDplus_student";

const studentReducer = (state, action) => {
  switch (action.type) {
    case "register_info":
      return {
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        is_casdinho: action.payload.is_casdinho,
      };
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
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          is_casdinho: response.data.is_casdinho,
        },
      });
    } catch (err) {
      console.log(err.message);
    }
  };

export const { Provider, Context } = createDataContext(
  studentReducer,
  { getStudentInfo },
  { first_name: "", last_name: "", is_casdinho: false }
);
