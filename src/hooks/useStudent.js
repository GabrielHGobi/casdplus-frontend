import CASDplus_student from "../api/CASDplus_student";

export default () => {
  studentAPI = CASDplus_student()[0];

  let info = {};

  const getStudentInfo = async () => {
    try {
      const response = await studentAPI.get("", {});
      info = response.data;
    } catch (err) {
      console.log(err.message);
    }
  };

  return [getStudentInfo, info];
};
