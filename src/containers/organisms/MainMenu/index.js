import { faBullhorn, faFire, faRibbon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { colorDark, colorPrimary } from '../../utils/color';
import { useNavigation } from '@react-navigation/native';

const MainMenu = ({style}) => {
    const navigation = useNavigation()
    return (
        <View style={[styles.container, style && style.container]}>
            <View style={styles.rowMenu}>
                <TouchableOpacity style={{width:'auto', height:'auto', alignItems:'center', justifyContent:'center'}}>
                    <View style={styles.boxMenu}>
                        <FontAwesomeIcon size={20} style={{color:colorPrimary, opacity:0.9}} icon={faRibbon}/>
                    </View>
                    <Text style={{marginTop:5, color:colorDark}}>Level</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={{width:'auto', height:'auto', alignItems:'center', justifyContent:'center'}}>
                    <View style={styles.boxMenu}>
                        <FontAwesomeIcon size={20} style={{color:colorPrimary, opacity:0.9}} icon={faFire}/>
                    </View>
                    <Text style={{marginTop:5, color:colorDark}}>Populer</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{width:'auto', height:'auto', alignItems:'center', justifyContent:'center'}}>
                    <View style={styles.boxMenu}>
                        <FontAwesomeIcon size={20} style={{color:colorPrimary, opacity:0.9}} icon={faFire}/>
                    </View>
                    <Text style={{marginTop:5, color:colorDark}}>SelebPus</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate('InformationCollect')}} style={{width:'auto', height:'auto', alignItems:'center', justifyContent:'center'}}>
                    <View style={styles.boxMenu}>
                        <FontAwesomeIcon size={20} style={{color:colorPrimary, opacity:0.9}} icon={faBullhorn}/>
                    </View>
                    <Text style={{marginTop:5, color:colorDark}}>Informasi</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        paddingLeft:20,
        paddingRight:20,
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
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:5,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    }
})

export default MainMenu;
