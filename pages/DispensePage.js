import React, { Component } from 'react';
import {StyleSheet, Image } from 'react-native';

//react-native components
import {Button, Text, Container, Content } from 'native-base';

//our components
import Header from '../components/Header';

// styles
import {PageStyle} from '../styles/styles';
const styles = StyleSheet.flatten(PageStyle);

class DispensePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        const { route, navigation } = this.props;
        const itemName = route.params.itemName;
        return (
            <Container>
                <Header title = {itemName} navigation = {this.props} backbutton = {true}/>
                <Content contentContainerStyle={styles.container} scrollEnabled='false'>
                    {itemName === "Rice Dispenser" &&
                        <Image source={require('../assets/rice.png')} style = {styles.image}/>
                    }
                    {itemName === "Cereal Dispenser" &&
                        <Image source={require('../assets/cereal.png')} style = {styles.image}/>
                    }
                    <Button rounded info onPress={() => navigation.navigate('Home')} style = {styles.button}>
                        <Text>
                            Dispense
                        </Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default DispensePage
