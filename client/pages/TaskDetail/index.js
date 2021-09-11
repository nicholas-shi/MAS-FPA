import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default TaskDetailView = () => {
    const returnToTaskPage = () => {
        Actions.taskview();
    }
    
    const getTaskName = () => {
        return "Sample Task Name";
    }

    const getTaskDetail = () => {
        return "Sample Task Detail";
    }

    const completeTask = () => {
        // API Call to perform task completion
    }

    return (
        <View style={stlyes.header}>
            <Text> { getTaskName() } </Text>
            <Text> { getTaskDetail() } </Text>
            <Button title="Mark Task as Completed" onPress={completeTask} color="#FC9D9A"/>
        </View>
    )
}

const stlyes = StyleSheet.create({
    header: {
        textAlign: "center",
        color: "#fff",
        paddingTop: 30,
        paddingBottom: 50,
        fontSize: 32,
    },
    taskDetailBox: {
        textAlign: "left",
        backgroundColor: "#F9CDAD",
        color: "#fff"
    },
    completBtn: {
        textAlign: "center",
        backgroundColor: "#FC9D9A",
        color: "#fff"
    }
});