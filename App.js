import React from "react";
import { StatusBar } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import AbsenceScreen from "./src/screens/AbsenceScreen";
import EssaysScreen from "./src/screens/EssaysScreen";
import ScheduleScreen from "./src/screens/ScheduleScreen";
import NoticesScreen from "./src/screens/NoticesScreen";
import CalendarScreen from "./src/screens/CalendarScreen";
import MessageScreen from "./src/screens/MessageScreen";

import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as StudentProvider } from "./src/context/StudentContext";
import { Provider as NoticesProvider } from './src/context/NoticesContext';
import { setNavigator } from "./src/navigationRef";

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  Login: LoginScreen,
  mainFlow: createStackNavigator({
    Home: HomeScreen,
    Absence: AbsenceScreen,
    Essays: EssaysScreen,
    Schedule: ScheduleScreen,
    Calendar: CalendarScreen,
    Notices: NoticesScreen,
    Message: MessageScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <StudentProvider>
        <NoticesProvider>
        <StatusBar backgroundColor='#195967' />
        <App
          ref={(navigator) => {
            setNavigator(navigator);
          }}
        />
        </NoticesProvider>
      </StudentProvider>
    </AuthProvider>
  );
};
