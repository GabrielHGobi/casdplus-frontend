import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const NoticeCard = ({ cardProps, navigate }) => {
  return (
    <TouchableOpacity onPress={navigate} style={styles.container}>
      {/* <Image source={cardProps.img} style={styles.image} /> */}
      {/* <View style={styles.blackOpacity} /> */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{cardProps.title}</Text>
        {/* <Text style={styles.subtitle}>{cardProps.subtitle}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginHorizontal: 20,
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 25,
  },
  blackOpacity: {
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    borderRadius: 10,
  },
  textContainer: {
    position: "absolute",
    width: "60%",
    marginLeft: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 10,
    paddingTop: 16,
    paddingLeft: 15,
  },
  title: {
    color: "white",
    fontFamily: "MontserratBold",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: 18,
  },
  subtitle: {
    color: "white",
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 16,
  },
});

export default NoticeCard;
