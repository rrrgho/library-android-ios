import { faComment, faCommentAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { Button, Dimensions, ScrollView, View, Text, StyleSheet } from 'react-native'
import { SliderBox } from "react-native-image-slider-box"
import LinearGradient from 'react-native-linear-gradient';
import NavigationReport from '../../../components/moleculs/NavigationReport'
import { GET } from '../../../config/Axios';
import LevelFloating from '../../organisms/LevelFloating';
import MainMenu from '../../organisms/MainMenu';
import { colorPrimary } from '../../utils/color';

import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import Information from '../../organisms/Information';
import SliderBanner from '../../organisms/SliderBanner';
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

const {width} = Dimensions.get("window");
const {height} = width *100 / 60;

const HomePage = ({navigation, style, ...props}) => {
    const [images, setImages] = useState([])
    useEffect(() => {
        navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
        })
    },[])

    const getData = async () => {
        let request = await GET('/slide-banner')
        var result = ""
        if(request.status === 200){
            result = request.data.data
        }else{
            console.log("Internet putus, server tidak respons !")
        }
        
        const dataBanner = []
        if(result.length > 0){
            result.map((item) => {
                dataBanner.push(item.images)
            })
        }
        setImages(dataBanner)
    }   
    
    
    useEffect( () => {
        getData()
    }, [])
 

    const check = () => {
        console.log(images)
    }





    // This is image Datas
    return (
        <>
        <View style={{flex:1, backgroundColor:'#fff', paddingBottom:80}}>
            {/* <View style={styles.topHeader}>
                <TouchableOpacity>
                    <FontAwesomeIcon size={20} style={{color:colorPrimary}} icon={faComment}/>
                </TouchableOpacity>
            </View> */}
            <ScrollView style={{flex:1, backgroundColor:'#fff'}}>
                
                {/* {images.length > 0 ?
                    <SliderBox
                        images={images}
                    />
                    :
                    <View style={{width:'100%', height:200}}>
                        <ShimmerPlaceHolder style={{width:'100%', height:'100%'}}/>
                    </View>
                } */}

                <View style={styles.container}>
                    <View style={styles.headerIconBox}>
                        <TouchableOpacity style={{width:'auto', height:50}} onPress={() => {navigation.navigate('ListChat')}}>
                            <FontAwesomeIcon size={25} style={{color:'#fff'}} icon={faComment} />
                        </TouchableOpacity>
                    </View>
                </View>
                

                <LevelFloating />
                <MainMenu />
                <SliderBanner style={{container: {marginTop:20}}}/>
                <View style={{paddingHorizontal:35, marginTop:20}}>
                    <Text style={{color:'#666', fontSize:18}}>Informasi Perpustakaan : </Text>
                    <Text style={{color:'#888', fontSize:13}}>Klik banner untuk detail informasi : </Text>
                </View>
                <Information style={{container: {marginTop:20}}}/>
            </ScrollView>

        </View>
        <View style={{height:90, marginTop:100, marginTop:-10, backgroundColor:'transparent', position:'absolute', bottom:-5, left:0}}>
            <NavigationReport/>
        </View>
        </>

    )
}

const styles = StyleSheet.create({
    container:{
        height:150,
        backgroundColor:colorPrimary,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:30
    },
    topHeader : {
        width:'100%',
        height:50,
        backgroundColor:'#fff',
        elevation:3,
        alignItems:'flex-end',
        justifyContent:'center',
        paddingRight:20
    },
    headerIconBox:{
        width:'100%',
        height:50,
        flexDirection:'row',
        justifyContent:'flex-end',
        padding:20
    }
})
            
export default HomePage
