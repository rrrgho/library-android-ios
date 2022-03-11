import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native'
import Wrapper from '../../../components/atoms/Wrapper'
import {Auth} from '../../../config/Auth'
import LoginForm from '../../organisms/LoginForm'
import { colorDark, colorPrimary } from '../../utils/color'
import MainLogo from '../../../assets/images/mainlogo.jpeg'
import Textfield from '../../../components/atoms/Textfield'
import MainButton from '../../../components/atoms/MainButton'
import { POST } from '../../../config/Axios'

const LoginPage = ({navigation}) => {
    
    useEffect(async () => {
        await AsyncStorage.clear();
        navigation.addListener('beforeRemove', (e) => {
    
            // Prevent default behavior of leaving the screen
            e.preventDefault();
        })
            
    }, [])
    return (
        <>
            <View style={styles.loginContainer}>
                <LoginForm />
            </View>
            <View style={styles.loginFooter}>
                <Text style={{color:colorDark}}>Don't have account? </Text>
                <Text style={{color:colorPrimary}}>Contact administrator</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        flex:1,
        backgroundColor:'#fff',
    },
    loginFooter:{
        height:60,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        borderTopWidth:1,
        borderTopColor:"#eee"
    },
    logoBox:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
    },
    logo:{
        width:150,
        height:150
    },
    logoText:{
        marginTop:20,
        fontSize:20,
        color:colorPrimary,
        fontWeight:'bold',
    },
    logoSubText:{
        marginTop:10,
        fontSize:15,
        color:colorDark,
        fontWeight:'bold',
    },
    inputBox:{
        height:400,
        backgroundColor:'#fff'
    },
})

export default LoginPage
