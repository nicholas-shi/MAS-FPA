import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import CheckBox from 'react-native-check-box';
import { Actions } from 'react-native-router-flux';

// export default TaskItem = ({ taskName, taskDetail, taskKey }) => {
//     const gotoTaskDetails = () => {
//         Actions.taskviewdetail();
//     }    

//     return <View>
//         <TouchableOpacity style={styles.taskItem} onPress={gotoTaskDetails}>
//             <Text style={taskItem}>
//                 { taskName }
//             </Text>
//         </TouchableOpacity>
//     </View>
// }

export default TaskItem = ({ taskName, taskDetail, taskKey }) => {
    const [toggleCheckbox, setToggleCheckbox] = React.useState(false);
    return (
        <View>
            <TouchableOpacity style={styles.taskItem} onPress={e => setToggleCheckbox(!toggleCheckbox)} >
                <CheckBox disabled={false} isChecked={toggleCheckbox} onClick={e => console.log(e) }/>
                <Text> { taskName } </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    taskItem: {
        backgroundColor: "#F9CDAD",
        textAlign: "left",
        display: "flex",
        fontSize: 28,
        padding: 15,
        marginBottom: 10,
        flexDirection: 'row'
    }
});