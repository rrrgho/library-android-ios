import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Bronze from '../../../assets/images/bronze.png'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient';
import { colorDark, colorPrimary } from '../../utils/color'
import { useEffect } from 'react';
import { Auth, Identity } from '../../../config/Auth';
import { useState } from 'react';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

const LevelFloating = () => {
    const [data, setData] = useState()
    useEffect(async () => {
        setTimeout(async () => {
            setData(JSON.parse(await Identity()))
        },2000)
    },[])
    return (
        <View style={styles.container}>
            <View style={styles.floating}>
                <View style={styles.logoBox}>
                    <Image source={Bronze} style={{width:'100%', height:'100%', resizeMode:'contain'}} />
                    {/* <ShimmerPlaceHolder style={{width:'100%', height:'100%'}} /> */}
                </View>
                <View style={styles.levelBox}>
                    {
                        data ?
                            <>
                                <Text style={{color:colorPrimary, fontSize:16}}>{data.level}</Text>
                                <Text style={{color:colorDark, fontSize:13}}>No. {data.user_number}</Text> 
                            </>
                            :
                            <>
                                <ShimmerPlaceHolder style={{width:'50%', height:10}} />
                                <ShimmerPlaceHolder style={{width:'30%', height:10, marginTop:3}} />
                            </>
                    }
                    
                </View>
                <View style={styles.coinBox}>
                    {
                        data ?
                            <>
                                <Text style={{color:colorPrimary, fontSize:16}}>{data.name.split(' ').slice(0,1).join(' ')}</Text>
                                <Text style={{color:colorDark, fontSize:13}}>No. {data.user_number}</Text> 
                            </>
                            :
                            <>
                                <ShimmerPlaceHolder style={{width:'50%', height:10}} />
                                <ShimmerPlaceHolder style={{width:'30%', height:10, marginTop:3}} />
                            </>
                    }
                    
                    
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        width:'100%',
        height:100,
        alignItems:'center',
        marginTop:-20
    },
    floating:{
        width:'90%',
        height:70,
        backgroundColor:'#fff',
        elevation: 5,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:10, 
        paddingRight:10
    },
    logoBox:{
        width:60,
        height:60,
        padding:5,
        borderRadius:100,
        overflow:'hidden'
    },
    levelBox:{
        width:"auto",
        height:60,
        backgroundColor:'#fff',
        borderLeftWidth:2,
        borderStyle:'solid',
        borderLeftColor:'#eee',
        padding:10,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        marginLeft:10,
    },
    coinBox:{
        flex:1,
        height:60,
        backgroundColor:'#fff',
        borderLeftWidth:2,
        borderStyle:'solid',
        borderLeftColor:'#eee',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        paddingLeft:10,
    }
})

export default LevelFloating;
