import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import DropDownPicker from 'react-native-dropdown-picker';

import TaskList from '../../components/TaskList/index';

export default TaskView = (props) => {
    
    const [taskList, setTaskList] = useState({});
    const [taskListNames, setTaskListNames] = useState({});
    const [displayList, setDisplayList] = useState({});

    const returnToHome = () => {
        Actions.home();
    }

    const goToTaskViewDetail = ({taskName, taskDetail }) => {
        Actions.taskviewdetail();
    }

    const goToAddTaskView = () => {
        Actions.addtaskview();
    }

    const changeTaskList = (listName) => {
        setDisplayList(taskList[listName]);
    }

    const fetchData = () => {
        setTaskList({
            "General List": [
                {title: "Item 1", description: "Description 1", id="1"}, 
                {title: "Item 2", description: "Description 2", id="2"}, 
                {title: "Item 3", description: "Description 3", id="3"}, 
                {title: "Item 4", description: "Description 4", id="4"}
            ],
            "CS 1331": [
                {title: "Item 1", description: "Description 1", id="1"}, 
                {title: "Item 2", description: "Description 2", id="2"}, 
                {title: "Item 3", description: "Description 3", id="3"}, 
                {title: "Item 4", description: "Description 4", id="4"}
            ]
        });
        setTaskListNames([
            {
                "label": "General List",
                "value": "General List"
            },
            {
                "label": "CS 1331",
                "value": "CS 1331"
            }
        ]);
        setDisplayList([
            "Item 1", 
            "Item 2", 
            "Item 3",
            "Item 4"
        ]);
    }

    return (
        <View>
            <View style={styles.header}>
                <DropDownPicker items={taskListNames} defaultIndex={0} onChangeItem={e => changeTaskList(items.label)}/>
                <Button style={styles.addBtn} onPress={goToAddTaskView} title="Add Tasks" color="#C8C8A9" />
            </View>
            <TaskList taskData={displayList} />
        </View>
    )

    useEffect([], e => {
        fetchData();    // asynchronous API call
    });
}

const styles = StyleSheet.create({
    header: {
        textAlign: "center",
        color: "#fff",
        paddingTop: 30,
        paddingBottom: 50,
        fontSize: 32,
        display: 'flex'
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
        color: "#fff"
    },
    taskCategory: {
        textAlign: "center",
        color: "#FFFFFF"
    }
});