import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import LinearGradient from 'react-native-linear-gradient';
import { Text, StyleSheet, View } from 'react-native';
import { faBook, faBookReader, faHistory, faHome, faUserShield } from '@fortawesome/free-solid-svg-icons';
import theme1 from '../../atoms/ColorPrimary';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import { colorPrimary } from '../../../containers/utils/color';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from 'react-native-responsive-dimensions';

const NavigationReport = ({Profile},props) => {
    const navigation = useNavigation();
    const route = useRoute();
    return  (
        <View style={[styles.container]}>
            <TouchableOpacity onPress={() => {navigation.navigate('HomePage')}} style={styles.boxNav}>
                <View style={styles.iconBox}>
                    <FontAwesomeIcon style={{color: route.name == 'HomePage' ? colorPrimary : '#888' }} size={25} icon={ faHome }/>
                    <Text style={{color: route.name == 'HomePage' ? colorPrimary : '#888' , marginTop:5, fontSize: responsiveFontSize(1.2)}}>Home</Text>
                </View>
                {/* <Text style={styles.iconText}>Buku</Text> */}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('EbooksPage')}} style={styles.boxNav}>
                <View style={styles.iconBox}>
                    <FontAwesomeIcon style={{color: route.name == 'EbooksPage' ? colorPrimary : '#888'}} size={25} icon={ faBookReader }/>
                    <Text style={{color: route.name == 'EbooksPage' ? colorPrimary : '#888', marginTop:5, fontSize: responsiveFontSize(1.2)}}>E-Book</Text>
                </View>
                {/* <Text style={styles.iconText}>Buku</Text> */}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('BooksPage')}} style={styles.boxNav}>
                <View style={styles.iconBox}>
                    <FontAwesomeIcon style={{color: route.name == 'BooksPage' ? colorPrimary : '#888'}} size={25} icon={ faBook }/>
                    <Text style={{color: route.name == 'BooksPage' ? colorPrimary : '#888', marginTop:5, fontSize: responsiveFontSize(1.2)}}>Buku</Text>
                </View>
                {/* <Text style={styles.iconText}>Buku</Text> */}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('HistoryPage')}} style={styles.boxNav}>
                <View style={styles.iconBox}>
                    <FontAwesomeIcon style={{color: route.name == 'HistoryPage' ? colorPrimary : '#888'}} size={25} icon={ faHistory }/>
                    <Text style={{color: route.name == 'HistoryPage' ? colorPrimary : '#888', marginTop:5, fontSize: responsiveFontSize(1.2)}}>Riwayat</Text>
                </View>
                {/* <Text style={styles.iconText}>History</Text> */}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('ProfilePage')}} style={styles.boxNav}>
                <View style={styles.iconBox}>
                    <FontAwesomeIcon style={{color: route.name == 'ProfilePage' ? colorPrimary : '#888'}} size={25} icon={ faUserShield }/>
                    <Text style={{color: route.name == 'ProfilePage' ? colorPrimary : '#888', marginTop:5, fontSize: responsiveFontSize(1.2)}}>Akun</Text>
                </View>
                {/* <Text style={styles.iconText}>Profile</Text> */}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height: responsiveHeight(8),
        backgroundColor:'#fff',
        // borderRadius:100,
        // borderWidth:1,
        borderColor:'#ddd',
        marginTop:15,
        flexDirection:'row',
        justifyContent:'space-around',
        alignContent:'center',
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10
    },
    boxNav:{
        width:100,
        height:undefined,
        backgroundColor:'#fff',
        // marginTop:8,
        alignItems:'center',
        justifyContent:'center',
    },
    iconBox:{
        width:50,
        height:50,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center'
    },
    iconText:{
        marginTop:6,
        textTransform: 'uppercase',
        fontSize:12,
        textAlign:'center'
    }
})

export default NavigationReport