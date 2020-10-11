import React, { Component } from 'react'

//react-native components
import {Button, Text} from 'native-base'

class LandingPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        const { navigation } = this.props;
        return (
           <Button onPress={() => navigation.navigate('Devices')}>
               <Text>
                   Search For Dispensers
               </Text>
           </Button>
        )
    }
}

export default LandingPage

