import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import success from '../../../assets/images/success.jpeg'

const SuccessPage = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("HomePage")
        },1000)
    }, [])
    return (
        <View style={{backgroundColor:'#fff', flex:1, justifyContent:'center', alignContent:'center', alignItems:'center'}}>
            <Image source={success} style={{width:'100%', height:200, resizeMode:'contain'}} />
            <Text style={{color:'#888'}} >Berhasil, sedang mengalihkan ... </Text>
        </View>
    )
}

export default SuccessPage
