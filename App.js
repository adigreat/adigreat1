import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native'; 
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import  WelcomeScreen from './screens/WelcomeScreen';
import RequestScreen from './screens/RequestScreen';
import allDonateScreen from './scrrens/allDonateScreen'

export default function App() {
  return (
    <AppContainer/>
  );
}
const TabNavigator=createBottomTabNavigator({
  Donate:{screen:allDonateScreen},
  Requests:{screen:RequestScreen},


},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routeName=navigation.state.routeName;
      if(routeName==='Donate'){
        return(
          <Image
          source={require("./assets/allRequests.png")}
          style={{width:20,height:20}}/>
        )
         
      }
     else if(routeName==='Requests'){
        return(
          <Image
          source={require("./assets/requestBook.png")}
          style={{width:20,height:20}}/>
        )
         
      }
    }
  })
}
) 
const switchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
 BottomTab:{screen:TabNavigator},

})
const AppContainer = createAppContainer(switchNavigator)
