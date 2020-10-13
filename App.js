import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, StyleSheet, Text, View } from 'react-native'; // Platform, 
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
    const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>; //{statusbar}
    return (
      

      <NavigationContainer>
        {statusbar}
        <Header title = "Fuckmedaddy" />
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
    backgroundColor: '#000000',
  },
  statusbar: {
    backgroundColor: '#FFCE00',
    height: 20
  }
});
