import React from "react";
import { RefreshControl, SafeAreaView, ScrollView, View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const CalendarScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />  }
        >
          <Header title='Calendário do ano' />
          <Text>Pull down to see RefreshControl indicator</Text>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3192b3',
    paddingHorizontal: 30,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#3192b3',
    alignItems: 'center',
  },
});

CalendarScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
export default CalendarScreen;
