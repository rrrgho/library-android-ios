import { faBell, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { GETAUTH } from '../../../config/Axios';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from 'react-native-responsive-dimensions';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

const Notification = () => {
    const [notif,setNotif] = useState("")
    const [isLoading, setLoading] = useState(false)

    const getNotif = async () => {
        setLoading(true)
        let send = await GETAUTH('/notifikasi');
        if(send.status === 200){
            setNotif(send.data.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        getNotif()
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.boxNotif}>
                <View style={styles.icon}>
                    <FontAwesomeIcon icon={faBell} size={20} style={{color:'#fff'}} />
                </View>
                <View style={styles.boxText}>
                    {isLoading ?
                    <ShimmerPlaceHolder style={{width:'100%', height:20, opacity:0.2, borderRadius:6}} />
                    :
                    <Text style={{color:'#fff', fontSize:responsiveFontSize(1.5)}}>{notif}</Text>
                    }
                </View>
                <TouchableOpacity onPress={() => {getNotif()}} style={styles.refreshBox}>
                    <FontAwesomeIcon icon={faSyncAlt} style={{color:'#fff'}} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        // paddingLeft:30,
        // paddingRight:30,
        // marginBottom:20
    },
    boxNotif:{
        width:'100%',
        backgroundColor:'#f2ba6b',
        borderRadius:12,
        flexDirection:'row'
    },
    icon:{
        padding:10,
        backgroundColor:'transparent',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    boxText:{
        flex:1,
        backgroundColor:'transparent',
        padding:10
    },
    refreshBox: {
        width:40,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
    }
})

export default Notification;
