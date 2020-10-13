import {StyleSheet } from 'react-native';

export const HeaderStyle = StyleSheet.create(
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

export const LandingPageStyle = StyleSheet.create(
    {
        container:{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flex: 1,
            backgroundColor: 'green',
        },
        button: {
            alignSelf: 'center',
            shadowColor: 'grey',
            shadowOpacity: 50,
            shadowOffset: {width: 0, height: 4.5},
            backgroundColor: '#588DF3',
        
        },

        buttonText: {
            position: 'absolute',
            height: 56,
            left: 0,
            right: 0,
            textAlign: 'center',
            color: '#FFFFFF',
            
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 24.0667,
            
            
            alignSelf: 'center',
            textAlign: 'center',

            display: 'flex',

        },
    }
)