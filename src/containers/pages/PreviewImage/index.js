import React, { useState } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import RNFS from 'react-native-fs'
import MainButton from '../../../components/atoms/MainButton';
import { POSTFILEAUTH } from '../../../config/Axios';
import TextRecognition from 'react-native-text-recognition';
import fisika from '../../../assets/images/fisika.png'
import robosim from '../../../assets/images/robosim.jpg'
import startbutton from '../../../assets/images/start.jpg'
import starton from '../../../assets/images/starton.gif'
import MlkitOcr from 'react-native-mlkit-ocr';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import FloatingCamera from '../../organisms/FloatingCamera';

const PreviewImage = ({route, navigation}) => {
    const { image_string } = route.params
    const [detected, setDetect] = useState([])
    const [process, setProcess] = useState(false)
    const source_image = "file://"+RNFS.ExternalDirectoryPath + `/${image_string}.jpg`;

    const formData = new FormData()
    formData.append('image', {
        uri: source_image,
        name: 'image',
        type: 'multipart/form-data', 
    })
    const handleSubmit = async () => {
        setProcess(true)
        const resultFromUri = await MlkitOcr.detectFromUri(source_image);
        if(resultFromUri){
            setDetect([...resultFromUri])
            setProcess(false)
        }
        console.log(resultFromUri)
        console.log(source_image)
        
    }
    return (
        <View style={styles.container}>
            <Image source={robosim} style={{width:'100%', height:200, borderRadius:20}} />
            {/* <View style={{marginTop:20}}>
                <MainButton touchable title="Deteksi Judul" onPress={() => {handleSubmit()}}/>
            </View> */}

            {
                detected.length > 0 ?
                <View style={styles.containerInfo}>
                    <Text style={{fontSize:responsiveFontSize(1.3)}}>
                        RoboSim sudah deteksi kata kata dari foto yang kamu kasih nih
                    </Text>
                    <Text style={{fontSize:responsiveFontSize(1.3)}}>
                        Silahkan pilih dan klik kata - kata yang menurut kamu sesuai ya
                    </Text>
                </View> :
                <>
                <View style={styles.containerInfoProcess}>
                    <Text style={{fontSize:responsiveFontSize(1.3)}}>
                        Gambar nya sudah disimpan nih oleh RoboSim,
                    </Text>
                    <Text style={{fontSize:responsiveFontSize(1.3)}}>
                        Klik tombol dibawah ya biar RoboSim bisa mulai mendeteksi judul kamu
                    </Text>                    
                </View>
                <View style={{justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                    {
                        !process ?
                        <TouchableOpacity onPress={() => {handleSubmit()}}>
                            <Image source={startbutton} style={{width:responsiveWidth(50), height:responsiveHeight(30)}} />
                        </TouchableOpacity> :
                        <Text style={{marginTop:20, fontSize:20}}>Robosim sedang memproses ...</Text>
                    }                   
                    
                </View>
                </>
            }
            
            <ScrollView style={{height:responsiveHeight(60), marginTop:10}}>
            {
                detected && detected.map((item,idx) => {
                    return (
                        <TouchableOpacity key={idx} style={styles.list}
                            onPress={() => {
                                navigation.navigate("BooksPage", {
                                    ocr_search: item.text
                                })
                                RNFS.unlink(source_image)
                            }}
                        >
                            <Text style={{fontSize:responsiveFontSize(1.3)}}>{item.text}</Text>
                        </TouchableOpacity>
                    )
                })
            }
            </ScrollView>
            <FloatingCamera />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding:15,
        backgroundColor:'#fff'
    },
    containerInfo:{
        padding:10,
        backgroundColor:'#d6ffe9',
        borderRadius:6
    },
    containerInfoProcess:{
        padding:10,
        backgroundColor:'#f7e39e',
        borderRadius:6
    },
    list:{
        padding:10,
        borderStyle:'solid',
        borderColor:'#888',
        borderWidth:0.3,
        marginTop:10,
        borderRadius:6
    }
})

export default PreviewImage;
