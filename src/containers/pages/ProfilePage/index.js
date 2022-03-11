import { faCog, faKey, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { BackHandler } from 'react'
import { AsyncStorage, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Wrapper from '../../../components/atoms/Wrapper'
import Header from '../../../components/moleculs/Header'
import ProfileHeader from '../../organisms/ProfileHeader'
import { colorPrimary } from '../../utils/color'
import NavigationReport from '../../../components/moleculs/NavigationReport'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from 'react-native-responsive-dimensions';

const ProfilePage = ({navigation}) => {
    const logout = async () => {
        await AsyncStorage.clear();
        // alert("Berhasil Logout, jika anda tidak dialihkan, silahkan tutup aplikasi untuk login kembali !")
        navigation.navigate("LoginPage")
        // BackHandler.exitApp();
    }

    return (
        <>
            {/* <Header /> */}
            <View style={styles.container}>
                <Wrapper>
                    <ProfileHeader />
                </Wrapper>
            </View>
            <View style={styles.contentContainer}> 
                <TouchableOpacity onPress={() => {logout()}} style={{flexDirection:'row', borderStyle:'solid', borderBottomWidth:0.3, borderBottomColor:'#ccc', padding:20}} >
                    <FontAwesomeIcon size={responsiveFontSize(2)} icon={faSignOutAlt} style={{color:colorPrimary}} />
                    <Text style={{marginLeft:10, fontSize:responsiveFontSize(1.3), color:'#888'}}>Logout</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => {navigation.navigate("SettingPreference")}} style={{flexDirection:'row', borderStyle:'solid', borderBottomWidth:0.3, borderBottomColor:'#ccc', padding:20}} >
                    <FontAwesomeIcon size={responsiveFontSize(2)} icon={faCog} style={{color:colorPrimary}} />
                    <Text style={{marginLeft:10, fontSize:responsiveFontSize(1.3), color:'#888'}}>Setting Preference</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate("ChangePassword")}} style={{flexDirection:'row', borderStyle:'solid', borderBottomWidth:0.3, borderBottomColor:'#ccc', padding:20}} >
                    <FontAwesomeIcon size={responsiveFontSize(2)} icon={faKey} style={{color:colorPrimary}} />
                    <Text style={{marginLeft:10, fontSize:responsiveFontSize(1.3), color:'#888'}}>Change Password</Text>
                </TouchableOpacity>
            </View>
            {/* <View style={{height:90, width:'100%', marginTop:100, marginTop:-10, backgroundColor:'transparent', position:'absolute', bottom:-5, left:0}}>
                    <NavigationReport/>
                </View> */}
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colorPrimary,
    },
    contentContainer:{
        height:responsiveHeight(70),
        backgroundColor:'#fff',
    },

})

export default ProfilePage
