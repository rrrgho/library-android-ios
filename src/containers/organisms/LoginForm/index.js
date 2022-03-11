import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { AsyncStorage, Image, StyleSheet, Text } from 'react-native'
import MainLogo from '../../../assets/images/mainlogo.jpeg'
import MainButton from '../../../components/atoms/MainButton'
import Textfield from '../../../components/atoms/Textfield'
import Wrapper from '../../../components/atoms/Wrapper'
import { GET, POST } from '../../../config/Axios'
import BASE_URL from '../../../config/BaseUrl'
import { colorDark, colorPrimary } from '../../utils/color'

const LoginForm = (props) => {
    const navigation = useNavigation();
    const [userNumber,setUserNumber] = useState("")
    const [password,setPassword] = useState("")
    const [isProcessing,setIsProcessing] = useState(false)

    const handleLogin = async () => {
        // navigation.navigate("HomePage")
        // alert("ss")
        // return
        setIsProcessing(true)
        await AsyncStorage.clear();
        if(userNumber.length>0 && password.length >0){
            let data = {
                user_number : userNumber,
                password : password
            }
            console.log(data)
            let request = await POST('/login',data)
            console.log(request)
            
            if(request.status === 200){
                
                setIsProcessing(false)
                let response = request.data.data
                await AsyncStorage.setItem('identity', JSON.stringify({name: response.name, user_number : response.user_number, level : response.level})).catch(error => console.log(console.error))
                await AsyncStorage.setItem('access_token',response.token)
                setIsProcessing(false)
                navigation.navigate("HomePage")
            }else{
                alert("Akun tidak ditemukan")
            }
        }else{
            setIsProcessing(false)
            alert("Data tidak boleh kosong !")
        }
        setIsProcessing(false)

    }

    useEffect( async () => {
        await AsyncStorage.clear();
        setUserNumber("")
        setPassword("")
    }, [])


    return (
        <>
            <Wrapper style={styles.logoBox}>
                <Image style={styles.logo} source={MainLogo} />
                <Text style={styles.logoText}>PERPUSTAKAAN</Text>
                <Text style={styles.logoSubText}>YAYASAN SULTAN ISKANDAR MUDA MEDAN</Text>
            </Wrapper>
            <Wrapper style={styles.inputBox}>
                <Textfield  onChangeText={(value) => {setUserNumber(value)}} style={{marginTop:20, borderRadius:5}} placeholder="User Number"/>
                <Textfield  onChangeText={(value) => {setPassword(value)}} password style={{marginTop:20, borderRadius:5}} placeholder="Password"/>
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

export default (LoginForm)
