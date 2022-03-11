import React from 'react';
import {View, StyleSheet, ScrollView, Text, Image} from 'react-native';
import Header from '../../../components/moleculs/Header';
import { colorDark, colorPrimary } from '../../utils/color';
import useSelebPus from './useSelebPus';
import nodata from '../../../assets/images/no_data.png'
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

const SelebPus = () => {
    const { data } = useSelebPus();
    return (
        <View style={{flex:1}}>
            <Header />
            <ScrollView style={styles.ScrollView}>
                {data ?
                    data.length > 0 
                    ? 
                        data.map(item => {
                            return (
                                <View key={item.id} style={styles.listData}>
                                    <View style={styles.grade}>
                                        <Text style={{color:'#fff', fontSize:20, fontWeight:'bold'}}>{item.user.unit_name}</Text>
                                    </View>
                                    <View style={{padding:20, flex:1}}>
                                        <Text style={{color:colorPrimary, fontSize:20}}>{item.user.name}</Text>
                                        <Text style={{color:colorDark, fontSize:15}}>{item.user.level}</Text>
                                        <Text style={{color:colorDark, fontSize:15}}>Jumlah Point : {item.user.point}</Text>
                                    </View>
                                </View>
                            )
                        })
                        :
                        <View style={{width:'100%',justifyContent:'center', alignItems:'center'}}>
                            <Image source={nodata} style={{width:300, height:300, opacity:0.5}} />
                            <Text style={{color:colorDark}}>Upps, belum ada Request !!</Text>
                        </View> 
                    :
                    
                    new Array(5).fill("").map((item,idx) => {
                        return (
                            <View key={idx} style={styles.listData}>
                                <View style={styles.grade}>
                                    <ShimmerPlaceHolder style={{width:'100%', height:20}}/>
                                </View>
                                <View style={{padding:20, flex:1}}>
                                    <ShimmerPlaceHolder style={{width:'60%', height:20, marginTop:3}}/>
                                    <ShimmerPlaceHolder style={{width:'30%', height:20, marginTop:3}}/>
                                    <ShimmerPlaceHolder style={{width:'80%', height:20, marginTop:3}}/>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    ScrollView: {
        flex:1,
        backgroundColor:'#fff',
        padding:20
    },
    listData: {
        width:'100%',
        borderStyle:'solid',
        borderColor:'#ddd',
        borderWidth:1,
        borderRadius:6,
        justifyContent:'space-between',
        flexDirection:'row'
    },
    grade:{
        width:'20%',
        minHeight: 70,
        backgroundColor:colorPrimary,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    }
})

export default SelebPus;
