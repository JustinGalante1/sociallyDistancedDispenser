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
            borderWidth: 0,
            justifyContent: 'flex-end',
            shadowColor: 'grey',
            shadowOpacity: 100,
            shadowOffset: {width: 0, height: 4.5},
        },
        title: {
            color: '#F3F3F3',
            fontSize: 18,
            fontWeight: '500',
            alignSelf: 'center',
            
        }
    }
)

export default Header