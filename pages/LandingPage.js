import React, { Component } from 'react';
import {StyleSheet, View } from 'react-native';

//react-native components
import {Button, Text, Card, Container, Content } from 'native-base';

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
                <Content contentContainerStyle={styles.container}>
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
        }
    }
)

export default LandingPage

