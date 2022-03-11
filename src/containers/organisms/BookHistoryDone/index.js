import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, FlatList, Image } from 'react-native'
import { POSTAUTH } from '../../../config/Axios';
import {colorBlur, colorDark, colorPrimary} from '../../utils/color'
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import { ScrollView, RefreshControl } from 'react-native';
import nodata from '../../../assets/images/no_data.png'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

const BookHistoryDone = () => {
    const [DATA, setDATA] = useState()
    const navigation = useNavigation()


    const getData = async () => {
        let request = await POSTAUTH('/history-selesai');
        if(request.status === 200){
            let data = request.data.data
            setDATA(data)
        }
    }

    useEffect( async () => {
        getData()
    },[])

    const goDetail = (item) => {
        navigation.navigate('BookDetailPages',{
            'id': item.book.id,
            'is_rating' : !item.is_rating ? true : false,
            'order_id' : item.id
        })
    }

    const Item = ({ title }) => (
        <TouchableOpacity onPress={() => {goDetail(title)}} style={styles.item}>
            <View style={styles.image}>
                <Image style={styles.imageStyle} source={{uri:"https://img.freepik.com/free-vector/abstract-green-business-book-cover-page-brochure-template_1017-13933.jpg?size=338&ext=jpg"}} />
            </View>
            <View style={styles.content}>
                <Text style={{fontSize:15}}>{title.book_relation.name}</Text>
                {/* <Text style={{fontSize:13, color:'green'}}>{title.start_date} - {title.end_date}</Text> */}
                {
                    title.is_rating ? 
                    <View style={{height:20,  justifyContent:'center', marginTop:10, paddingLeft:10, width:200, backgroundColor:colorPrimary, borderRadius:5}}><Text style={{color:'#fff'}}>Anda telah memberi penilaian</Text></View>
                    :
                    <View style={{height:20,  justifyContent:'center', marginTop:10, paddingLeft:10, width:200, backgroundColor:'red', borderRadius:5}}><Text style={{color:'#fff'}}>Belum memberi penilaian</Text></View>
                }
            </View>
        </TouchableOpacity>
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


    const [refreshing, setRefreshing] = useState(false);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        await getData()
        wait(2000).then(() => setRefreshing(false));
    }, []);
    
    return (
        <>
            <ScrollView style={{height:'75%'}} refreshControl={
                <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }>
                {
                    !refreshing ?
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
                    :
                    shimmer()    
                }
            </ScrollView>
            
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

export default BookHistoryDone
