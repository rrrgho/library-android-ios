import React from 'react'
import {View,Text,StyleSheet, Image} from 'react-native'

const ProfilePicture = (props) => {
    return (
        <>
            <View style={styles.container}>
                <Image style={styles.imageStyle} source={{uri:`${props.image}`}}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        width:100,
        height:100,
        backgroundColor:'#fff',
        borderRadius:100,
        borderWidth:1,
        borderColor:'#fff'
    },
    imageStyle:{
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    }
})

export default ProfilePicture
