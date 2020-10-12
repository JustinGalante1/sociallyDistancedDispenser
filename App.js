import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

//pages
import LandingPage from './pages/LandingPage';
import DevicesPage from './pages/DevicesPage';
import DispensePage from './pages/DispensePage';

const Stack = createStackNavigator();

export default class App extends React.Component{
  render(){
    return (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name = "Home" component = {LandingPage}/>
            <Stack.Screen name = "Devices" component = {DevicesPage}/>
            <Stack.Screen name = "Dispense" component= {DispensePage}/>
          </Stack.Navigator>
      </NavigationContainer>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
