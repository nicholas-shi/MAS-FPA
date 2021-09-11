import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActionSheetIOS } from 'react-native';
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
            <DropDownPicker items={taskListNames} defaultIndex={0} onChangeItem={e => changeTaskList(items.label)}/>
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
    },
    background: {
        backgroundColor: "#83AF98"
    },
    taskItem: {
        textAlign: "left",
        color: "#F9CDAD",
    },
    addBtn: {
        textAlign: "center",
        color: "#C8C8A9"
    },
    taskCategory: {
        textAlign: "center",
        color: "#FFFFFF"
    }
});