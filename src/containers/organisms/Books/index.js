import React, { useEffect,useState } from 'react'
import { StyleSheet, Text, TextInput, View,Image, Button,ScrollView } from 'react-native'
import SearchButton from '../../../components/atoms/SearchButton'   
import Textfield from '../../../components/atoms/Textfield'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import axios from "axios"
import { NavigationContainer } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';
import { GETAUTH } from '../../../config/Axios'
const Books = ({navigation}) => {
    const [isProcessing,setIsProcessing] = useState(false)
 
    const getDataBooks = () => {
        let request = GETAUTH('/book-data',{
            // headers:{
            //     'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5IiwianRpIjoiY2I4M2NmNTMyNzIxZmQwNTAzMTdiMTA0MDkwMDEwZDEyY2NiZGZmMmI3ZmY1YWY3NzNiMGJkZmE2ZDgzNDYxOGMxNzk0NDNjZGRkYmEyNjAiLCJpYXQiOjE2MjIxMTk2MjksIm5iZiI6MTYyMjExOTYyOSwiZXhwIjoxNjUzNjU1NjI5LCJzdWIiOiIxMSIsInNjb3BlcyI6W119.uopwAePqLov1gzngk_oZH_OtEhATwP5ZRFMZ63Mv6_GVUO9UXgpHcuSHfnnoqVIcSFgLarxNoEXsxeh5aaD-SLojLrhV_sbVeURknd9t_Vq7201kNOFP5n_1LSaa3SCY51TGvEAYQ5_5K4RrMYsw4ym47ROD0974Jz1uc2Zb9YoJSYHaPGKmiV_ETz2IAdQ72bk20oBwHsLnNq0Vh4U7LRvl6LSXNr-h-Spj15EPTQn6501Shn6hYNH5si_1TJikmKus3_6q3ygduzs9Tr16Y92erMhKoAnli0gTCQTa5K9w_dZVXqMtx9QkNGWgXilUJET9fQrW7NfDq7s3GLWB8ZVGm2qurh2dU4K8gFlzc16Bm9hBO0GIGfRxgDzpC3c0rt1pnryg1IaSA2if4obPfYb4P1Hjp-tch38rhKtklxEnyOC3jsKQnFKIwLwdSWCe6l3U0kgAzAHra7Nrv5Cmmkm90uvHSuydOQIz-9X28YtYf3iCDX0HotNq1vcmvuGhu9icLtSIwqgMatGW-puu3AxS1oEfZ6wRuvhdDrKd7btnVukWVu5VMBYEISfgLy1XxFOxmH4O1WG3K0qmuLS8GDwY2I_bQA_pVXbLfgRFED_XR6ZSN6inwPC7iY0NRfQDwAYrQC-rKP2ZafI0rbxuPQKkPgHBC5VD_vlDu2tFZBA`
            // }
        })
        setIsProcessing(true)
        // console.log(request)
        if(request.status === 200){
            setIsProcessing(false)
            console.log(request)
        }
        // $token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5IiwianRpIjoiY2I4M2NmNTMyNzIxZmQwNTAzMTdiMTA0MDkwMDEwZDEyY2NiZGZmMmI3ZmY1YWY3NzNiMGJkZmE2ZDgzNDYxOGMxNzk0NDNjZGRkYmEyNjAiLCJpYXQiOjE2MjIxMTk2MjksIm5iZiI6MTYyMjExOTYyOSwiZXhwIjoxNjUzNjU1NjI5LCJzdWIiOiIxMSIsInNjb3BlcyI6W119.uopwAePqLov1gzngk_oZH_OtEhATwP5ZRFMZ63Mv6_GVUO9UXgpHcuSHfnnoqVIcSFgLarxNoEXsxeh5aaD-SLojLrhV_sbVeURknd9t_Vq7201kNOFP5n_1LSaa3SCY51TGvEAYQ5_5K4RrMYsw4ym47ROD0974Jz1uc2Zb9YoJSYHaPGKmiV_ETz2IAdQ72bk20oBwHsLnNq0Vh4U7LRvl6LSXNr-h-Spj15EPTQn6501Shn6hYNH5si_1TJikmKus3_6q3ygduzs9Tr16Y92erMhKoAnli0gTCQTa5K9w_dZVXqMtx9QkNGWgXilUJET9fQrW7NfDq7s3GLWB8ZVGm2qurh2dU4K8gFlzc16Bm9hBO0GIGfRxgDzpC3c0rt1pnryg1IaSA2if4obPfYb4P1Hjp-tch38rhKtklxEnyOC3jsKQnFKIwLwdSWCe6l3U0kgAzAHra7Nrv5Cmmkm90uvHSuydOQIz-9X28YtYf3iCDX0HotNq1vcmvuGhu9icLtSIwqgMatGW-puu3AxS1oEfZ6wRuvhdDrKd7btnVukWVu5VMBYEISfgLy1XxFOxmH4O1WG3K0qmuLS8GDwY2I_bQA_pVXbLfgRFED_XR6ZSN6inwPC7iY0NRfQDwAYrQC-rKP2ZafI0rbxuPQKkPgHBC5VD_vlDu2tFZBA';
        // axios.get('http://admin.ypsimlibrary.com/api/book-data',{
        //     headers:{
        //         'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5IiwianRpIjoiY2I4M2NmNTMyNzIxZmQwNTAzMTdiMTA0MDkwMDEwZDEyY2NiZGZmMmI3ZmY1YWY3NzNiMGJkZmE2ZDgzNDYxOGMxNzk0NDNjZGRkYmEyNjAiLCJpYXQiOjE2MjIxMTk2MjksIm5iZiI6MTYyMjExOTYyOSwiZXhwIjoxNjUzNjU1NjI5LCJzdWIiOiIxMSIsInNjb3BlcyI6W119.uopwAePqLov1gzngk_oZH_OtEhATwP5ZRFMZ63Mv6_GVUO9UXgpHcuSHfnnoqVIcSFgLarxNoEXsxeh5aaD-SLojLrhV_sbVeURknd9t_Vq7201kNOFP5n_1LSaa3SCY51TGvEAYQ5_5K4RrMYsw4ym47ROD0974Jz1uc2Zb9YoJSYHaPGKmiV_ETz2IAdQ72bk20oBwHsLnNq0Vh4U7LRvl6LSXNr-h-Spj15EPTQn6501Shn6hYNH5si_1TJikmKus3_6q3ygduzs9Tr16Y92erMhKoAnli0gTCQTa5K9w_dZVXqMtx9QkNGWgXilUJET9fQrW7NfDq7s3GLWB8ZVGm2qurh2dU4K8gFlzc16Bm9hBO0GIGfRxgDzpC3c0rt1pnryg1IaSA2if4obPfYb4P1Hjp-tch38rhKtklxEnyOC3jsKQnFKIwLwdSWCe6l3U0kgAzAHra7Nrv5Cmmkm90uvHSuydOQIz-9X28YtYf3iCDX0HotNq1vcmvuGhu9icLtSIwqgMatGW-puu3AxS1oEfZ6wRuvhdDrKd7btnVukWVu5VMBYEISfgLy1XxFOxmH4O1WG3K0qmuLS8GDwY2I_bQA_pVXbLfgRFED_XR6ZSN6inwPC7iY0NRfQDwAYrQC-rKP2ZafI0rbxuPQKkPgHBC5VD_vlDu2tFZBA`
        //     }
        // })
        // .then((res) =>{
        //     console.log(res)
        // })
    }


    const testGetBuku = async () => {
        let request = await GETAUTH('/book-data')
        console.log(request)
    }
    return (
        <View style={styles.container}>
            
            <ScrollView>
                    <Text style={styles.searchbooks}>Cari Buku</Text>
                    <Text style={styles.judulone}>Temukan buku yang kamu cari dengan mengetik judul buku !</Text>
                    <TextInput style={styles.inputbooks} placeholder="Cari buku berdasarkan judul buku"></TextInput>
                    <SearchButton onPress={() => {testGetBuku()}}  containerStyle={{
                        width: responsiveWidth(90),
                        height: responsiveHeight(7),
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        borderRadius: 10,
                        marginTop: responsiveHeight(1.1),
                    }} fade={isProcessing} touchable={!isProcessing ? true : false}  title={!isProcessing ? "Cari Buku" : 'Loading ...'} />
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