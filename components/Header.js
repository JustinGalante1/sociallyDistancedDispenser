import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';

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
            height: 60,
            width: "100%",
            borderColor: 'white',
            backgroundColor: '#123456',
            borderWidth: 1,
        },

        title: {
            color: '#F3F3F3',
            fontSize: 28,
            fontWeight: '900',
            textTransform: 'uppercase'

        }
    }

)

export default Header