import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';


import WelcomeScreen from './screens/WelcomeScreen';
import AppDrawerNavigator from './components/AppDrawerNavigator'
import AppTabNavigator from './components/AppTabNavigator'


export default function App() {
  return (
    <ApppContainer/>
  );
}

const switchNavigator = createStitchNavigator({
  WelcomeScreens:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator},
  BottomTab:{screen: AppTabNavigator},
})

const AppContainer = creatAppContainer(switchNavigator);
  