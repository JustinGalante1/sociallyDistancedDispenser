import React, { Component } from 'react';
import {StyleSheet, Animated, NativeModules, NativeEventEmitter } from 'react-native';
import Modal from 'react-native-modal';

//react-native components
import {Button, Header, Text, Container, Content, Picker, Icon, View, Left, Right, Body, Title} from 'native-base';

//our components
import OurHeader from '../components/Header';

// styles
import {PageStyle} from '../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
const styles = StyleSheet.flatten(PageStyle);

//bluetooth
import { stringToBytes } from 'convert-string';
import BleManager from 'react-native-ble-manager';
const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

class DispensePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: undefined,
            error: undefined,
            animation: new Animated.Value(1),
            imageOpacity: new Animated.Value(0),
            isModalVisible: false,
            service: undefined,
            characteristic: undefined,
            itemId: '',
            characteristic: '',
            service: '',
            modalMessage: '',
        }
    }
    fadeOut() {
        Animated.timing(this.state.animation, {
            toValue : 0,
            timing : 400,
            useNativeDriver: true,
        }).start(()=>{
            Animated.timing(this.state.animation,{
                toValue : 1,
                duration : 200,
                useNativeDriver: true,
            }).start();
        })                       
     }

    onValueChange(value) {
        this.setState({
            selected: value,
        });
    }

    onLoad = () => {
        Animated.timing(this.state.imageOpacity, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
        }).start();
    }

    handleSubmit(event){
        if(this.state.selected === undefined){
            this.setState({
                error: "Select an Amount First!"
            })
        }
        else{
            this.setState({
                error: undefined
            })
            this.fadeOut();
            const data = stringToBytes(this.state.selected);
            BleManager.write(this.state.itemId, this.state.service, this.state.characteristic, data).then(() => {
                console.log("Wrote " + this.state.selected + " as: " + data);
                this.setState({
                    modalMessage: `Dispensing: ${this.state.selected} oz`
                }, ()=> {
                    setTimeout(()=>{
                        this.setState({modalMessage: "Error Dispensing"});
                    }, 7500);
                    setTimeout(()=>{
                        this.setModalVisible(false);
                        BleManager.write(this.state.itemId, this.state.service, this.state.characteristic, stringToBytes("z")).then(()=>{
                            console.log("sent timeout message");
                        })
                        .catch(()=>{
                            console.log("error sending timeout message");
                        })
                    }, 9500)});
            }).catch((error) => {
                console.log(error)
            });
        }
    }

    finishedDispensing(){
        this.setState({
            selected: undefined,
        })
    }

    handleSubmitAndToggleModal = (event) => {
        this.handleSubmit(event);
        if(!(this.state.selected === undefined)){
            this.toggleModal();
        }
    }

    setModalVisible = (visible) => {
        this.setState({ isModalVisible : visible });
    }

    toggleModal = () => {
        this.setModalVisible(!this.state.isModalVisible);
    }

    bin2string(array){
        var result = "";
        for(var i = 0; i < array.length; ++i){
            result+= (String.fromCharCode(array[i]));
        }
        return result;
    }

    disconnectFromDevice(){
        BleManager.disconnect(this.state.itemId)
            .then(()=>{
            })
            .catch((error) =>{
                console.log(error);
            });
    }

    async componentDidMount(){
        BleManager.start({ showAlert: false, restoreIdentifierKey: "fuck you" });
        const { route, navigation } = this.props;
        const itemName = route.params.itemName;
        const itemId = route.params.itemId;
        this.setState({itemId: itemId});
        BleManager.connect(itemId).then(()=>{
            BleManager.retrieveServices(itemId).then((info)=>{
                this.setState({
                    characteristic: info.characteristics[0].characteristic,
                    service: info.characteristics[0].service,
                }, () => {
                    BleManager.startNotification(itemId, this.state.service, this.state.characteristic).then(()=>{
                        bleManagerEmitter.addListener(
                            "BleManagerDidUpdateValueForCharacteristic",
                            readResponse = ({ value, itemId, characteristic, service }) => {
                                const data = this.bin2string(value);
                                this.finishedDispensing();
                                this.setState({modalMessage: data});
                                setTimeout(()=>this.setModalVisible(false), 2000);
                                console.log(`Received ${data} for characteristic ${characteristic}`);
                            }
                        );
                    })
                    .catch((error)=>{
                        console.log(error);
                    })
                });
            })
            .catch((error)=>{
                console.log(error);
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    componentWillUnmount(){
        bleManagerEmitter.removeListener("BleManagerDidUpdateValueForCharacteristic", readResponse);
    }

    render() {
        const { route, navigation } = this.props;
        const itemName = route.params.itemName;
    
        var images = [
            require('../assets/rice2.jpeg'),
            require('../assets/cereal2.jpg'),
            require('../assets/beans2.jpg'),
            require('../assets/chickpeas.jpg'),
        ]

        if(itemName === "Rice Dispenser"){
            var index = 0;    
        }
        else if(itemName === "Cereal Dispenser"){
            var index = 1;
        }
        else if(itemName === "Chickpea Dispenser"){
            var index = 3;
        }
        else{
            var index = 2;
        }
        return (
            <Container>
                <OurHeader title = {itemName} navigation = {this.props} backbutton = {true} action={this.disconnectFromDevice.bind(this)}/>
                <Content contentContainerStyle={styles.imageContainer} scrollEnabled='false'>
                    <View style = {{flex: 2, width: '100%'}}>
                        <Animated.Image source={images[index]} onLoad = {this.onLoad} style = {{
                                    backgroundColor: 'transparent',
                                    flex: 1,
                                    width: '100%',
                                    position: 'relative', opacity: this.state.imageOpacity}}/>
                    </View>
                    <SafeAreaView style = {{flex: .5, width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center'}}>
                        <Picker
                            headerStyle = {{backgroundColor: '#588df3'}}
                            headerTitleStyle = {{ color: '#fff', fontWeight: '500'}}
                            headerBackButtonTextStyle = {{ color: '#fff'}}
                            renderHeader={backAction =>
                                <Header style={{ backgroundColor: "#588df3" }}>
                                  <Left>
                                    <Button transparent onPress={backAction}>
                                      <Icon name="arrow-back" style={{ marginLeft: 5, color: "#fff" }} />
                                    </Button>
                                  </Left>
                                  <Body style={{ flex: 3 }}>
                                    <Title style={{ color: "#fff" }}>Select Amount</Title>
                                  </Body>
                                  <Right />
                                </Header>}
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" style={{color: '#588DF3'}}/>}
                            placeholder="Select Amount (oz)"
                            placeholderStyle={{ color: '#588DF3'}}
                            style={{ width: undefined, backgroundColor: '#f7f7f7' }}
                            selectedValue={this.state.selected}
                            textStyle={{ color: '#588DF3' }}
                            itemTextStyle={{color: '#588DF3'}}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Picker.Item label="1.0 oz" value="1" />
                            <Picker.Item label="2.0 oz" value="2" />
                            <Picker.Item label="3.0 oz" value="3" />
                            <Picker.Item label="4.0 oz" value="4" />
                            
                        </Picker>
                    </SafeAreaView>

                    <View style = {{flex:1, width: '100%', backgroundColor: 'transparent', alignItems: 'center'}}>
                        <Animated.View style={{opacity: this.state.animation}}>
                            <Button rounded info onPress={this.handleSubmitAndToggleModal} style = {styles.dispenseButton}>
                                <Text>
                                    Dispense
                                </Text>
                            </Button>
                            
                            <Modal 
                                isVisible = {this.state.isModalVisible}>
                                <View style = {styles.modalContent}>
                                    <Text style = {styles.modalContentTitle}>
                                        {this.state.modalMessage}
                                    </Text>
                                </View>
                            </Modal>
                        </Animated.View>
                        {this.state.error && 
                            <Animated.View style={{opacity: this.state.animation}}>
                                <Text style={styles.errorText}>
                                    {"\n"}
                                    {this.state.error}
                                </Text>
                            </Animated.View>
                        }
                    </View>
                    
                </Content>
            </Container>
        )
    }
}

export default DispensePage
