import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, StatusBar, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import DropDownPicker from 'react-native-dropdown-picker';

import TaskList from '../../components/TaskList/index';

export default TaskView = (props) => {
    const [taskList, setTaskList] = useState({});
    const [taskListNames, setTaskListNames] = useState();
    const [displayList, setDisplayList] = useState([]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    const goToAddTaskView = () => {
        Actions.addtaskview();
    }

    const changeTaskList = (listName) => {
        setDisplayList(taskList[listName]);
    }

    const fetchData = () => {
        setTaskList({
            "General List": [
                {title: "Item 1A", description: "Description 1A", id:"1"}, 
                {title: "Item 2A", description: "Description 2A", id:"2"}, 
                {title: "Item 3A", description: "Description 3A", id:"3"}, 
                {title: "Item 4A", description: "Description 4A", id:"4"}
            ],
            "CS 1331": [
                {title: "Item 1B", description: "Description 1B", id:"1"}, 
                {title: "Item 2B", description: "Description 2B", id:"2"}, 
                {title: "Item 3B", description: "Description 3B", id:"3"}, 
                {title: "Item 4B", description: "Description 4B", id:"4"}
            ]
        });
        setTaskListNames([
            {
                label: "General List",
                value: "General List"
            },
            {
                label: "CS 1331",
                value: "CS 1331"
            }
        ]);
        setDisplayList([
            {title: "Item 1A", description: "Description 1", id:"1"}, 
            {title: "Item 2A", description: "Description 2", id:"2"}, 
            {title: "Item 3A", description: "Description 3", id:"3"}, 
            {title: "Item 4A", description: "Description 4", id:"4"}
        ]);
    }


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Task List</Text>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={taskListNames}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setTaskListNames}
                    onChangeValue={e => setDisplayList(taskList[e])}
                    defaultIndex={0}
                />
                <TouchableOpacity style={styles.addBtn} onPress={goToAddTaskView}>
                    <Text style={{ textAlign: 'center', color: '#ffff' }}>Add Tasks</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.subTitle}>List of Tasks</Text>
                <TaskList taskData={displayList} />
            </View>
        </View>
    )
}

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
        color: "#ffff",
        textAlign: "center",
        margin: 10
    },
    subTitle: {
        fontSize: 28,
        color: "#ffff",
        textAlign: "center",
    },
    header: {
        color: "#fff",
        paddingTop: 30,
        paddingBottom: 20,
        fontSize: 32
    },
    background: {
        backgroundColor: "#83AF98"
    },
    taskItem: {
        textAlign: "left",
        backgroundColor: "#F9CDAD",
        color: "#fff"
    },
    addBtn: {
        textAlign: "center",
        backgroundColor: "#C8C8A9",
        color: "#fff",
        fontSize: 20,
        padding: 15,
        marginTop: 10
    },
    taskCategory: {
        textAlign: "center",
        color: "#FFFFFF"
    }
})