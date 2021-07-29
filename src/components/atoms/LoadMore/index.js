import React, { useState } from 'react'
import { Button, StyleSheet, Text, Touchable, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { colorBlue, colorPrimary } from '../../../containers/utils/color'

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
const LoadMore = (props) => {

    const [background, setBackground] = useState(!props.fade && colorPrimary)
    const render = () => {
        if(props.touchable){
            return (
                <TouchableOpacity onPress={props.onPress} style={[styles.container, {backgroundColor:props.fade ? colorBlue : background}, props.containerStyle]}>
                    <FontAwesomeIcon style={{color:'#fff'}} icon={faSyncAlt} /><Text style={{color:'#FFFFFF', marginLeft:10}}>{props.title ?? 'Load More'}</Text>
                </TouchableOpacity>
            )
        }else{
            return (
                <View style={[styles.container, {backgroundColor:props.fade ? colorBlue : background}, props.containerStyle]}>
                    <FontAwesomeIcon style={{color:'#fff'}} icon={faSyncAlt} /><Text style={{color:'#FFFFFF', marginLeft:10}}>{props.title ?? 'Load More'}</Text>
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
        backgroundColor: '#16B1CF',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: responsiveHeight(1.1),
        flexDirection:'row'
    },

})

export default LoadMore