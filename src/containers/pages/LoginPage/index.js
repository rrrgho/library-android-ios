import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Auth} from '../../../config/Auth'
import LoginForm from '../../organisms/LoginForm'
import { colorDark, colorPrimary } from '../../utils/color'

const LoginPage = ({navigation}) => {
    useEffect( async () => {
        if(await Auth()){
            navigation.navigate("ProfilePage")
        }        
    },[])

    useEffect(
        () =>
          navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
          }),
        []
      );
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
        backgroundColor:'#fff'
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
})

export default LoginPage
