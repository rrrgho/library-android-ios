import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import MainButton from '../../../components/atoms/MainButton'
import Textfield from '../../../components/atoms/Textfield'
import Wrapper from '../../../components/atoms/Wrapper'
import { colorDark, colorPrimary } from '../../utils/color'
import MainLogo from '../../../assets/images/mainlogo.jpeg'

const LoginPage = () => {
    return (
        <>
            <View style={styles.loginContainer}>
                <Wrapper style={styles.logoBox}>
                    <Image style={styles.logo} source={MainLogo} />
                    <Text style={styles.logoText}>PERPUSTAKAAN YP SIM MEDAN</Text>
                </Wrapper>
                <Wrapper style={styles.inputBox}>
                    <Textfield style={{marginTop:20, borderRadius:5}} placeholder="User Number"/>
                    <Textfield style={{marginTop:20, borderRadius:5}} placeholder="Password"/>
                    <MainButton  containerStyle={{marginTop:20, borderRadius:5}} fade={false} touchable={false}  title={'Login'} />
                </Wrapper>
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
    logoBox:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        width:150,
        height:150
    },
    logoText:{
        marginTop:20,
        fontSize:20,
        color:colorDark,
        fontWeight:'bold'
    },
    inputBox:{
        height:500
    },
})

export default LoginPage
