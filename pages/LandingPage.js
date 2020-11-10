import React, { Component } from 'react';
import {StyleSheet, ImageBackground } from 'react-native';

//react-native components
import {Button, Text, Container, Content } from 'native-base';

//our components
import Header from '../components/Header';

// styles
import {PageStyle} from '../styles/styles';
const styles = StyleSheet.flatten(PageStyle);

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
                <Header title = "sociallyDistancedDispenser" navigation = {this.props} backbutton = {false}/>
                <Content contentContainerStyle={styles.container} scrollEnabled='false'>
                    <ImageBackground source={require('../assets/LandingBackground.png')} style = {styles.backgroundImageCenter}>
                        <Button rounded info onPress={() => navigation.navigate('Devices')} style = {styles.button}>
                            <Text>
                                Search For Dispensers
                            </Text>
                        </Button>
                    </ImageBackground>
                </Content>
            </Container>
        )
    }
}
export default LandingPage

