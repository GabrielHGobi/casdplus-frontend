import React, { useEffect, useContext, useState } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { Context as StudentContext } from "../context/StudentContext";
import AppLoading from "expo-app-loading";

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);
  const { getStudentInfo } = useContext(StudentContext);

  useEffect(() => {
    tryLocalSignin({ getStudentInfo });
  }, []);

  return <AppLoading />;
};

export default ResolveAuthScreen;
