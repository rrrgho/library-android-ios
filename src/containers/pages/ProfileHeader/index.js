import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import ProfilePicture from '../../../components/moleculs/ProfilePicture'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'

const ProfileHeader = () => {
    return (
        <>
        <View style={styles.waletContainer}>
            <FontAwesomeIcon icon={ faTrophy } size={25} style={{color:'yellow'}}/>
        </View>
        <View style={styles.profileContainer}>
            <View>
                <ProfilePicture image="https://www.kavs.uniza.sk/images/Avatar_img/avatar-user-student-3e3e52aa56aeb627-512x512.png"/>
            </View>
            <View style={styles.identity}>
                <Text style={{fontSize:15,color:'#fff',fontWeight:'bold'}}>181111196</Text>
                <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>Rian Iregho</Text>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    waletContainer:{
        height:130,
        alignItems:'flex-end',
        paddingTop:20,
        paddingRight:10
    },
    profileContainer:{
        flexDirection:'row',
    },
    identity:{
        justifyContent:'center',
        marginLeft:10
    }
})

export default ProfileHeader
