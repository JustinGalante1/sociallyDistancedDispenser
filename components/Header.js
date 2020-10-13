import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';

const Header= (props) => {
    
    return(
        <View style={styles.container}>
            <Text style = {styles.headerTitle}> {props.title}</Text>
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

        headerTitle: {
            color: '#F3F3F3',
            fontSize: 24,
            fontWeight: '900',
            alignSelf: 'center',
      
        }
    }

)

export default Header