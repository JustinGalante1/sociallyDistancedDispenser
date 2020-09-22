import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';

//react-native components
import {Button} from 'native-base'

export default class App extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>press me to spit food out</Text>
        <Button>
          <Text>
            PRESS ME
          </Text>
        </Button>
        <StatusBar style="auto" />
      </View>
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
