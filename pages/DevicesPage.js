import React, { Component } from 'react';
import {StyleSheet, View, ImageBackground } from 'react-native';

//native baes components
import { Card, Container, Content, Text, CardItem, Icon, Right } from 'native-base';

//animated loader
import LottieView from "lottie-react-native";

//our components
import Header from '../components/Header';

// styles
import {PageStyle} from '../styles/styles';
const styles = StyleSheet.flatten(PageStyle);

class DevicesPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            items: [
                {
                    title: "Rice Dispenser",
                },
                {
                    title: "Bean Dispenser",
                },
                {
                    title: "Cereal Dispenser",
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
                <Header title = "sociallyDistancedDispenser" navigation = {this.props} backbutton={true}/>
                    <Content contentContainerStyle = {styles.deviceListContent} scrollEnabled='false'>
                            {!loading &&
                                <ImageBackground source={require('../assets/LandingBackground.png')} style = {styles.backgroundImageTop}>
                                    {this.state.items.map((item, index) =>{
                                        return(
                                            <Card key={index} style = {styles.card}>
                                                <CardItem button onPress={()=>navigation.navigate('Dispense', {
                                                    itemName: item.title,
                                                })}>
                                                    <Text style = {styles.buttonText}>
                                                        {item.title}
                                                    </Text>
                                                    <Right style = {{flex: 1}}>
                                                        <Icon name="arrow-forward" style={{color: '#588DF3'}}/>
                                                    </Right>
                                                </CardItem>
                                            </Card>
                                        )
                                    })}
                                </ImageBackground>       
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
