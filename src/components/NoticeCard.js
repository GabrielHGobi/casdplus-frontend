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
    backgroundColor: "#F9F9F4",
    borderRadius: 5,
    height: 80,
    marginHorizontal: 20,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    borderRadius: 10,
  },
  textContainer: {
    alignItems: "center",
    position: "absolute",
    width: "75%",
    marginTop: 15,
    marginLeft: 0,
    // bottom: 0,
  },
  infoContainer:{
    // alignItems: "flex-start",
    position: "absolute",
    justifyContent: "space-between",
    width:"100%",
    flexDirection: "row",
    bottom: 18,
    
  },
  tipoContainer: {
    alignItems: "center",
    backgroundColor:"#D1FEBC",
    marginLeft: 16,
    width: 86,
    borderRadius: 5,
  },
  tipo :{
    fontSize: 12,
  },
  dateContainer: {
    alignItems: "center",
    backgroundColor:"#FFC5B2",
    marginRight: 16,
    width: 86,
    borderRadius: 5,
  },
  date :{
    fontSize: 12,
  },
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
