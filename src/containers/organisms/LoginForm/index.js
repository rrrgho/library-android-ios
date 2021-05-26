import React, { useState } from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import Wrapper from '../../../components/atoms/Wrapper'
import { colorDark } from '../../utils/color'
import MainLogo from '../../../assets/images/mainlogo.jpeg'
import Textfield from '../../../components/atoms/Textfield'
import MainButton from '../../../components/atoms/MainButton'
import { POST } from '../../../config/Axios'
import { useNavigation } from '@react-navigation/native';

const LoginForm = () => {
    const navigation = useNavigation();
    const [userNumber,setUserNumber] = useState("")
    const [password,setPassword] = useState("")
    const [isProcessing,setIsProcessing] = useState(false)

    const handleLogin = async () => {
        // let data = {
        //     user_number : userNumber,
        //     password : password
        // }
        // let request = await POST('/login',data)
        // console.log(request)
        navigation.navigate("HomePage")

    }
    return (
        <>
            <Wrapper style={styles.logoBox}>
                <Image style={styles.logo} source={MainLogo} />
                <Text style={styles.logoText}>PERPUSTAKAAN YAYASAN SULTAN</Text>
            </Wrapper>
            <Wrapper style={styles.inputBox}>
                <Textfield onChangeText={(value) => {setUserNumber(value)}} style={{marginTop:20, borderRadius:5}} placeholder="User Number"/>
                <Textfield onChangeText={(value) => {setPassword(value)}} style={{marginTop:20, borderRadius:5}} placeholder="Password"/>
                <MainButton onPress={() => {handleLogin()}}  containerStyle={{marginTop:20, borderRadius:5}} fade={isProcessing} touchable={!isProcessing ? true : false}  title={!isProcessing ? "Login" : 'Loading ...'} />
            </Wrapper>
        </>
    )
}

const styles = StyleSheet.create({
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

export default LoginForm
