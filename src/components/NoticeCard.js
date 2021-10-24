import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const NoticeCard = ({ cardProps, navigate }) => {
  return (
    <TouchableOpacity onPress={navigate} style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{cardProps.title}</Text>
      </View>
      <View style = {styles.infoContainer}> 
        <View style={styles.tipoContainer}>
          <Text style={styles.tipo}>{cardProps.tipo}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{cardProps.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    height: 100,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    // paddingBottom: 0,
    // marginBottom: 0,
  },
  image: {
    width: "100%",
    borderRadius: 10,
  },
  textContainer: {
    alignItems: "center",

    backgroundColor:"yellow",
    position: "absolute",
    width: "75%",
    top: 15,
    marginLeft: 0,
    // bottom: 0,
  },
  infoContainer:{
    backgroundColor:"yellow",
    bottom: 0,
    alignItems: "flex-start",
    justifyContent: "center",
    width:"100%",
  },
  tipoContainer: {
    alignItems: "center",
    backgroundColor:"#F9F9F4",
    marginLeft: 16,
    width: 86,
    borderRadius: 5,
  },
  tipo :{},
  dateContainer: {
    alignItems: "center",
    backgroundColor:"#FFC5B2",
    marginRight: 16,
    width: 86,
    borderRadius: 5,
  },
  date :{},
  title: {
    color: "black",
    fontFamily: "MontserratBold",
    fontWeight: "normal",
    fontSize: 14,
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
