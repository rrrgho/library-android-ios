import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import CustomButton from '../../../components/moleculs/CustomButton';
import RNFS from 'react-native-fs'
import { useNavigation } from '@react-navigation/native';
import PleaseWaitImage from '../../../assets/images/pleasewait.jpeg'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { colorPrimary } from '../../utils/color';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const CameraPage = ({initialProps}) => {
    const navigation = useNavigation()
    const [{ cameraRef },
        {
            toggleFacing,
            touchToFocus,
            textRecognized,
            facesDetected,
            recordVideo,
            setIsRecording,
            takePicture
          }
    ] = useCamera(initialProps);
    const [capture, setCapture] = useState(false)

    const captureHandle = async () => {
        setTimeout(() => {
            setCapture(true)
        }, 300)
        try {
            const data = await takePicture();
            let r = (Math.random() + 1).toString(36).substring(7);
            const filePath = data.uri;
            const newFilePath = RNFS.ExternalDirectoryPath + `/${r}.jpg`;
            RNFS.moveFile(filePath, newFilePath)
                .then(() => {
                    console.log('IMAGE MOVED', filePath, '-- to --', newFilePath);
                    navigation.navigate("PreviewImage", {
                        image_string: r
                    })
                    setCapture(false)
                })
                .catch(error => {
                    console.log(error);
                    setCapture(false)
                    alert("Gagal mengambil gambar")
                })
        } catch (error) {
            console.log(error);
            setCapture(false)
            alert("Gagal mengambil gambar")
        }
    }

    return (
        <>
                <View style={styles.body}>
                        <RNCamera
                            ref={cameraRef}
                            type={RNCamera.Constants.Type.back}
                            style={styles.preview}
                            trackingEnabled
                            ratio={'16:9'}
                            focusDepth={0}
                        >
                            <View style={styles.containerCapture}>
                                <TouchableOpacity style={styles.buttonCapture} onPress={() => captureHandle()}>
                                    <FontAwesomeIcon icon={faCamera} size={25} style={{color:'#fff'}} />
                                </TouchableOpacity>
                            </View>
                        </RNCamera>
                        
                    
                </View> 

                    

                {
                    capture &&
                    <View style={styles.loadingContainer}>
                        <>
                            <Image source={PleaseWaitImage}  />
                            <Text>Mohon tunggu,</Text>
                            <Text>Gambar anda sedang diproses ...</Text>
                        </>
                    </View>
                }
                
        

        
        </>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    containerCapture:{
        width: responsiveWidth(20),
        height: responsiveHeight(10),
        backgroundColor:colorPrimary,
        borderRadius:100,
        marginBottom:50,
        alignItems:'center',
        justifyContent:'center'
    },
    loadingContainer: {
        backgroundColor:'#fff',
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        position:'absolute',
        top:0,
        width:'100%',
        height:'100%'
    },
    preview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
});

export default CameraPage