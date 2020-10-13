import React, { Component } from 'react';
import {StyleSheet, Image } from 'react-native';

//react-native components
import {Button, Text, Container, Content } from 'native-base';

//our components
import Header from '../components/Header';

// styles
import {LandingPageStyle} from '../styles/styles';
const styles = StyleSheet.flatten(LandingPageStyle);

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
                <Image source={require('../assets/LandingBackground.png')} style = {styles.backgroundImage}/>
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
export default LandingPage

