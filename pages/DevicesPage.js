import React, { Component } from 'react';
import {StyleSheet, View, ImageBackground, NativeModules, NativeEventEmitter} from 'react-native';

//native baes components
import { Button, Card, Container, Content, Text, CardItem, Icon, Right } from 'native-base';

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
            peripherals: [
                {
                    name: "Rice Dispenser",
                },
                {
                    name: "Bean Dispenser",
                },
                {
                    name: "Cereal Dispenser",
                },
            ],
            managerOn: false,
        }
    }

    componentDidMount() {
        bleManagerEmitter.addListener(
            "BleManagerDidUpdateState", (()=>{this.setState({managerOn: true})})
        );

        BleManager.start({ showAlert: false, restoreIdentifierKey: "fuck you" }).then(()=>{
            const { loading } = this.state;
            if(loading){
                this.animation.play();
            }
            this.scanForDevices();
            BleManager.checkState();
        })
        
        this.handlerDiscover = bleManagerEmitter.addListener(
            'BleManagerDiscoverPeripheral',
            this.handleDiscoverPeripheral
        );
    
        this.handlerStop = bleManagerEmitter.addListener(
            'BleManagerStopScan',
            this.handleStopScan
        );
    }

    componentWillUnmount(){
        bleManagerEmitter.removeListener('BleManagerDiscoverPeripheral', this.handleDiscoverPeripheral);
        bleManagerEmitter.removeListener('BleManagerStopScan', this.handleStopScan);
    }

    scanForDevices(animation) {
        const initState = {
            loading: true,
            peripherals: [
                {
                    name: "Rice Dispenser",
                },
                {
                    name: "Bean Dispenser",
                },
                {
                    name: "Cereal Dispenser",
                },
            ],
        }
        this.setState(initState);
        BleManager.scan(["FFE0"], 3, false);
    }

    handleDiscoverPeripheral = (peripheral) => {
        const oldperipherals = this.state.peripherals;
        if (peripheral.name) {
            const peripherals = oldperipherals.concat({id: peripheral.id, name: peripheral.name});
            this.setState({ peripherals });
        }
    };
        
    handleStopScan = () => {
        const oldperipherals = this.state.peripherals;
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
                                    {this.state.peripherals.map((item, index) =>{
                                        return(
                                            <Card key={index} style = {styles.card}>
                                                <CardItem button onPress={()=>navigation.navigate('Dispense', {
                                                    itemName: item.name, itemId: item.id
                                                })}>
                                                    <Text style = {styles.buttonText}>
                                                        {item.name}
                                                    </Text>
                                                    <Right style = {{flex: 1}}>
                                                        <Icon name="arrow-forward" style={{color: '#588DF3'}}/>
                                                    </Right>
                                                </CardItem>
                                            </Card>
                                        )
                                    })}
                                    <View style={{top: 10}}>
                                        <Button rounded info onPress={()=> this.scanForDevices(this.animation)} style = {styles.button}>
                                            <Text>
                                                Refresh
                                            </Text>
                                        </Button>
                                    </View>
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
