import React, { useEffect } from 'react'
import {View,Text, Image, StyleSheet} from 'react-native'
import Wrapper from '../../../components/atoms/Wrapper'
import Logo from '../../../assets/images/mainlogo.jpeg'
import { colorDark, colorPrimary } from '../../utils/color'
import { Auth } from '../../../config/Auth'

const SplashScreen = ({navigation}) => {
    useEffect(async () => {
        if(await Auth()){
            setTimeout(() => {
                navigation.navigate("LoginPage")
            },2000)
        }else{
            setTimeout(() => {
                navigation.navigate("HomePage")
            },2000)
        }
    },[])
    return (
        <View style={styles.container}>
            <Wrapper>
                <Image style={styles.logo} source={Logo} />
            </Wrapper>
            <Wrapper>
                <Text style={styles.libraryTitle}>PERPUSTAKAAN</Text>
            </Wrapper>
            <Wrapper>
                <Text style={styles.schoolTitle}>YP SULTAN ISKANDAR MUDA MEDAN</Text>
            </Wrapper>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        width:150,
        height:150
    },
    libraryTitle:{
        fontSize:25,
        marginTop:10,
        fontWeight:"bold",
        color:colorDark
    },
    schoolTitle:{
        fontSize:15,
        color:colorPrimary,
        fontWeight:"bold"
    }
})

export default SplashScreen
