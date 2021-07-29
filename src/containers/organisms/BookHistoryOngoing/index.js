import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, FlatList, Image } from 'react-native'
import { POSTAUTH } from '../../../config/Axios';
import {colorBlur, colorDark, colorPrimary} from '../../utils/color'
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import { ScrollView } from 'react-native';
import nodata from '../../../assets/images/no_data.png'
import Moment from 'moment';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

const BookHistoryOngoing = () => {
    const [DATA, setDATA] = useState()
    const navigation = useNavigation()


    useEffect( async () => {
        let request = await POSTAUTH('/history-berjalan');
        if(request.status === 200){
            let data = request.data.data
            setDATA(data)
        }
        console.log(request)
    },[])

    const Item = ({ title }) => (
        <View style={styles.item}>
            <View style={styles.image}>
                <Image style={styles.imageStyle} source={{uri:"https://img.freepik.com/free-vector/abstract-green-business-book-cover-page-brochure-template_1017-13933.jpg?size=338&ext=jpg"}} />
            </View>
            <TouchableOpacity onPress={() => {navigation.navigate('DetailHistory', {data: title})}} style={styles.content}>
                <Text style={{fontSize:15, color:'#666'}}>{title.book_relation.name}</Text>
                <Text style={{fontSize:13, color:'green'}}>{Moment(title.start_date).format('DD MMM YYYY')} - {Moment(title.end_date).format('DD MMM YYYY')}</Text>
                {
                    title.isEnd ? 
                    <View style={{height:20,  justifyContent:'center', marginTop:10, paddingLeft:10, width:200, backgroundColor:'red', borderRadius:5}}><Text style={{color:'#fff'}}>Telah Expired Dalam {title.expired} Hari</Text></View>
                    :
                    <Text style={{color:'#888', opacity:0.5, marginTop:5}}>Batas pengembalian {title.batas} hari lagi</Text>
                }
            </TouchableOpacity>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item} />
    );


    const shimmer = () => {
        const render = new Array(7).fill(0).map((item,index) => {
            return (
                <View key={index} style={styles.item}>
                    <View style={styles.image}>
                        <ShimmerPlaceHolder style={{width:'100%', height:'100%'}}/>
                    </View>
                    <View style={styles.content}>
                        <ShimmerPlaceHolder style={{width:'80%', height:20, marginTop:3}}/>
                        <ShimmerPlaceHolder style={{width:'95%', height:20, marginTop:3}}/>
                        <ShimmerPlaceHolder style={{width:'40%', height:20, marginTop:3}}/>
                    </View>
                </View>
            )
        })
        return (
            <ScrollView>
                {render}
            </ScrollView>
        )
    }
    
    return (
        <>
            {
            DATA ?
            DATA.length > 0 ?
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            : 
            <View style={{width:'100%',justifyContent:'center', alignItems:'center'}}>
                <Image source={nodata} style={{width:300, height:300, opacity:0.5}} />
                <Text>Upps, silahkan lakukan peminjaman !!</Text>
            </View> 
            :
                shimmer()       
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

export default BookHistoryOngoing
