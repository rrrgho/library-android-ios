import React, { useState } from 'react'
import { Text, View, StyleSheet, FlatList, Image } from 'react-native'
import {colorBlur, colorDark, colorPrimary} from '../../utils/color'

const BookHistory = () => {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];

    const Item = ({ title }) => (
        <View style={styles.item}>
            <View style={styles.image}>
                <Image style={styles.imageStyle} source={{uri:"https://www.androidfreeware.net/img2/com-desygner-wattpadcovers.jpg"}} />
            </View>
            <View style={styles.content}>
                <Text style={{fontSize:20}}>Judul Buku</Text>
                <Text style={{fontSize:15}}>19 November 2021</Text>
                <Text style={{fontSize:12, fontStyle:'italic',marginTop:5}}>Batas waktu 2 hari lagi</Text>
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
        flexDirection:'row'
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
