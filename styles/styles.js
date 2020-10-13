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
        },
        button: {
            alignSelf: 'center',
            shadowColor: 'grey',
            shadowOpacity: 50,
            shadowOffset: {width: 0, height: 4.5},
            backgroundColor: '#588DF3',
            position: 'absolute',
            height: 45,
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

            position: 'absolute',
            height: 56,
        },
        backgroundImage: {
            backgroundColor: 'transparent',
            flex: 1,
            opacity: 0.75,
            top: 11,
        },
        animationContainer: {
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
        },
    }
)