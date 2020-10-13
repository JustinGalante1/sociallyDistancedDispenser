import React from 'react';
import {StyleSheet, View } from 'react-native';
import {Text} from 'native-base'

import {HeaderStyle} from '../styles/styles';
const styles = StyleSheet.flatten(HeaderStyle);

const Header= (props) => {
    
    return(
        <View style={styles.container}>
            <Text style = {styles.title}> {props.title}</Text>
        </View>
    )

}



export default Header