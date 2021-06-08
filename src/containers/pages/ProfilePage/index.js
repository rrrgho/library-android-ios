import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Wrapper from '../../../components/atoms/Wrapper'
import { colorPrimary } from '../../utils/color'
import ProfileHeader from '../../organisms/ProfileHeader'

const ProfilePage = () => {
    return (
        <>
            <View style={styles.container}>
                <Wrapper>
                    <ProfileHeader />
                </Wrapper>
            </View>
            <View style={styles.contentContainer}> 
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
        backgroundColor:'#fff'
    },

})

export default ProfilePage
