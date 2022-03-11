import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import Header from '../../../components/moleculs/Header';
import { GET } from '../../../config/Axios';
import { colorBlur, colorPrimary } from '../../utils/color';
import Moment from 'moment';

const InformationCollect = ({navigation}) => {


    const [data,setData] = useState()

    
    const renderItem = ({ item }) => (
        <Item data={item} />
    );
    
    const Item = ({ data }) => (
        <TouchableOpacity onPress={() => {navigation.navigate('Information', {data : data})}} style={{width:'100%', padding:10, borderStyle:'solid', borderWidth:1, borderColor:'#ccc', borderRadius:10, backgroundColor:'#fff', marginTop:10}}>
            <Text style={{fontSize:15, color:colorPrimary}} >{data.name}</Text>
            <Text style={{fontSize:12, color:'#ccc'}} >{Moment(data.created_at).format('dddd, DD MMM YYYY')}</Text>
            {data.new &&
                <View style={{padding:5, backgroundColor:colorPrimary, width:90, justifyContent:'center', alignItems:'center', borderRadius:10, marginTop:10}}>
                    <Text style={{color:'#fff'}}>Terbaru</Text>
                </View>
            }
        </TouchableOpacity>
    );

    const getData = async () => {
        let request = await GET('/announcement')
        console.log(request)
        if(request.status === 200){
            setData(request.data.data)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <View style={{backgroundColor:'#fff', flex:1}}>
            <Header />
            <View style={{padding:10}}>
                {!data
                ?
                    <Text>Loading ... </Text>
                :
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default InformationCollect;
