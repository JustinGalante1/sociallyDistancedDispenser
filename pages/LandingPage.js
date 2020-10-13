import React, { Component } from 'react'
import {StyleSheet, View } from 'react-native';

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
            <View style = {styles.container}>
                <Button rounded info onPress={() => navigation.navigate('Devices')} style = {styles.button}>
                    <Text>
                        Search For Dispensers
                    </Text>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        container:{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flex: 1,
        },
        button:{
            alignSelf: 'center',
        }
    }
)

export default LandingPage

