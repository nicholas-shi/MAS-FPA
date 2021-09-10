import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Actions } from "react-native-router-flux";

const SignInView = () => {
  const goToHome = () => {
    Actions.home();
  };
  const goToSignUp = () => {
    Actions.signup();
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#83AF98" }}>
      <Text style={styles.header}> Sign In </Text>
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
          marginBottom: 20,
        }}
        placeholderTextColor="#DAD5D5"
        backgroundColor="#fff"
        placeholder="Type your username"
      ></TextInput>
      <Text style={{ color: "#fff", marginLeft: 30 }}> Password </Text>
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
        onPress={goToHome}
        style={{
          color: "#000",
          marginTop: 20,
          marginLeft: 150,
          backgroundColor: "#F9CDAD",
          width: 59,
          padding: 10,
        }}
      >
        <Text>Login</Text>
      </TouchableOpacity>

      <Text style={{ color: "#fff", marginLeft: 175, marginTop: 10 }}>or</Text>

      <TouchableOpacity
        onPress={goToSignUp}
        style={{
          color: "#000",
          marginTop: 10,
          marginLeft: 150,
          backgroundColor: "#F9CDAD",
          width: 65,
          padding: 10,
        }}
      >
        <Text>Signup</Text>
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

export default SignInView;
