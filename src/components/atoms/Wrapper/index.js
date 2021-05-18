import React from 'react'
import { StyleSheet, View } from 'react-native'

const Wrapper = ({children,style}) => {
    return (
        <View style={[styles.container,style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        paddingLeft:15,
        paddingRight:15,
    }
})

export default Wrapper
