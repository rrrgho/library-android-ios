import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, FlatList, Image } from 'react-native'
import { POSTAUTH } from '../../../config/Axios';
import {colorBlur, colorDark, colorPrimary} from '../../utils/color'

const BookHistory = () => {
    const [DATA, setDATA] = useState()


    useEffect( async () => {
        let request = await POSTAUTH('/history-berjalan');
        if(request.status === 200){
            let data = request.data.data
            setDATA(data)
        }
    },[])

    const Item = ({ title }) => (
        <View style={styles.item}>
            <View style={styles.image}>
                <Image style={styles.imageStyle} source={{uri:"https://img.freepik.com/free-vector/abstract-green-business-book-cover-page-brochure-template_1017-13933.jpg?size=338&ext=jpg"}} />
            </View>
            <View style={styles.content}>
                <Text style={{fontSize:15}}>{title.book_relation.name}</Text>
                <Text style={{fontSize:13, color:'green'}}>{title.start_date} - {title.end_date}</Text>
                {
                    title.isEnd ? 
                    <View style={{height:20,  justifyContent:'center', marginTop:10, paddingLeft:10, width:200, backgroundColor:'red', borderRadius:5}}><Text style={{color:'#fff'}}>Telah Expired Dalam {title.expired} Hari</Text></View>
                    :
                    <Text>Masih ada</Text>
                }
            </View>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item} />
    );
    
    return (
        <>
            {DATA ?
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />  
                :
                <Text>Loading ...</Text>          
            }
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
