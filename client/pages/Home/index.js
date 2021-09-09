import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const HomeView = () => {
   const goToTaskView = () => {
      Actions.taskview()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToTaskView}>
         <Text>This is HOME!</Text>
      </TouchableOpacity>
   )
}
export default HomeView