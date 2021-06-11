import React, { useState } from 'react'
import { Text, View, StyleSheet, FlatList, Image } from 'react-native'
import {colorBlur, colorDark, colorPrimary} from '../../utils/color'

const BookHistory = () => {
    const DATA = [
        {
            id: '1',
            title: 'Cara Cepat Dapat Pacar',
            limit: 'Batas waktu 2 hari lagi'
        },
        {
            id: '2',
            title: 'Belajar Investasi Forex dengan GIC',
            limit: 'Batas waktu 2 hari lagi'
        },
        {
            id: '3',
            title: 'Modal 100k bisa untung 2M dari Ngepet',
            limit: 'Batas waktu 2 hari lagi'
        },
        {
            id: '4',
            title: 'Bapak selingkuh dengan Ibu',
            limit: 'Batas waktu 2 hari lagi'
        },
        {
            id: '5',
            title: 'Lucinta luna melahirkan',
            limit: 'Batas waktu 2 hari lagi'
        },
    ];

    const Item = ({ title }) => (
        <View style={styles.item}>
            <View style={styles.image}>
                <Image style={styles.imageStyle} source={{uri:"https://img.freepik.com/free-vector/abstract-green-business-book-cover-page-brochure-template_1017-13933.jpg?size=338&ext=jpg"}} />
            </View>
            <View style={styles.content}>
                <Text style={{fontSize:15}}>{title}</Text>
                <Text style={{fontSize:13}}>19 November 2021</Text>
                <Text style={{fontSize:10, fontStyle:'italic',marginTop:5}}>Batas waktu 2 hari lagi</Text>
            </View>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );
    
    return (
        <>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </>
    )
}

const styles = StyleSheet.create({
    item:{
        width:'100%',
        height:100,
        backgroundColor:'#fff',
        borderBottomWidth:2,
        borderBottomColor:colorBlur,
        justifyContent:'center',
        flexDirection:'row',
        marginTop:15,
    },
    image:{
        width:80,
        height:80,
        backgroundColor:colorDark,
        borderRadius:10,
        borderWidth:2,
        borderColor:colorPrimary,
        overflow:'hidden'
    },
    content:{
        flex:1,
        height:80,
        backgroundColor:'#fff',
        justifyContent:'center',
        paddingLeft:10,
    },
    imageStyle:{
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    }

})

export default BookHistory
