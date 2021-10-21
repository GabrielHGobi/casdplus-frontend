import React from "react";
import { StatusBar } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import AbsenceScreen from "./src/screens/AbsenceScreen";
import EssaysScreen from "./src/screens/EssaysScreen";
import ScheduleScreen from "./src/screens/ScheduleScreen";
import NoticesScreen from "./src/screens/NoticesScreen";
import CalendarScreen from "./src/screens/CalendarScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";

const switchNavigator = createSwitchNavigator({
  Login: LoginScreen,
  mainFlow: createStackNavigator({
    Home: HomeScreen,
    Absence: AbsenceScreen,
    Essays: EssaysScreen,
    Schedule: ScheduleScreen,
    Calendar: CalendarScreen,
    Notices: NoticesScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <StatusBar backgroundColor='#195967' />
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
