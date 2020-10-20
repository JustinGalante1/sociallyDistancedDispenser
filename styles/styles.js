import {StyleSheet } from 'react-native';

import background from '../assets/LandingBackground.png';

export const HeaderStyle = StyleSheet.create(
    {
        container:{
            height: 80,
            width: "100%",
            backgroundColor: '#588DF3',
            justifyContent: 'flex-end',
            shadowColor: 'grey',
            shadowOpacity: 100,
            shadowOffset: {width: 0, height: 4.5},
        },
        title: {
            marginBottom: 5,
            color: '#F3F3F3',
            fontSize: 18,
            fontWeight: '500',
            alignSelf: 'center',
        },
        back_button: {
            alignSelf: 'flex-start', // the button will be on the left side
            justifyContent: 'flex-start', // the text in the button will be on the left side
            alignItems: 'flex-end', // the text in the button will be on the bottom side
            backgroundColor: 'transparent',
            backgroundColor: 'transparent',
            position: 'absolute',
            height: '100%',
            width: '100%',
        },
        button_text: {
            color: '#F3F3F3',
            fontSize: 18,
            fontWeight: '500',
        }
    }
)

export const PageStyle = StyleSheet.create(
    {
        container:{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flex: 1,
            //backgroundColor: 'green',
        },
        deviceListContent:{
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
        dispenseButton: {
            alignSelf: 'center',
            shadowColor: 'grey',
            shadowOpacity: 50,
            shadowOffset: {width: 0, height: 4.5},
            backgroundColor: '#588DF3',
            position: 'relative',
            height: 45,
        },
        backgroundImageCenter: {
            backgroundColor: 'transparent',
            flex: 1,
            opacity: 0.75,
            top: 11,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        backgroundImageTop: {
            backgroundColor: 'transparent',
            flex: 1,
            opacity: 0.75,
            top: 11,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'flex-start',
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
            shadowColor: 'grey',
            shadowOpacity: 50,
            shadowOffset: {width: 0, height: 4.5},
        },
        buttonText: {
            color: '#588DF3',
            fontSize: 18,
            fontWeight: '500',
        },
        image: {
            backgroundColor: 'transparent',
            flex: 1,
            width: 350,
            position: 'relative',
            marginTop: 10,
        },
        imageContainer: {
            justifyContent: 'flex-start',
            alignItems: 'center',
        }
        
    }
)