import React, { useState } from "react";
import { View, Text, Button, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function Imagepicker() {
  const [image, setImage] = useState("");

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    status !== "granted"
      ? Alert.alert("Permission Denied", "Allow gallery access")
      : ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1,
        }).then((result) => {
          !result.canceled && setImage(result.assets[0].uri);
        });
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    status !== "granted"
      ? Alert.alert("Permission Denied", "Allow camera access")
      : ImagePicker.launchCameraAsync({
          allowsEditing: true,
          quality: 1,
        }).then((result) => {
          !result.canceled && setImage(result.assets[0].uri);
        });
  };

  return (
    <View style = {{margin : 10 , padding : 10 , marginTop : "80%" , gap : 10}} >
      <Text style = {{fontSize : 20 , fontWeight : "bold" , textAlign : "center"}} >Image Picker Example</Text>
      <Button title="Pick Image from Gallery" onPress={pickImage} />
      <Button title="Take Photo from Camera" onPress={takePhoto} />
      {image && <Image source={{ uri: image }} />}
    </View>
  );
}