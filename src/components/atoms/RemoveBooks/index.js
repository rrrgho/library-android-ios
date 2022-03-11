import React, { useState } from 'react'
import { Button, StyleSheet, Text, Touchable, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { GreenFade, colorPrimary,Yellow } from '../../../containers/utils/color'

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
const RemoveBooks = (props) => {

    const [background, setBackground] = useState(!props.fade && 'red')
    const render = () => {
        if(props.touchable){
            return (
                <>
                <View style={{display:'flex', flexDirection:'row'}}>
                    <Text style={{color:'#888', fontWeight:'bolc', fontSize:11}}>{props.title ?? 'Menampilkan hasil untuk'} <Text style={{fontWeight:'bold', fontSize:13}}> {props.result} </Text></Text>
                    <TouchableOpacity onPress={props.onPress} style={[styles.container, props.containerStyle]}>
                        <Text>
                            <FontAwesomeIcon style={{color:'red'}} icon={faTimesCircle} />
                        </Text>
                    </TouchableOpacity>
                </View>
                </>
            )
        }else{
            return (
                <View style={[styles.container, {backgroundColor:props.fade ? 'red' : background}, props.containerStyle]}>
                    <Text style={{color:'#888', fontWeight:'bolc', fontSize:11}}>{props.title ?? 'Menampilkan hasil untuk'} <Text style={{fontWeight:'bold', fontSize:13}}> {props.result} </Text></Text>
                </View>
            )
        }
    }
    return (
        render()
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        backgroundColor: '#fff',
        // justifyContent: 'center',
        // alignSelf: 'center',
        borderRadius: 10,
        marginLeft:5,
        marginTop:2
    },

})

export default RemoveBooks