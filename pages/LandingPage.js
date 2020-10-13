import React, { Component } from 'react';
import {StyleSheet, Image } from 'react-native';

//react-native components
import {Button, Text, Container, Content } from 'native-base';

//our components
import Header from '../components/Header';

class LandingPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Header title = "sociallyDistancedDispenser"/>
                <Content contentContainerStyle={styles.container} scrollEnabled='false'>
                <Image source={require('../assets/HomeBackground.png')} style = {styles.backgroundImage}/>
                    <Button rounded info onPress={() => navigation.navigate('Devices')} style = {styles.button}>
                        <Text>
                            Search For Dispensers
                        </Text>
                    </Button>
                </Content>
            </Container>
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
            shadowColor: 'grey',
            shadowOpacity: 50,
            shadowOffset: {width: 0, height: 4.5},
            position: 'absolute',
            height: 56,
        },
        backgroundImage:{
            backgroundColor: 'transparent',
            flex: 1,
            opacity: 0.75
        }
    }
)

export default LandingPage

