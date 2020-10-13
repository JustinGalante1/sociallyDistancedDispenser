import React, { Component } from 'react';
import {StyleSheet, View } from 'react-native';

//react-native components
import {Button, Text, Card, Container, Content } from 'native-base';

//animated loader
import LottieView from "lottie-react-native";

//our components
import Header from '../components/Header';

// styles
import {LandingPageStyle} from '../styles/styles';
const styles = StyleSheet.flatten(LandingPageStyle);

class DevicesPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
        }
    }

    componentDidMount() {
        const { loading } = this.state;
        if(loading){
            this.animation.play();
        }
    }

    handlePress = (event) => {
        const { navigation } = this.props;
        navigation.navigate('Dispense');
    }

    render() {
        const { navigation } = this.props;
        const { loading } = this.state;
        return (
            <Container>
                <Header title = "sociallyDistancedDispenser"/>
                <Content contentContainerStyle={styles.container} scrollEnabled='false'>
                    {!loading && 
                        <Button rounded info onPress={() => navigation.navigate('Dispense')} style = {styles.button}>
                            <Text>
                                Devices:
                            </Text>
                        </Button>
                    }
                    {loading &&
                        <View style={styles.animationContainer}>
                            <LottieView ref={animation => { this.animation = animation }} style={{width:450, height:300}} source={require('../assets/loading.json')}/>
                        </View>
                    } 
                </Content>
            </Container>
        )
    }
}

export default DevicesPage
