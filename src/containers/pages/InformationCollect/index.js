import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import Header from '../../../components/moleculs/Header';
import { GET } from '../../../config/Axios';

const InformationCollect = ({navigation}) => {


    const [data,setData] = useState()

    
    const renderItem = ({ item }) => (
        <Item data={item} />
    );
    
    const Item = ({ data }) => (
        <TouchableOpacity onPress={() => {navigation.navigate('Information', {data : data})}} style={{width:'100%', padding:10, borderStyle:'solid', borderBottomWidth:1, borderBottomColor:'#ccc', backgroundColor:'#fff', marginTop:10}}>
            <Text style={{fontSize:15}} >{data.name}</Text>
        </TouchableOpacity>
    );

    const getData = async () => {
        let request = await GET('/announcement')
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
