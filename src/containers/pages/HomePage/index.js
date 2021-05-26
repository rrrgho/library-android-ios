import React, { useEffect } from 'react'
import {Text, StyleSheet, Button, View} from 'react-native'
import { Auth } from '../../../config/Auth'
import { AsyncStorage } from 'react-native';

const HomePage = ({navigation}) => {
    useEffect(() => {
        navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
        })
        // AsyncStorage.clear()
    },[])

    useEffect(async () => {
        if(!await Auth()){
            navigation.navigate("LoginPage")
        }
    },[])
    return (
        <View>
            <Button title="Home Page" onPress={() => {navigation.navigate("LoginPage")}}/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default HomePage
