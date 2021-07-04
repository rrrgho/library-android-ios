import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { Button, Dimensions, ScrollView, View, Text } from 'react-native'
import { SliderBox } from "react-native-image-slider-box"
import LinearGradient from 'react-native-linear-gradient';
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
            <TouchableOpacity style={{backgroundColor:"red"}}>
                </TouchableOpacity>  
                <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold'}}>Siswa Terpopuler</Text>
                <Text style={{textAlign:'center'}}>Siswa Terpopuler berdasarkan jumlah point terbanyak akumulasi peminjaman</Text>
                <View style={{overflow:'hidden', flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}}>
                    <View style={{height:120, width:120 ,backgroundColor:"#2bdbdc", margin:10, borderRadius:10}}>
                        <Text style={{textAlign:'center', color:'white', marginTop:10}}>Hi</Text>
                        <Text style={{textAlign:'center', color:'white', marginTop:10}}>Hi</Text>
                        <Text style={{textAlign:'center', color:'white', marginTop:10}}>Hi</Text>
                        <TouchableOpacity style={{borderWidth:1, borderRadius:10, borderStyle:'solid',backgroundColor:'white', marginTop:5, marginLeft:30, marginRight:30}}><Text style={{textAlign:'center'}}>Kilk</Text></TouchableOpacity>
                    </View>
                    <View style={{height:120, width:120, backgroundColor:"#2bdbdc", margin:10, borderRadius:10}}>
                        <Text style={{textAlign:'center', color:'white', marginTop:10}}>Hi</Text>
                        <Text style={{textAlign:'center', color:'white', marginTop:10}}>Hi</Text>
                        <Text style={{textAlign:'center', color:'white', marginTop:10}}>Hi</Text>
                        <TouchableOpacity style={{borderWidth:1, borderRadius:10, borderStyle:'solid',backgroundColor:'white', marginTop:5, marginLeft:30, marginRight:30}}><Text style={{textAlign:'center'}}>Kilk</Text></TouchableOpacity>
                    </View>
                    <View style={{height:120, width:120 ,backgroundColor:"#2bdbdc", margin:10, borderRadius:10}}>
                        <Text style={{textAlign:'center', color:'white', marginTop:10}}>Hi</Text>
                        <Text style={{textAlign:'center', color:'white', marginTop:10}}>Hi</Text>
                        <Text style={{textAlign:'center', color:'white', marginTop:10}}>Hi</Text>
                        <TouchableOpacity style={{borderWidth:1, borderRadius:10, borderStyle:'solid',backgroundColor:'white', marginTop:5, marginLeft:30, marginRight:30}}><Text style={{textAlign:'center'}}>Kilk</Text></TouchableOpacity>
                    </View>
                    <View style={{height:120, width:120, backgroundColor:"#2bdbdc", margin:10, borderRadius:10}}>
                        <Text style={{textAlign:'center', color:'white', marginTop:10}}>Hi</Text>
                        <Text style={{textAlign:'center', color:'white', marginTop:10}}>Hi</Text>
                        <Text style={{textAlign:'center', color:'white', marginTop:10}}>Hi</Text>
                        <TouchableOpacity style={{borderWidth:1, borderRadius:10, borderStyle:'solid',backgroundColor:'white', marginTop:5, marginLeft:30, marginRight:30}}><Text style={{textAlign:'center'}}>Kilk</Text></TouchableOpacity>
                    </View>
                    <View style={{height:120, width:120, backgroundColor:"#2bdbdc", margin:10, borderRadius:10}}>
                        <Text style={{textAlign:'center', color:'white', marginTop:10}}>Hi</Text>
                        <Text style={{textAlign:'center', color:'white', marginTop:10}}>Hi</Text>
                        <Text style={{textAlign:'center', color:'white', marginTop:10}}>Hi</Text>
                        <TouchableOpacity style={{borderWidth:1, borderRadius:10, borderStyle:'solid',backgroundColor:'white', marginTop:5, marginLeft:30, marginRight:30}}><Text style={{textAlign:'center'}}>Kilk</Text></TouchableOpacity>
                    </View>
                    <View style={{height:120, width:120, backgroundColor:"#2bdbdc", margin:10, borderRadius:10}}>
                        <Text style={{textAlign:'center', color:'white', marginTop:10}}>Hi</Text>
                        <Text style={{textAlign:'center', color:'white', marginTop:10}}>Hi</Text>
                        <Text style={{textAlign:'center', color:'white', marginTop:10}}>Hi</Text>
                        <TouchableOpacity style={{borderWidth:1, borderRadius:10, borderStyle:'solid',backgroundColor:'white', marginTop:5, marginLeft:30, marginRight:30}}><Text style={{textAlign:'center'}}>Kilk</Text></TouchableOpacity>
                    </View>
                    <View style={{height:120, width:120, backgroundColor:"#2bdbdc", margin:10, borderRadius:10}}>
                        <Text style={{textAlign:'center', color:'white', marginTop:10}}>Hi</Text>
                        <Text style={{textAlign:'center', color:'white', marginTop:10}}>Hi</Text>
                        <Text style={{textAlign:'center', color:'white', marginTop:10}}>Hi</Text>
                        <TouchableOpacity style={{borderWidth:1, borderRadius:10, borderStyle:'solid',backgroundColor:'white', marginTop:5, marginLeft:30, marginRight:30}}><Text style={{textAlign:'center'}}>Kilk</Text></TouchableOpacity>
                    </View>
                    <View style={{height:120, width:120, backgroundColor:"#2bdbdc", margin:10, borderRadius:10}}>
                        <Text style={{textAlign:'center', color:'white', marginTop:10}}>Hi</Text>
                        <Text style={{textAlign:'center', color:'white', marginTop:10}}>Hi</Text>
                        <Text style={{textAlign:'center', color:'white', marginTop:10}}>Hi</Text>
                        <TouchableOpacity style={{borderWidth:1, borderRadius:10, borderStyle:'solid',backgroundColor:'white', marginTop:5, marginLeft:30, marginRight:30}}><Text style={{textAlign:'center'}}>Kilk</Text></TouchableOpacity>
                    </View>
                    <View style={{height:120, width:120, backgroundColor:"#2bdbdc", margin:10, borderRadius:10}}>
                        <Text style={{textAlign:'center', color:'white', marginTop:10}}>Hi</Text>
                        <Text style={{textAlign:'center', color:'white', marginTop:10}}>Hi</Text>
                        <Text style={{textAlign:'center', color:'white', marginTop:10}}>Hi</Text>
                        <TouchableOpacity style={{borderWidth:1, borderRadius:10, borderStyle:'solid',backgroundColor:'white', marginTop:5, marginLeft:30, marginRight:30}}><Text style={{textAlign:'center'}}>Kilk</Text></TouchableOpacity>
                    </View>
                </View>
            </ScrollView> 
            <TouchableOpacity onPress={() => {check()}}>
                <Text>Click dong</Text> 
            </TouchableOpacity> 

        </View>
        <View style={{height:100, marginTop:100, marginTop:-10}}>
            <NavigationReport/>
        </View>
        </>

    )
}
            
export default HomePage
