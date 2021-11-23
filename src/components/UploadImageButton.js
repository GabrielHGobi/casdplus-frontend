import React, { useState, useEffect } from "react";
import { StyleSheet, Platform } from "react-native";
import { Button, Icon } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";

const UploadImageButton = ({ setImage }) => {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert(
            "Desculpe, precisamos do acesso às mídias de seu celular para o envio de justificativas."
          );
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <Button
      title='Upload'
      buttonStyle={styles.button}
      titleStyle={styles.title}
      onPress={pickImage}
      icon={<Icon name='upload' type='entypo' size={15} color='#3192b3' />}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "#f9b342",
    borderWidth: 2,
  },
  title: {
    color: "#3192b3",
    fontFamily: "MontserratBold",
    fontSize: 14,
    padding: 5,
  },
});

export default UploadImageButton;
