import React, { useState } from "react";
import { View, Text, TextInput, Alert, Button } from "react-native";

export default function Task2() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSignUp = () => {
    username && password && confirm
      ? password === confirm
        ? Alert.alert("Success", "Account Created")
        : Alert.alert("Error", "Passwords do not match")
      : Alert.alert("Error", "All fields required");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f9f9f9" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>Sign Up</Text>

      <Text style={{ alignSelf: "flex-start", marginLeft: 40, fontSize: 16 }}>Username</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        style={{
          width: "80%",
          borderWidth: 1,
          borderColor: "#aaa",
          borderRadius: 8,
          padding: 10,
          marginBottom: 15,
          backgroundColor: "#fff"
        }}
      />

      <Text style={{ alignSelf: "flex-start", marginLeft: 40, fontSize: 16 }}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          width: "80%",
          borderWidth: 1,
          borderColor: "#aaa",
          borderRadius: 8,
          padding: 10,
          marginBottom: 15,
          backgroundColor: "#fff"
        }}
      />

      <Text style={{ alignSelf: "flex-start", marginLeft: 40, fontSize: 16 }}>Confirm Password</Text>
      <TextInput
        value={confirm}
        onChangeText={setConfirm}
        secureTextEntry
        style={{
          width: "80%",
          borderWidth: 1,
          borderColor: "#aaa",
          borderRadius: 8,
          padding: 10,
          marginBottom: 20,
          backgroundColor: "#fff"
        }}
      />

      <View style={{ width: "80%", borderRadius: 8, overflow: "hidden" }}>
        <Button title="Sign Up" onPress={handleSignUp} color="#2196F3" />
      </View>
    </View>
  );
}
