import React from 'react'
import { StyleSheet, Text, TextInput, View,Image, Button,ScrollView } from 'react-native'
import Books from '../../organisms/Books'
import Header from '../../../components/moleculs/Header'
import axios from "axios"
// import { TouchableOpacity } from 'react-native-gesture-handler';
const BooksPage = ({navigation}) => {

    return(
        <>
            <Header />
            <Books />
        </>
    )
}

const styles = StyleSheet.create({
    
})

export default BooksPage
