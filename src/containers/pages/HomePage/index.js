import React from 'react'
import {Text, StyleSheet, Button, View} from 'react-native'

const HomePage = ({navigation}) => {
    return (
        <View>
            <Button title="Login" onPress={() => {navigation.navigate("LoginPage")}}/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default HomePage
