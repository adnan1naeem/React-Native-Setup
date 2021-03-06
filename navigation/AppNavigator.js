import React from 'react';
import { createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SettingsScreen from '../screens/SettingsScreen';


export default createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: { screen: MainTabNavigator },
  settings: { screen: SettingsScreen }
});