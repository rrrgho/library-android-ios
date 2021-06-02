import React, { useEffect, useState } from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import Wrapper from '../../../components/atoms/Wrapper'
import { colorDark, colorPrimary } from '../../utils/color'
import MainLogo from '../../../assets/images/mainlogo.jpeg'
import Textfield from '../../../components/atoms/Textfield'
import MainButton from '../../../components/atoms/MainButton'
import { POST } from '../../../config/Axios'
import { useNavigation } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';
import {connect} from 'react-redux'

const LoginForm = (props) => {
    const navigation = useNavigation();
    const [userNumber,setUserNumber] = useState("")
    const [password,setPassword] = useState("")
    const [isProcessing,setIsProcessing] = useState(false)

    const handleLogin = async () => {
        setIsProcessing(true)
        if(userNumber.length>0 && password.length >0){
            let data = {
                user_number : userNumber,
                password : password
            }
            let request = await POST('/login',data)
            if(request.status === 200){
                let response = request.data.data
                await AsyncStorage.setItem('access_token',response.token)
                setIsProcessing(false)
                navigation.navigate("BooksPage")
            }
        }else{
            setIsProcessing(false)
            alert("Data tidak boleh kosong !")
        }

    }

    useEffect(() => {
        console.log(props.initialState)
    },[])
    return (
        <>
            <Wrapper style={styles.logoBox}>
                <Image style={styles.logo} source={MainLogo} />
                <Text style={styles.logoText}>PERPUSTAKAAN</Text>
                <Text style={styles.logoSubText}>YAYASAN SULTAN ISKANDAR MUDA MEDAN</Text>
            </Wrapper>
            <Wrapper style={styles.inputBox}>
                <Textfield onChangeText={(value) => {setUserNumber(value)}} style={{marginTop:20, borderRadius:5}} placeholder="User Number"/>
                <Textfield onChangeText={(value) => {setPassword(value)}} password style={{marginTop:20, borderRadius:5}} placeholder="Password"/>
                <MainButton onPress={() => {handleLogin()}}  containerStyle={{marginTop:20, borderRadius:5}} fade={isProcessing} touchable={!isProcessing ? true : false}  title={!isProcessing ? "Login" : 'Loading ...'} />
            </Wrapper>
        </>
    )
}

const reduxState = (state) => {
    return {
        initialState : state.initialReducer
    }
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
        height:500
    },
})

export default connect(reduxState,null)(LoginForm)
