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
        },
        back_button: {
            alignSelf: 'flex-start',
            color: '#F3F3F3',
            fontSize: 18,
            fontWeight: '500',
            backgroundColor: '#588DF3',
            position: 'absolute',
            height: 35,
            width: 35,
        },
    }
)

export const LandingPageStyle = StyleSheet.create(
    {
        container:{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flex: 1,
            //backgroundColor: 'green',
        },
        deviceListContent:{
            marginTop: 20,
            display: 'flex',
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
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
            //backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            display: 'flex',
            width: '100%',
        },
        contentContainer: {
            display: 'flex',
            flex: 1,
            //backgroundColor: 'purple',
            width: '100%',
        },
        card: {
            width: '90%',
        }
    }
)