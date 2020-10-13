import React, { Component } from 'react';
import {StyleSheet } from 'react-native';

//react-native components
import {Button, Text, Card, Container, Content } from 'native-base';

//our components
import Header from '../components/Header';

// styles
import {LandingPageStyle} from '../styles/styles';
const styles = StyleSheet.flatten(LandingPageStyle);


class DevicesPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
        }
    }

    handlePress = (event) => {
        const { navigation } = this.props;
        navigation.navigate('Dispense');
    }

    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Header title = "sociallyDistancedDispenser"/>
                <Content contentContainerStyle={styles.container} scrollEnabled='false'>
                <Button rounded info onPress={() => navigation.navigate('Dispense')} style = {styles.button}>
                    <Text>
                        Devices:
                    </Text>
                </Button>
                </Content>
            </Container>
           
        )
    }
}

export default DevicesPage
