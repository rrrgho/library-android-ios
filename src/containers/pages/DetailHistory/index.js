import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import {View, StyleSheet, Text, Image} from 'react-native';
import Header from '../../../components/moleculs/Header';
import Moment from 'moment';
import Textfield from '../../../components/atoms/Textfield'
import MainButton from '../../../components/atoms/MainButton'
import { useEffect } from 'react';
import { POSTAUTH } from '../../../config/Axios';

const DetailHistory = ({navigation, route}) => {
    const {data} = route.params;
    const [userInput, setUserInput] = useState({book_id:data.book_id, extend:1})
    useEffect(() => {
        console.log(data)
    }, [])

    const pushInput = async () => {
        let send = await POSTAUTH('/extend-book', userInput)
        if(send.status === 200){
            alert("Pengajuan diteruskan, mohon menunggu !")
            navigation.navigate("SuccessPage")
        }
    }
    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
                <View style={styles.wrapperImage}>
                    <View style={styles.boxGambar}>
                        <Image style={styles.imageStyle} source={{uri:"https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png"}} />
                    </View>
                </View>
                <View style={styles.boxDetail}>
                    <Text style={{fontSize:20, color:'#666'}}>{data.book_relation.name}</Text>
                    <Text style={{fontSize:13, color:'green'}}>{Moment(data.start_date).format('DD MMM YYYY')} - {Moment(data.end_date).format('DD MMM YYYY')}</Text>

                    <View style={{width:'100%', borderStyle:'solid',borderWidth:1,borderColor:'#eee',marginTop:20}}></View>
                    {!data.isEnd ?
                        !data.status_perpanjang ? 
                            <>
                                <Text style={{marginTop:5, color:'#888'}}>Ajukan perpanjangan waktu pemulangan buku </Text>
                                <Textfield
                                    onChangeText={(value) => {
                                        setUserInput(prev => ({
                                            ...prev,
                                            extend : value
                                        }))
                                    }}
                                placeholder="Ketik jumlah hari untuk diajukan .." style={{marginTop:10}} />
                                <MainButton touchable containerStyle={{marginTop:10}} title="Ajukan" onPress={() => {pushInput()}} />
                            </>
                            :
                            <Text style={{marginTop:5, color:'red'}}>Pengajuan perpanjangan sudah dilakukan, hanya bisa 1 kali ! </Text>
                    :
                        <Text style={{marginTop:5, color:'red'}}>Tidak dapat memperpanjang pinjaman, batas waktu telah Expired ! </Text>
                    }
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#fff',
        padding:20
    },
    wrapperImage:{
        width:'100%',
        flex:1,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:10,
        flexDirection:'row'
    },
    boxDetail:{
        marginTop:20,
        width:'100%',
        flex:1,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:10,
        padding:20
    },
    boxGambar:{
        padding:40
    },
    imageStyle:{
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    }
})

export default DetailHistory;
