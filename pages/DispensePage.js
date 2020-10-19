import React, { Component } from 'react';
import {StyleSheet } from 'react-native';

//react-native components
import {Button, Text, Card, Container, Content } from 'native-base';

//our components
import HeaderBackButton from '../components/HeaderBackButton';

// styles
import {LandingPageStyle} from '../styles/styles';
const styles = StyleSheet.flatten(LandingPageStyle);

class DispensePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <HeaderBackButton title = "sociallyDistancedDispenser" navigation = {this.props}/>
                
                <Content contentContainerStyle={styles.container} scrollEnabled='false'>
                <Button rounded info onPress={() => navigation.navigate('Home')} style = {styles.button}>
                    <Text>
                        Me
                    </Text>
                </Button>
                </Content>
            </Container>
        )
    }
}

export default DispensePage
