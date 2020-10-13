import 'react-native-gesture-handler';
import React from 'react';
import { render } from 'react-dom';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native'; 
import Header from './components/Header'

//pages
import LandingPage from './pages/LandingPage';
import DevicesPage from './pages/DevicesPage';
import DispensePage from './pages/DispensePage';

const Stack = createStackNavigator();

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      
    }
  }

  render(){
    return (
      <NavigationContainer>
        <Header title = "sociallyDistancedDispenser"/>
        <Stack.Navigator screenOptions = {{
          headerShown: false
        }}>
          <Stack.Screen name = "Home" component = {LandingPage}/>
          <Stack.Screen name = "Devices" component = {DevicesPage}/>
          <Stack.Screen name = "Dispense" component= {DispensePage}/>
        </Stack.Navigator>
      </NavigationContainer>

    );
  }
}
