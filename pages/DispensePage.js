import React, { Component } from 'react';
import {StyleSheet, Image, Animated } from 'react-native';
import Modal from 'react-native-modal';

//react-native components
import {Button, Header, Text, Container, Content, Picker, Icon, View, Left, Right, Body, Title} from 'native-base';

//our components
import OurHeader from '../components/Header';

// styles
import {PageStyle} from '../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
const styles = StyleSheet.flatten(PageStyle);

class DispensePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
             selected: undefined,
             submitted: false,
             animation: new Animated.Value(1),
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
              duration : 400,
              useNativeDriver: true,
            }).start();
          })                       
     }

    onValueChange(value) {
        this.setState({
            selected: value,
        });
    }

    handleSubmit(event){
        this.setState({
            selected: undefined,
            submitted: true,
        })
        this.fadeOut();
    }

    toggleModal = () => {
        setModalVisible(!isModalVisible);
    }

    render() {
        const { route, navigation } = this.props;
        const itemName = route.params.itemName;
        return (
            <Container>
                <OurHeader title = {itemName} navigation = {this.props} backbutton = {true}/>
                <Content contentContainerStyle={styles.imageContainer} scrollEnabled='false'>
                    <View style = {{flex: 2, width: '100%'}}>
                        {itemName === "Rice Dispenser" &&
                            <Image source={require('../assets/rice2.jpeg')} style = {styles.image}/> 
                        }
                        {itemName === "Cereal Dispenser" &&
                            <Image source={require('../assets/cereal2.jpg')} style = {styles.image}/>
                        }
                        {itemName === "Bean Dispenser" &&
                            <Image source={require('../assets/beans2.jpg')} style = {styles.image}/>
                        }
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
                            <Picker.Item label="0.5 oz" value="key0" />
                            <Picker.Item label="1.0 oz" value="key1" />
                            <Picker.Item label="1.5 oz" value="key2" />
                            <Picker.Item label="2.0 oz" value="key3" />
                            <Picker.Item label="2.5 oz" value="key4" />
                            <Picker.Item label="3.0 oz" value="key5" />
                            <Picker.Item label="3.5 oz" value="key6" />
                            <Picker.Item label="4.0 oz" value="key7" />
                            
                        </Picker>
                    </SafeAreaView>

                    <View style = {{flex:1, width: '100%', backgroundColor: 'transparent', alignItems: 'center'}}>
                        <Animated.View style={{opacity: this.state.animation}}>
                            <Button rounded info onPress={() => this.handleSubmit()} style = {styles.dispenseButton}>
                                <Text>
                                    Dispense
                                </Text>
                            </Button>
                        </Animated.View>
                    </View>
                    
                </Content>
            </Container>
        )
    }
}

export default DispensePage
