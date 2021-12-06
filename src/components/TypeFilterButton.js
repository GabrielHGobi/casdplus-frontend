import React, { useState, useContext } from "react";
import { Context as NoticesContext } from "../context/NoticesContext";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import TypeFilterView from "./TypeFilterView";
import TypeFilterOverlay from "./TypeFilterOverlay";

const TypeFilterButton = () => {
  const { state } = useContext(NoticesContext);
  const [pressedType, setPressedType] = useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setPressedType(true);
        }}>
        <TypeFilterView label_id={state.params.label_id} />
      </TouchableOpacity>

      {pressedType ? (
        <TypeFilterOverlay
          onBackdropPressFunction={() => setPressedType(false)}
        />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({});

export default TypeFilterButton;
