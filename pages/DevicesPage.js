import React, { Component } from 'react';
import {StyleSheet, View, FlatList } from 'react-native';

//native baes components
import { Card, Container, Content, Text, CardItem, Body } from 'native-base';

//animated loader
import LottieView from "lottie-react-native";

//our components
import HeaderBackButton from '../components/HeaderBackButton';
import Header from '../components/Header';

// styles
import {LandingPageStyle} from '../styles/styles';
const styles = StyleSheet.flatten(LandingPageStyle);

class DevicesPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            items: [
                {
                    title: "Rice Disepnser",
                    desc: "fuck me in teh ass",
                },
                {
                    title: "Bean Dispenser",
                    desc: "This nigga eatin beans",
                },
                {
                    title: "Cereal Dispenser",
                    desc: "cummy in my tummy",
                },
            ]
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
                <HeaderBackButton title = "sociallyDistancedDispenser" navigation = {this.props}/>
                    <Content contentContainerStyle = {styles.deviceListContent}>
                        {!loading &&
                                this.state.items.map((item, index) =>{
                                    return(
                                        <Card key={index} style = {styles.card}>
                                            <CardItem button onPress={()=>navigation.navigate('Dispense')}>
                                                <Text>
                                                    {item.title}{"\n"}
                                                    {item.desc}
                                                </Text>
                                            </CardItem>
                                        </Card>
                                    )
                                })       
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

{/*
                                <Button rounded info onPress={() => navigation.navigate('Dispense')} style = {styles.button}>
                                    <Text>
                                        Devices:
                                    </Text>
                                </Button>
                                */}


export default DevicesPage
