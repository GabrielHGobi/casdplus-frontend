import React, { useState } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Card } from 'react-native-paper';

const AgendaCard = ({ name, description }) => {
    const [showDescription, setShowDescription] = useState(false);
    
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}} onPress={() => setShowDescription(!showDescription)}>
        <Card>
          <Card.Content>
            <View
              style={styles.card}>
              <Text style={styles.cardText}>{name}</Text>
              {showDescription ? <Text  style={styles.cardDescription}>{description}</Text> : null}
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: 20,
    marginBottom: 15,
  },
  title: {
    fontFamily: "MontserratBold",
    fontWeight: "normal",
    fontSize: 18,
    color: "white",
    marginBottom: 30,
  },
  card: {
    justifyContent: 'center'
  },
  cardText: {
    fontFamily: 'MontserratRegular',
    fontSize: 20
  },
  cardDescription: {
    fontFamily: 'MontserratRegular',
    fontSize: 12
  }
});

export default AgendaCard;