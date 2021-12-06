import React, { useState, useEffect, useContext, useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Header from "../components/Header";
import NoticeCard from "../components/NoticeCard";
import NoticesListPlaceholder from "../components/NoticesListPlaceholder";
import TypeFilterButton from "../components/TypeFilterButton";
import DateFilterButton from "../components/DateFilterButton";
import MyDateRangePicker from "../components/MyDateRangePicker";

import { Context as NoticesContext } from "../context/NoticesContext";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const NoticesScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [openDataPicker, setOpenDataPicker] = useState(false);
  const { state, getMessages, getPinnedMessage, clearFilters } = useContext(NoticesContext);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getPinnedMessage();
    getMessages(state.params);
    wait(250).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    getPinnedMessage();
    getMessages(state.params);
    const listener = navigation.addListener("didFocus", () => {
      getPinnedMessage();
      getMessages(state.params);
    });
    return () => {
      listener.remove();
    };
  }, [state.params, state.messages]);

  return (
    <>
      <View style={styles.containerBackground}>
        <Header title='Mural de avisos' />
        <MyDateRangePicker
          open={openDataPicker}
          setOpen={() => setOpenDataPicker(false)}
        />
        <View style={styles.filtros}>
          <TypeFilterButton />
          <DateFilterButton onPress={() => setOpenDataPicker(true)} />
          <TouchableOpacity
            onPress={() => {
              clearFilters();
            }}>
            <MaterialCommunityIcons
              name='filter-remove-outline'
              size={35}
              color='white'
            />
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <FlatList
            data={state.messages}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <NoticeCard cardProps={item} />}
            onRefresh={onRefresh}
            refreshing={refreshing}
            ListEmptyComponent={<NoticesListPlaceholder />}
          />
        </View>
      </View>
    </>
  );
};

NoticesScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  containerBackground: {
    backgroundColor: "#3192b3",
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    marginTop: 15,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  filtros: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default NoticesScreen;
