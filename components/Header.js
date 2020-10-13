import React from 'react';
import {StyleSheet, View } from 'react-native';
import {Text} from 'native-base'

const Header= (props) => {
    
    return(
        <View style={styles.container}>
            <Text style = {styles.title}> {props.title}</Text>
        </View>
    )


}

const styles = StyleSheet.create(
    {
        container:{
            height: 80,
            width: "100%",
            backgroundColor: '#588DF3',
            borderWidth: 1,
            justifyContent: 'flex-end',
        },
        title: {
            color: '#F3F3F3',
            fontSize: 18,
            fontWeight: '900',
            alignSelf: 'center',
        }
    }
)

export default Header