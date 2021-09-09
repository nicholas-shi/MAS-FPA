import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import SignInView from './pages/Sign-In/index';
import HomeView from './pages/Home/index';
import TaskView from './pages/TaskView/index';

const Routes = (props) => (
   <Router>
      <Scene key = "root">
         <Scene key = "signin" component = {SignInView} title = "Sign-In" initial = {true} />
         <Scene key = "home" component = {HomeView} title = "Home" />
         <Scene key = "taskview" component = {TaskView} title = "TaskView" />
      </Scene>
   </Router>
)
export default Routes