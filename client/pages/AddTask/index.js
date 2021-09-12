import React from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity,
    Touchable,
    StatusBar,
} from "react-native";
import { Actions } from "react-native-router-flux";

export default AddTaskView = (props) => {
    const addTask = () => {
        // TODO: Add in call to API to add in new task
        Actions.taskview();
    };

    const returnToTaskView = () => {
        Actions.taskview();
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Add New Tasks</Text>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.textLabel}>Folder</Text>
                <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#ffff"
                    backgroundColor="#F9CDAD"
                    placeholder="Choose a folder"
                ></TextInput>
                <Text style={styles.textLabel}>Name</Text>
                <TextInput
                    style={styles.textInput}
                    placeholderTextColor="#ffff"
                    backgroundColor="#F9CDAD"
                    placeholder="Choose a name"
                ></TextInput>
                <Text style={styles.textLabel}>Notes</Text>
                <TextInput
                    style={{...styles.textInput, ...{ height: '30%'}}}
                    placeholderTextColor="#ffff"
                    backgroundColor="#F9CDAD"
                    placeholder="Task notes"
                ></TextInput>

                <TouchableOpacity onPress={addTask}>
                    <Text style={styles.addBtn}>Add Task</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={returnToTaskView}>
                    <Text style={styles.removeBtn}>Cancel Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "#83AF98",
        padding: 10,
        fontSize: 28,
    },
    innerContainer: {
        width: "85%",
        marginLeft: "7.5%",
    },
    header: {
        color: "#fff",
        paddingTop: 30,
        paddingBottom: 20,
        fontSize: 32,
    },
    title: {
        fontSize: 32,
        color: "#ffff",
        textAlign: "center",
        margin: 10,
    },
    textLabel: {
        fontSize: 20,
        color: "#ffff",
        marginTop: 10
    },
    textInput: {
        color: "#ffff",
        backgroundColor: "#F9CDAD",
        fontSize: 28,
    },
    addBtn: {
        backgroundColor: "#C8C8A9",
        color: "#ffff",
        maxWidth: "40%",
        padding: 15,
        textAlign: "center",
        marginTop: 10,
        marginLeft: 90
    },
    removeBtn: {
        backgroundColor: "#FC9D9A",
        color: "#ffff",
        maxWidth: "40%",
        padding: 15,
        textAlign: "center",
        marginTop: 10,
        marginLeft: 90
    },
});
