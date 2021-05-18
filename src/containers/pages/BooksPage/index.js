import React from 'react'
import {Text, StyleSheet, Button, View} from 'react-native'

const BookPage = ({navigation}) => {
    return (
        <View>
            <Button title="BooksPage" onPress={() => {navigation.navigate("LoginPage")}}/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default BookPage
