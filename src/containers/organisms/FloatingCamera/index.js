import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { colorPrimary } from '../../utils/color';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import { useNavigation } from '@react-navigation/native';

const FloatingCamera = (props) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {navigation.navigate("CameraPage")}} style={styles.cameraContainer} >
                <FontAwesomeIcon icon={faCamera} size={25} style={{color:'#fff'}} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(20),
        height: responsiveHeight(11),
        backgroundColor:colorPrimary,
        elevation:5,
        borderRadius:100,
        position:'absolute',
        bottom:30,
        right:30,
    },
    cameraContainer: {
        width:'100%',
        height:'100%',
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default FloatingCamera;
