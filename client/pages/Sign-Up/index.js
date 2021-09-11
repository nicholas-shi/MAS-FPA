import React from "react";
import { Actions } from "react-native-router-flux";
import {
  TouchableOpacity,
  TextInput,
  View,
  Text,
  StyleSheet,
} from "react-native";

// import registerUser from '../../components/api/registerUser';
const registerUser = require('../../components/api/registerUser');
const SignUpView = () => {
  const successResponse = (data) => {
    // TODO: Store authentication token
    console.log("Success register " + data);
    Actions.signin();
  }

  const errorResponse = (data) => {
    // TODO: Display error message
    console.log("Failed response " + data);
  }

  const goToSignIn = () => {
    console.log([username, password, fName, lName]);
    registerUser(username, password, fName, lName, successResponse, errorResponse);
  };

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [fName, setFName] = React.useState("");
  const [lName, setLName] = React.useState("");

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
        onChangeText={setFName}
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
        onChangeText={setLName}
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
        onChangeText={setUsername}
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
        onChangeText={setPassword}
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
