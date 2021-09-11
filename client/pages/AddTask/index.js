import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export const AddTaskView = (props) => {

    const addTask = () => {
        // TODO: Add in call to API to add in new task
        Actions.taskview();
    }

    const returnToTaskView = () => {
        Actions.taskview();
    }

    return (
        <View>
            <Text>Folder</Text>
            <TextInput></TextInput>
            <Text>Name</Text>
            <TextInput></TextInput>
            <Text>Notes</Text>
            <TextInput></TextInput>
            <Button title="Add Task" onPress={addTask} color="#C8C8A9"/>
            <Button title="Cancel Add" onPress={} color="#FC9D9A"/>
        </View>
    )
}

const styles = StyleSheet.create({
    textLabel: {
        color: "#fff"
    },
    textInput: {
        color: "#ffff",
        backgroundColor: "#F9CDAD"
    }
});