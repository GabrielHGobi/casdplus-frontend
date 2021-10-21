import React, { useEffect, useContext, useState } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import AppLoading from "expo-app-loading";

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return <AppLoading />;
};

export default ResolveAuthScreen;
