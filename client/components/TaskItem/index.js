import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default TaskItem = ({ taskName, taskDetail, taskKey }) => {
    const gotoTaskDetails = () => {
        Actions.taskviewdetail();
    }    

    return <View>
        <TouchableOpacity style={styles.taskItem} onPress={gotoTaskDetails}>
            <Text style={taskItem}>
                { taskName }
            </Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    taskItem: {
        backgroundColor: "#F9CDAD",
        textAlign: "left",
        display: "flex",
        fontSize: 28
    }
});