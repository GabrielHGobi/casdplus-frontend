import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import AbsenceScreen from "./src/screens/AbsenceScreen";
import EssaysScreen from "./src/screens/EssaysScreen";
import ScheduleScreen from "./src/screens/ScheduleScreen";
import NoticesScreen from "./src/screens/NoticesScreen";
import CalendarScreen from "./src/screens/CalendarScreen";

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
    Absence: AbsenceScreen,
    Essays: EssaysScreen,
    Schedule: ScheduleScreen,
    Calendar: CalendarScreen,
    Notices: NoticesScreen,
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default createAppContainer(navigator);
