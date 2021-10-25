import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const NoticeCard = ({ cardProps, navigate }) => {
  return (
    <TouchableOpacity onPress={navigate} style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{cardProps.title}</Text>
      </View>
      <View style = {styles.infoContainer}>
        <View style={styles.authorContainer}>
          <Text style={styles.author}>{cardProps.author.first_name}</Text>
        </View>
        <View style={styles.tipoContainer}>
          <Text style={styles.tipo}>Material</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{cardProps.createdAt}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F4",
    borderRadius: 5,
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
    paddingHorizontal: 35,
    marginVertical: 15,
  },
  infoContainer:{
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 18,
    
  },
  tipoContainer: {
    alignItems: "center",
    backgroundColor:"#D1FEBC",
    flex:1,
    borderRadius: 5,
    marginHorizontal:20,
  },
  tipo :{
    fontSize: 12,
  },
  dateContainer: {
    flex:1,
    alignItems: "center",
    marginHorizontal:20,
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
  author:{
    fontSize: 12,
    fontFamily: "MontserratSemiBold",
  },
  authorContainer:{
    flex:1,
    alignItems: "center",
    marginHorizontal:20,
  },
});

export default NoticeCard;
