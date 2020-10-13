import React, { Component } from 'react'

//react-native components
import {Button, Text} from 'native-base'

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
