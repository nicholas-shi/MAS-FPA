import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const SignInView = () => {
   const goToHome = () => {
      Actions.home()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToHome}>
         <Text>Login</Text>
      </TouchableOpacity>
   )
}
export default SignInView