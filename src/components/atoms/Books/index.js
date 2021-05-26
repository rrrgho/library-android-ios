import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View,Image, Button,ScrollView } from 'react-native'
import MainButton from '../../../components/atoms/MainButton'   
import Textfield from '../../../components/atoms/Textfield'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { NavigationContainer } from '@react-navigation/native';
import { Alert } from 'react-native'
import { GET } from '../../../config/Axios'
const Books = ({navigation}) => {
    const [isProcessing,setIsProcessing] = useState(false)
    return (
        <View style={styles.container}>
            <ScrollView>
                    <Text style={styles.searchbooks}>Cari Buku</Text>
                    <Text style={styles.judulone}>Temukan buku yang kamu cari dengan mengetik judul buku !</Text>
                    <TextInput style={styles.inputbooks} placeholder="Cari buku berdasarkan judul buku"></TextInput>
                    <MainButton onPress={() => {handleAlert()}}  containerStyle={{
                        width: responsiveWidth(90),
                        height: responsiveHeight(7),
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        borderRadius: 10,
                        marginTop: responsiveHeight(1.1),
                    }} fade={isProcessing} touchable={!isProcessing ? true : false}  title={!isProcessing ? "Login" : 'Loading ...'} />
                    <View style={styles.cardImageBox}>
                        <Image style={{width:responsiveWidth(90), flex:1, height:responsiveHeight(20), borderTopLeftRadius:10, borderTopRightRadius:10}}  source={{uri: 'https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg'}} />
                    </View> 
                    <View style={styles.cardTitleBox}>
                        <Text style={styles.Title}>Bahasa Inggris SD</Text>
                        <Text style={styles.TextContent}>
                            Karya : Hasiswa Mikroskil
                        </Text>
                        <Text style={styles.TextStok}>
                            Tersedia
                        </Text>
                    </View>
                <View style={styles.cardImageBox}>
                    <Image style={{width:responsiveWidth(90), flex:1, height:responsiveHeight(20), borderTopLeftRadius:10, borderTopRightRadius:10}}  source={{uri: 'https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg'}} />
                </View> 
                <View style={styles.cardTitleBox}>
                    <Text style={styles.Title}>Bahasa Inggris SD</Text>
                    <Text style={styles.TextContent}>
                        Karya : Hasiswa Mikroskil
                    </Text>
                    <Text style={styles.TextStok}>
                        Tersedia
                    </Text>
                </View>

                <View style={styles.cardImageBox}>
                    <Image style={{width:responsiveWidth(90), flex:1, height:responsiveHeight(20), borderTopLeftRadius:10, borderTopRightRadius:10}}  source={{uri: 'https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg'}} />
                </View> 
                <View style={styles.cardTitleBox}>
                    <Text style={styles.Title}>Bahasa Inggris SD</Text>
                    <Text style={styles.TextContent}>
                        Karya : Hasiswa Mikroskil
                    </Text>
                    <Text style={styles.TextStok}>
                        Tersedia
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    card:{
        width: responsiveWidth(90),
        height:responsiveHeight(7),
        backgroundColor:'#fff',
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity:  0.1,
        shadowRadius: 3,
        elevation: 2,
        marginBottom:5,
        marginTop:20,
    },
    cardImageBox:{
        width:'100%',
        height:200,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        marginTop: 10,
    },
    cardTitleBox:{
        width:'100%',
        flex:1,
        backgroundColor:'#fff',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        padding:10,
        paddingBottom:20,
    },
    Title:{
        opacity:0.7,
        fontSize: responsiveFontSize(2.2),
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 40,
    },
    TextContent:{
        fontSize: responsiveFontSize(1.5),
        marginLeft: 40,
    },
    TextStok:{
        fontWeight: 'bold',
        color: '#81ed79',
        marginLeft: 40,
    },
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent: 'center',
    },
    searchbooks:{
        textAlign:'center',
        fontWeight: '600',
        fontSize: responsiveFontSize(2.9),
    },
    judulone:{
        textAlign: 'center',
        fontSize: responsiveFontSize(1.9),
        fontWeight: '600',
        marginTop: 8,
    },
    inputbooks:{
        width: responsiveWidth(90),
        height: responsiveHeight(7),
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 10,
        alignSelf: 'center',
        marginVertical: responsiveHeight(2.33),
    },
    searchbooksbutton :{
        marginBottom: 10,
    },
    dumyBooks:{
        marginTop: 10,
        marginBottom: 20,
        width: 100,
        height: 100,
    }
})
export default Books