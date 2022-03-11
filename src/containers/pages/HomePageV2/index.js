import { faComment, faCommentAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HomeImage from '../../../assets/images/reading-flat.png';
import NavigationReport from '../../../components/moleculs/NavigationReport';
import Information from '../../organisms/Information';
import MainMenu from '../../organisms/MainMenu';
import Notification from '../../organisms/Notification';
import SliderBanner from '../../organisms/SliderBanner';
import IdentitySection from '../../organisms/v2/Identity';
import { colorPrimary } from '../../utils/color';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from 'react-native-responsive-dimensions';
import { color } from 'react-native-reanimated';

const HomePageV2 = ({navigation}) => {
    return (
        <>
        <View style={styles.wrapper}>
            
            <View style={styles.block}>

            </View>
            <View style={{width:'100%', height:300, backgroundColor:'transparent'}}>
                <Image source={HomeImage} style={{width:'100%', marginTop:-50}} />
            </View>

            <View style={styles.floatingSheet}>
                <View style={styles.container}>
                    <View style={styles.chatBox}>
                        <TouchableOpacity onPress={() => {navigation.navigate('ListChat')}}>
                            <FontAwesomeIcon icon={faComment} size={30} style={{color: '#fff'}} />
                        </TouchableOpacity>
                    </View>

                    <IdentitySection />

                    <View style={{marginTop:20}}>
                        <Notification />
                    </View>

                    <ScrollView>
                        <View style={{marginTop:30}}>
                            <MainMenu />
                        </View>

                        <View style={{marginTop:30, display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            {/* <Information /> */}
                            <Text style={{fontSize:responsiveFontSize(1.2), color:'#888'}}>Made with</Text>
                            <FontAwesomeIcon icon={faHeart} size={responsiveFontSize(2)} style={{marginTop:responsiveHeight(0.1), marginLeft:responsiveWidth(1), color: 'pink'}} />
                            <Text style={{fontSize:responsiveFontSize(1.2), color:'#888', marginLeft:responsiveWidth(1)}}>By Mikroskil</Text>
                        </View>
                    </ScrollView>
                </View>
                {/* <View style={{height:90, width:'100%', marginTop:100, marginTop:-10, backgroundColor:'transparent', position:'absolute', bottom:-5, left:0}}>
                    <NavigationReport/>
                </View> */}
            </View>
            
            
            
        </View>
        {/* <View style={styles.blockContainer}>

        </View> */}
        </>
    );
}

const styles = StyleSheet.create({
    
    wrapper: {
        height: '100%',
        backgroundColor: '#7cf285',
        position: 'relative'
    },
    floatingSheet: {
        width: '100%',
        height: responsiveHeight(50),
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius:50,
        borderTopEndRadius: 50,
        elevation: 20,
        zIndex:9
    },
    blockContainer:{
        position:'absolute',
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,0.5)',
        zIndex:100
    },
    block: {
        width: '100%',
        height:'100%',
        backgroundColor: 'rgba(0,0,0,0.2)',
        position:'absolute',
        top:0,
        zIndex:8
    },
    container: {
        flex:1,
        borderTopLeftRadius:50,
        borderTopEndRadius: 50,
        backgroundColor:'#fff',
        padding:30
    },
    chatBox: {
        position:'absolute',
        top:-20,
        width:60,
        height:60,
        borderRadius:100,
        right:30,
        backgroundColor:'orange',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    }
})

export default HomePageV2;
