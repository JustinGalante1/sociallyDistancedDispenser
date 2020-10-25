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
            error: undefined,
            animation: new Animated.Value(1),
            imageOpacity: new Animated.Value(0),
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
                selected: undefined,
                error: undefined,
            })
            this.fadeOut();
        }
    }

    toggleModal = () => {
        setModalVisible(!isModalVisible);
    }

    render() {
        const { route, navigation } = this.props;
        const itemName = route.params.itemName;

        var images = [
            require('../assets/rice2.jpeg'),
            require('../assets/cereal2.jpg'),
            require('../assets/beans2.jpg')
        ]

        if(itemName === "Rice Dispenser"){
            var index = 0;    
        }
        else if(itemName === "Cereal Dispenser"){
            var index = 1;
        }
        else{
            var index = 2;
        }
        return (
            <Container>
                <OurHeader title = {itemName} navigation = {this.props} backbutton = {true}/>
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
