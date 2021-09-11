import React from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from "react-native";
import TaskItem from '../TaskItem/index';

export default TaskList = (props) => {
  let taskData = props.taskData;
  return (
    <View style={style.container}>
      {taskData.map(e => {
        return <TaskItem taskName={e.title} taskDetail={e.description} taskKey={e.id} />
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#83AF98",
    padding: 10,
    fontSize: 28
  },
  title: {
    fontSize: 32,
  },
});
