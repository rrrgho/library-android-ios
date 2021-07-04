import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { Button, Dimensions, ScrollView, View, Text } from 'react-native'
import { SliderBox } from "react-native-image-slider-box"
import NavigationReport from '../../../components/moleculs/NavigationReport'
import { GET } from '../../../config/Axios';

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
        <View style={{flex:1}}>
            <ScrollView>
                {images.length > 0 ?
                    <SliderBox
                        images={images}
                    />
                    :
                    <Text>Loading ...</Text>
                }
            </ScrollView>  

            <TouchableOpacity onPress={() => {check()}}>
                <Text>Click dong</Text> 
            </TouchableOpacity> 

        </View>
        <View style={{height:100, padding:20, marginTop:-10}}>
            <NavigationReport/>
        </View>
        </>

    )
}
            
export default HomePage
