import React, { useState } from 'react'
import { Button, StyleSheet, Text, Touchable, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { GreenFade, colorPrimary } from '../../../containers/utils/color'

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
const SearchButton = (props) => {

    const [background, setBackground] = useState(!props.fade && colorPrimary)
    const render = () => {
        if(props.touchable){
            return (
                <TouchableOpacity onPress={props.onPress} style={[styles.container, {backgroundColor:props.fade ? colorPrimary : background}, props.containerStyle]}>
                    <Text style={{color:'#fff'}}>{props.title ?? 'Cari Buku'}</Text>
                </TouchableOpacity>
            )
        }else{
            return (
                <View style={[styles.container, {backgroundColor:props.fade ? colorPrimary : background}, props.containerStyle]}>
                    <Text style={{color:'#fff'}}>{props.title ?? 'Cari Buku'}</Text>
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
        width: responsiveWidth(90),
        height: responsiveHeight(7),
        alignItems: 'center',
        backgroundColor: '#43B2EC',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: responsiveHeight(1.1),
    },

})

export default SearchButton