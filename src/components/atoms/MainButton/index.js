import React, { useState } from 'react'
import { Button, StyleSheet, Text, Touchable, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { GreenFade, colorPrimary } from '../../../containers/utils/color'


const MainButton = (props) => {

    const [background, setBackground] = useState(!props.fade && colorPrimary)
    const render = () => {
        if(props.touchable){
            return (
                <TouchableOpacity onPress={props.onPress} style={[styles.container, {backgroundColor:props.fade ? GreenFade : background}, props.containerStyle]}>
                    <Text style={[{color:'#fff'}, props.textStyle]}>{props.title ?? 'Title'}</Text>
                </TouchableOpacity>
            )
        }else{
            return (
                <View style={[styles.container, {backgroundColor:props.fade ? GreenFade : background}, props.containerStyle]}>
                    <Text style={[{color:'#fff'}, props.textStyle]}>{props.title ?? 'Title'}</Text>
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
        width:'100%',
        height:50,
        backgroundColor:colorPrimary,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        width:'100%',
        height:40,
    }
})

export default MainButton