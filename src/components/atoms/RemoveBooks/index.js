import React, { useState } from 'react'
import { Button, StyleSheet, Text, Touchable, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { GreenFade, colorPrimary,Yellow } from '../../../containers/utils/color'

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
const RemoveBooks = (props) => {

    const [background, setBackground] = useState(!props.fade && Yellow)
    const render = () => {
        if(props.touchable){
            return (
                <TouchableOpacity onPress={props.onPress} style={[styles.container, {backgroundColor:props.fade ? Yellow : background}, props.containerStyle]}>
                    <Text style={{color:'#020202'}}>{props.title ?? 'Hapus Buku'}</Text>
                </TouchableOpacity>
            )
        }else{
            return (
                <View style={[styles.container, {backgroundColor:props.fade ? Yellow : background}, props.containerStyle]}>
                    <Text style={{color:'#020202'}}>{props.title ?? 'Hapus Buku'}</Text>
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
        width: responsiveWidth(30),
        height: responsiveHeight(7),
        alignItems: 'center',
        backgroundColor: '#D0FF0E',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: responsiveHeight(1.1),
    },

})

export default RemoveBooks