import React from 'react'
import { StyleSheet, Text, TextInput, View,Image, Button,ScrollView } from 'react-native'
import Books from '../../organisms/Books'
import Header from '../../../components/moleculs/Header'
import axios from "axios"
import Ebooks from '../../organisms/Ebooks'
// import { TouchableOpacity } from 'react-native-gesture-handler';
const EbooksPage = ({navigation}) => {

    return(
        <>
            {/* <Header /> */}
            <Ebooks />
            
        </>
    )
}

const styles = StyleSheet.create({
    
})

export default EbooksPage
