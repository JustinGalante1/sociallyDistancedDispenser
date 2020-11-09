import React from 'react';
import {StyleSheet, View } from 'react-native';
import {Text, Button, Icon, Left} from 'native-base'

import {HeaderStyle} from '../styles/styles';
const styles = StyleSheet.flatten(HeaderStyle);

const Header= (props) => {
    
    const { navigation } = props.navigation;
    const backbutton = props.backbutton;
    const myProps = props;
    
    handlePress = () => {
        navigation.goBack();
        if(myProps.action !== undefined){
            myProps.action();
        }        
    }
    return(
        
        <View style={styles.container}>
            {backbutton && 
                (
                    <Button title="Go back" onPress={() => this.handlePress()} style = {styles.back_button}>
                        <Icon name="arrow-back" style={{color: 'white'}}/>
                    </Button>
                )
            }
            <Text style = {styles.title}> {props.title}</Text>
        </View>
        
    )
}


export default Header