import {vText, StyleSheet, Button, View} from 'react-native'
import React, { useEffect } from 'react'
import { Auth } from '../../../config/Auth'
import { AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const HomePage = () => {
    const navigation = useNavigation();
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
            <Button title="Books Page" onPress={() => {navigation.navigate("BooksPage")}}/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default HomePage
