import React from 'react'
import { StyleSheet, Text, TextInput, View,Image, Button,ScrollView } from 'react-native'
import HeaderHome from '../../../components/atoms/moleculs/HeaderHome'
import Books from '../../organisms/Books'
import axios from "axios"
// import { TouchableOpacity } from 'react-native-gesture-handler';
const BooksPage = ({navigation}) => {

    return(
        // <HeaderHome />
        <Books />
    )
}

const styles = StyleSheet.create({
    
})

export default BooksPage
