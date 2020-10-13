import React, { Component } from 'react';
import {StyleSheet, View } from 'react-native';

//react-native components
import {Button, Text, Card, Container, Content } from 'native-base';

//our components
import Header from '../components/Header';

class DevicesPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        const { navigation } = this.props;
        return (
           <Button onPress={() => navigation.navigate('Dispense')}>
               <Text>
                   Devices:
               </Text>
           </Button>
        )
    }
}

export default DevicesPage
