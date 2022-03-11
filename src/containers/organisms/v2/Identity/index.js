import { faIdBadge, faMedal, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Identity } from '../../../../config/Auth';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from 'react-native-responsive-dimensions';

const IdentitySection = () => {
    const [data, setData] = useState()
    useEffect(async () => {
        setData(JSON.parse(await Identity()))
    },[])
    return (
        <View>
            <Text style={{fontSize:responsiveFontSize(3.2), fontWeight:'bold', color:'#555'}}>{data && data.name.split(' ').slice(0,1).join(' ')}</Text>
            <Text style={{fontSize:responsiveFontSize(1.5), fontWeight:'bold', color:'#888'}}>Nomor Induk : {data && data.user_number}</Text>
            <View style={{display:'flex', flexDirection:'row', marginTop:10, justifyContent:'flex-end'}}>
                <FontAwesomeIcon icon={faMedal} size={20} style={{color:'orange'}} />
                <Text style={{fontSize:responsiveFontSize(1.5), fontWeight:'bold', color:'#888', marginLeft:5}}>{data && data.level}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default IdentitySection;
