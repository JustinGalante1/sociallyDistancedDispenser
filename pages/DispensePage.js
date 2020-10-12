import React, { Component } from 'react'

//react-native components
import {Button, Text} from 'native-base'

class DispensePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        const { navigation } = this.props;
        return (
           <Button onPress={() => navigation.navigate('Home')}>
               <Text>
                   Me
               </Text>
           </Button>
        )
    }
}

export default DispensePage
