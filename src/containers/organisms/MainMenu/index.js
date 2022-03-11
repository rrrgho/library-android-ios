import { faBullhorn, faFire, faHeart, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colorDark, colorPrimary } from '../../utils/color';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from 'react-native-responsive-dimensions';

const MainMenu = ({style}) => {
    const navigation = useNavigation()
    return (
        <View style={[styles.container, style && style.container]}>
            <View style={styles.rowMenu}>
                {/* <TouchableOpacity style={{width:'auto', height:'auto', alignItems:'center', justifyContent:'center'}}>
                    <View style={styles.boxMenu}>
                        <FontAwesomeIcon size={20} style={{color:colorPrimary, opacity:0.9}} icon={faRibbon}/>
                    </View>
                    <Text style={{marginTop:5, color:colorDark}}>Level</Text>
                </TouchableOpacity> */}
                
                <TouchableOpacity onPress={() => {navigation.navigate('Wishlist')}} style={{width:'auto', height:'auto', alignItems:'center', justifyContent:'center'}}>
                    <View style={[styles.boxMenu, {backgroundColor:'#f7d257'}]}>
                        <FontAwesomeIcon size={20} style={{color:'#fff', opacity:0.9}} icon={faHeart}/>
                    </View>
                    <Text style={{marginTop:5, color:colorDark, fontSize:responsiveFontSize(1.1)}}>Wishlist</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate('SelebPus')}} style={{width:'auto', height:'auto', alignItems:'center', justifyContent:'center'}}>
                    <View style={[styles.boxMenu, {backgroundColor:colorPrimary}]}>
                        <FontAwesomeIcon size={20} style={{color:'#fff', opacity:0.9}} icon={faFire}/>
                    </View>
                    <Text style={{marginTop:5, color:colorDark, fontSize:responsiveFontSize(1.1)}}>SelebPus</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate('InformationCollect')}} style={{width:'auto', height:'auto', alignItems:'center', justifyContent:'center'}}>
                    <View style={[styles.boxMenu, {backgroundColor:'#12afe3'}]}>
                        <FontAwesomeIcon size={20} style={{color:'#fff', opacity:0.9}} icon={faBullhorn}/>
                    </View>
                    <Text style={{marginTop:5, color:colorDark, fontSize:responsiveFontSize(1.1)}}>Informasi</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate('RequestScreen')}} style={{width:'auto', height:'auto', alignItems:'center', justifyContent:'center'}}>
                    <View style={[styles.boxMenu, {backgroundColor:'#f5844c'}]}>
                        <FontAwesomeIcon size={20} style={{color:'#fff', opacity:0.9}} icon={faPencilAlt}/>
                    </View>
                    <Text style={{marginTop:5, color:colorDark, fontSize:responsiveFontSize(1.1)}}>Request</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        // paddingLeft:20,
        // paddingRight:20,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
    },
    rowMenu:{
        width:'90%',
        height:'auto',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    boxMenu:{
        width:50,
        height:50,
        backgroundColor:'#fff',
        // borderStyle:'solid',
        // borderWidth:1,
        // borderColor:'#ccc',
        borderRadius:5,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    }
})

export default MainMenu;
