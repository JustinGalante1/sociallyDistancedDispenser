import React, { Component } from 'react';
import {StyleSheet, Image } from 'react-native';

//react-native components
import {Button, Text, Container, Content, Picker, Icon, View } from 'native-base';

//our components
import Header from '../components/Header';

// styles
import {PageStyle} from '../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
const styles = StyleSheet.flatten(PageStyle);

class DispensePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
             selected: undefined,
        }
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }


    render() {
        const { route, navigation } = this.props;
        const itemName = route.params.itemName;
        return (
            <Container>
                <Header title = {itemName} navigation = {this.props} backbutton = {true}/>
                <Content contentContainerStyle={styles.imageContainer} scrollEnabled='false'>
                    <View style = {{flex: 2, width: '100%', backgroundColor: 'green'}}>
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
                    
                    <SafeAreaView style = {{flex: .5, width: '100%', backgroundColor: 'transparent', alignItems: 'center'}}>
                        
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            placeholder="Select your SIM"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            style={{ width: undefined }}
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                            >
                            <Picker.Item label="Wallet" value="key0" />
                            <Picker.Item label="ATM Card" value="key1" />
                            <Picker.Item label="Debit Card" value="key2" />
                            <Picker.Item label="Credit Card" value="key3" />
                            <Picker.Item label="Net Banking" value="key4" />
                        </Picker>
                    </SafeAreaView>

                    <View style = {{flex:1, width: '100%', backgroundColor: 'transparent', alignItems: 'center'}}>
                        <Button rounded info onPress={() => navigation.navigate('Home')} style = {styles.dispenseButton}>
                            <Text>
                                Dispense
                            </Text>
                        </Button>
                    </View>
                    
                </Content>
            </Container>
        )
    }
}

export default DispensePage
