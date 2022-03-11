import React from 'react'
import { StyleSheet, Text, TextInput, View,Image, Button,ScrollView } from 'react-native'
import Books from '../../organisms/Books'
import Header from '../../../components/moleculs/Header'
import axios from "axios"
// import { TouchableOpacity } from 'react-native-gesture-handler';
const BooksPage = ({route,navigation}) => {
    let ocr_search = null
    if(route.params)
        ocr_search = route.params.ocr_search
    return(
        <>
            {/* <Header /> */}
            <Books ocr_search={ocr_search} />
        </>
    )
}

const styles = StyleSheet.create({
    
})

export default BooksPage
