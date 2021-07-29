import React from 'react'
import {View,Text,StyleSheet, TouchableOpacity, AsyncStorage} from 'react-native'
import Wrapper from '../../../components/atoms/Wrapper'
import { colorPrimary } from '../../utils/color'
import ProfileHeader from '../../organisms/ProfileHeader'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const ProfilePage = ({navigation}) => {
    const logout = async () => {
        await AsyncStorage.clear()
        .then(() => {
            navigation.navigate('SplashScreen')
        })
    }
    return (
        <>
            <View style={styles.container}>
                <Wrapper>
                    <ProfileHeader />
                </Wrapper>
            </View>
            <View style={styles.contentContainer}> 
                <TouchableOpacity onPress={() => {logout()}} style={{flexDirection:'row', borderStyle:'solid', borderBottomWidth:1, borderBottomColor:'#ccc', padding:20}} >
                    <FontAwesomeIcon size={20} icon={faSignOutAlt} style={{color:colorPrimary}} />
                    <Text style={{marginLeft:10, fontSize:15, color:'#888'}}>Logout</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colorPrimary,
    },
    contentContainer:{
        height:'70%',
        backgroundColor:'#fff',
    },

})

export default ProfilePage
