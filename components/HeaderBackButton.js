import React from 'react';
import {StyleSheet, View } from 'react-native';
import {Text, Button} from 'native-base'

import {HeaderStyle} from '../styles/styles';
const styles = StyleSheet.flatten(HeaderStyle);

const Header= (props) => {
    const { navigation } = props.navigation;
    return(

        <View style={styles.container}>
            <Button title="Go back" onPress={() => navigation.goBack()} style = {styles.back_button}>
                <Text>
                    {"<"}
                </Text>
            </Button>
            <Text style = {styles.title}> {props.title}</Text>
        </View>
    )

}


export default Header