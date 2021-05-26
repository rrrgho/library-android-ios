import React from 'react'
import {Text, StyleSheet, Button, View} from 'react-native'

const HomePage = ({navigation}) => {
    return (
        <View>
            <Button title="Home Page" onPress={() => {navigation.navigate("LoginPage")}}/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default HomePage
