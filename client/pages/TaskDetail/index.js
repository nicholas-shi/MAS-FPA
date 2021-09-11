import React from 'react';
import { StyleSheet, View } from 'react-native';
// import { Actions } from 'react-native-router-flux';

export default TaskDetailView = () => {
    // const returnToTaskPage = () => {
    //     Actions.taskview();
    // }
    
    const getTaskName = () => {
        return "Sample Task Name";
    }

    const getTaskDetail = () => {
        return "Sample Task Detail";
    }

    return (
        <View style={stlyes.header}>
            <Text> { getTaskName() } </Text>
            <View>
                
            </View>
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
    },
    completBtn: {
        textAlign: "center",
        backgroundColor: "#FC9D9A",
        color: "#fff"
    }
});