import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Actions } from "react-native-router-flux";

const HomeView = () => {
  const goToTaskView = () => {
    Actions.taskview();
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#83AF98" }}>
      <Text style={styles.header}> Welcome to Tasks </Text>
      <View style={{ paddingBottom: 30 }}>
        <Text style={styles.overview}>
          Overview:
          {"\n"}
          {"\n"}
          3 Tasks Due Today
          {"\n"}
          8/20 Tasks Completed
        </Text>
      </View>
      <View
        style={{
          flex: 0.5,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={goToTaskView}>
          <Text style={styles.tasks}>CS 1331: 3/5 Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToTaskView}>
          <Text style={styles.tasks}>CS 2050: 3/5 Tasks</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    color: "#fff",
    paddingTop: 30,
    paddingBottom: 50,
    fontSize: 32,
  },
  overview: {
    backgroundColor: "#C8C8A9",
    color: "#fff",
    alignSelf: "center",
    fontSize: 28,
    padding: 25,
  },
  tasks: {
    backgroundColor: "#F9CDAD",
    color: "#fff",
    alignSelf: "center",
    fontSize: 28,
    padding: 25,
  },
});

export default HomeView;
