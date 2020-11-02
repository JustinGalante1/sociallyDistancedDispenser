import React, { Component } from 'react';
import {StyleSheet, View, ImageBackground, NativeModules, NativeEventEmitter} from 'react-native';

//native baes components
import { Card, Container, Content, Text, CardItem, Icon, Right } from 'native-base';

//animated loader
import LottieView from "lottie-react-native";

//our components
import Header from '../components/Header';

// styles
import {PageStyle} from '../styles/styles';
const styles = StyleSheet.flatten(PageStyle);

//bluetooth
import BleManager from 'react-native-ble-manager';
const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

class DevicesPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
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
            ],
            peripherals: [],
        }
    }

    componentDidMount() {
        BleManager.start({ showAlert: false })
  
        this.handlerDiscover = bleManagerEmitter.addListener(
            'BleManagerDiscoverPeripheral',
            this.handleDiscoverPeripheral
        );
    
        this.handlerStop = bleManagerEmitter.addListener(
            'BleManagerStopScan',
            this.handleStopScan
        );
    
        this.scanForDevices();
        const { loading } = this.state;
        if(loading){
            console.log("playing");
            this.animation.play();
        }
    }

    componentWillUnmount(){
        bleManagerEmitter.removeListener('BleManagerDiscoverPeripheral', this.handleDiscoverPeripheral);
        bleManagerEmitter.removeListener('BleManagerStopScan', this.handleStopScan);
    }

    scanForDevices() {
        console.log("starting scan");
        this.setState({loading: true})
        BleManager.scan([], 3);
    }

    handleDiscoverPeripheral = (peripheral) => {
        console.log("peripheral found");
        const oldperipherals = this.state.peripherals;
        
        if (peripheral.name) {
            const peripherals = oldperipherals.concat({id: peripheral.id, name: peripheral.name});
            this.setState({ peripherals });
        }
    };
        
    handleStopScan = () => {
        const oldperipherals = this.state.peripherals;
        const peripherals = oldperipherals.concat({id: "5", name: "joe"});
        this.setState({ peripherals });
        console.log('Scan is stopped. Devices: ', this.state.peripherals);
        this.setState({loading: false});
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
