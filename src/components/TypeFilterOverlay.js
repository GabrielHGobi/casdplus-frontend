import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Context as NoticesContext } from "../context/NoticesContext";
import { Overlay } from "react-native-elements";
import TypeFilterView from "./TypeFilterView";

const TypeFilterOverlay = ({ onBackdropPressFunction }) => {
  const { setLabelID } = useContext(NoticesContext);
  return (
    <>
      <Overlay
        isVisible={true}
        onBackdropPress={onBackdropPressFunction}
        overlayStyle={styles.overlay}>
        <Text style={styles.text}>Selecione o tipo para filtrar:</Text>
        <View style={styles.gridContainer}>
          <View style={styles.lineContainer}>
            <TouchableOpacity
              onPress={() => {
                setLabelID({ label_id: 1 });
              }}>
              <TypeFilterView label_id={1}></TypeFilterView>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setLabelID({ label_id: 2 });
              }}>
              <TypeFilterView label_id={2}></TypeFilterView>
            </TouchableOpacity>
          </View>

          <View style={styles.lineContainer}>
            <TouchableOpacity
              onPress={() => {
                setLabelID({ label_id: 3 });
              }}>
              <TypeFilterView label_id={3}></TypeFilterView>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setLabelID({ label_id: 4 });
              }}>
              <TypeFilterView label_id={4}></TypeFilterView>
            </TouchableOpacity>
          </View>

          <View style={styles.lineContainer}>
            <TouchableOpacity
              onPress={() => {
                setLabelID({ label_id: 5 });
              }}>
              <TypeFilterView label_id={5}></TypeFilterView>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setLabelID({ label_id: 6 });
              }}>
              <TypeFilterView label_id={6}></TypeFilterView>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    width: 300,
    height: 300,
    borderRadius: 20,
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  text: {
    alignSelf: "center",
    fontFamily: "MontserratSemiBold",
    fontSize: 16,
  },
  gridContainer: {
    flex: 1,
    justifyContent: "space-around",
    marginHorizontal: 40,
  },
  lineContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default TypeFilterOverlay;
