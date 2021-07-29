import React from 'react';
import { ScrollView } from 'react-native';
import {View, StyleSheet, Text, Image} from 'react-native';
import Header from '../../../components/moleculs/Header';
import Moment from 'moment';
import Textfield from '../../../components/atoms/Textfield'
import MainButton from '../../../components/atoms/MainButton'

const DetailHistory = ({navigation, route}) => {
    const {data} = route.params;
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
                    <Text style={{marginTop:5, color:'#888'}}>Ajukan perpanjangan waktu pemulangan buku </Text>
                    <Textfield placeholder="Ketik jumlah hari untuk diajukan .." style={{marginTop:10}} />
                    <MainButton containerStyle={{marginTop:10}} title="Ajukan" />
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
