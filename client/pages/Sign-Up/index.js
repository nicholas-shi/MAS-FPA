import React from "react";
import { Actions } from "react-native-router-flux";
import {
  TouchableOpacity,
  TextInput,
  View,
  Text,
  StyleSheet,
} from "react-native";

const SignUpView = () => {
  const goToSignIn = () => {
    Actions.signin();
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#83AF98" }}>
      <Text style={styles.header}> Sign Up </Text>
      <Text style={{ color: "#fff", marginLeft: 30, marginTop: 20 }}>
        {" "}
        First Name{" "}
      </Text>
      <TextInput
        style={{
          borderWidth: 6,
          borderColor: "#fff",
          width: 300,
          marginLeft: 30,
          marginBottom: 20,
        }}
        placeholderTextColor="#DAD5D5"
        backgroundColor="#fff"
        placeholder="Type your first name"
      ></TextInput>
      <Text style={{ color: "#fff", marginLeft: 30 }}> Last Name </Text>
      <TextInput
        style={{
          borderWidth: 6,
          borderColor: "#fff",
          width: 300,
          marginLeft: 30,
        }}
        placeholderTextColor="#DAD5D5"
        backgroundColor="#fff"
        placeholder="Type your last name"
      ></TextInput>
      <Text style={{ color: "#fff", marginLeft: 30, marginTop: 20 }}>
        {" "}
        Username{" "}
      </Text>
      <TextInput
        style={{
          borderWidth: 6,
          borderColor: "#fff",
          width: 300,
          marginLeft: 30,
        }}
        placeholderTextColor="#DAD5D5"
        backgroundColor="#fff"
        placeholder="Type your username"
      ></TextInput>
      <Text style={{ color: "#fff", marginLeft: 30, marginTop: 20 }}>
        {" "}
        Password{" "}
      </Text>
      <TextInput
        style={{
          borderWidth: 6,
          borderColor: "#fff",
          width: 300,
          marginLeft: 30,
        }}
        placeholderTextColor="#DAD5D5"
        backgroundColor="#fff"
        placeholder="Type your password"
      ></TextInput>
      <TouchableOpacity
        onPress={goToSignIn}
        style={{
          color: "#000",
          marginTop: 30,
          marginLeft: 150,
          backgroundColor: "#F9CDAD",
          width: 75,
          padding: 10,
        }}
      >
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    color: "#fff",
    paddingTop: 80,
    fontSize: 32,
  },
});

export default SignUpView;
