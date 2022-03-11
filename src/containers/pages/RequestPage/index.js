import { faCheck, faPaperPlane, faPencilAlt, faSync, faTimesCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { BottomSheet } from 'react-native-elements';
import MainButton from '../../../components/atoms/MainButton';
import Textfield from '../../../components/atoms/Textfield';
import Header from '../../../components/moleculs/Header';
import { colorBlue, colorBlur, colorDark, colorPrimary } from '../../utils/color';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import useRequestPage from './useRequestPage';
import moment from 'moment';
import nodata from '../../../assets/images/no_data.png'

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

const RequestPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDeleteVisible, setIsDeleteVisible] = useState(false);
    const [id,setId] = useState(0)
    const [inputRequest, setInputRequest] = useState({judul: "", description: ""})
    const { data, sendRequest, deleteRequest } = useRequestPage();

    return (
        <View style={{flex:1, position:'relative'}}>
            <Header />
            <ScrollView style={styles.container}>
                
                {data ? data.length > 0 ?
                    data.map((item) => {
                        return (
                            <View key={item.id} style={styles.listItem}>
                                <Text style={{color:colorPrimary, fontWeight:'bold'}}>{item.judul}</Text>
                                <Text style={{color:"#ccc"}}>{moment(item.created_at).format('DD MMM YYYY')}</Text>
                                <Text style={{color:'#999', fontWeight:'bold', marginTop:10}}>
                                    {item.description ?? "Tidak ada deskripsi"}
                                </Text>

                                <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop:10,}}>
                                    <View>
                                        <FontAwesomeIcon icon={item.status == 1 ? faSync : faCheck} style={{color:'orange'}} />
                                    </View>
                                    <TouchableOpacity onPress={() => {setId(item.id); setIsDeleteVisible(true)}} style={{marginLeft:10}}>
                                        <FontAwesomeIcon icon={faTrashAlt} style={{color:'red'}} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })
                    :
                        <View style={{width:'100%',justifyContent:'center', alignItems:'center'}}>
                            <Image source={nodata} style={{width:300, height:300, opacity:0.5}} />
                            <Text style={{color:colorDark}}>Upps, belum ada Request !!</Text>
                        </View> 
                :
                    new Array(3).fill("").map((item,i) => {
                        return (
                            <View key={i} style={styles.listItem}>
                                <ShimmerPlaceHolder style={{width:'70%', height:20, marginTop:3}}/>
                                <ShimmerPlaceHolder style={{width:'30%', height:10, marginTop:3}}/>
                                <ShimmerPlaceHolder style={{width:'100%', height:20, marginTop:20}}/>
                                <ShimmerPlaceHolder style={{width:'80%', height:20, marginTop:3}}/>
                                <ShimmerPlaceHolder style={{width:'90%', height:20, marginTop:3}}/>
                            </View>
                        )
                    })
                }
            </ScrollView>
            <TouchableOpacity onPress={() => {setIsVisible(true)}}  style={styles.floatCreate}>
                <FontAwesomeIcon icon={faPencilAlt} style={{color:'#fff'}} size={25} />
            </TouchableOpacity>



            <BottomSheet
            containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
            modalProps={{
                visible: isVisible,
            }}
            >  
                <View style={styles.container}>
                    <View style={styles.titleBox}>
                        <Text style={{fontSize:25, color: colorPrimary}}>Rekomendasikan Buku</Text>
                        <Text style={{fontSize:15, color:colorDark}}>Beritahu kami buku apa yang tidak ada di Perpus YP SIM !</Text>
                    </View>
                    <Textfield 
                        placeholder="Judul Buku ..." 
                        onChangeText={(value) => {
                            setInputRequest(prev => ({
                                ...prev,
                                judul : value
                            }))
                        }}
                    />
                    <Textfield 
                        placeholder="Keterangan buku ..." 
                        style={{marginTop:20}} 
                        onChangeText={(value) => {
                            setInputRequest(prev => ({
                                ...prev,
                                description : value
                            }))
                        }}
                    />
                    <MainButton onPress={() => {sendRequest(inputRequest); setIsVisible(false)}} touchable={true} title={
                        <>
                            <FontAwesomeIcon icon={faPaperPlane} style={{color:'#fff',}} />
                            <Text style={{fontSize:20}}> Kirim Informasi</Text>
                        </>
                    } containerStyle={{marginTop:20}} />
                    <MainButton onPress={() => {setIsVisible(false)}} touchable={true} title={
                        <>
                            <Text style={{fontSize:20}}> Tutup</Text>
                        </>
                    } containerStyle={{marginTop:10, backgroundColor:'#f25771'}} />
                </View>
            </BottomSheet>

            <BottomSheet containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
            modalProps={{
                visible: isDeleteVisible,
            }}>
                <View style={styles.container}>
                    <View style={styles.titleBox}>
                        <Text style={{fontSize:25, color: colorPrimary}}>Hapus Request</Text>
                        <Text style={{fontSize:15, color:colorDark}}>Tindakan ini tidak dapat dikembalikan !</Text>
                    </View>
                    <View style={{justifyContent:'space-between', flexDirection:'row'}}>
                        <View style={{width:'49%'}}>
                            <MainButton touchable onPress={() => {setId(0); setIsDeleteVisible(false)}} title={"Batal"} containerStyle={{backgroundColor:'#f25771'}} />
                        </View>
                        <View style={{width:'49%'}}>
                            <MainButton touchable onPress={() => {deleteRequest(id); setIsDeleteVisible(false); setId(0);}} title={"Hapus"} />
                        </View>
                    </View>
                </View>
            </BottomSheet>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor:'#fff',
    },
    titleBox: {
        alignContent:'center',
        paddingBottom:20
    },
    floatCreate: {
        width:70,
        height:70,
        backgroundColor:colorPrimary,
        position:'absolute',
        bottom:20,
        right:20,
        borderRadius:100,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    listItem: {
        borderStyle:'solid',
        borderColor:'#ddd',
        borderWidth:1,
        borderRadius:10,
        padding:20,
        marginTop:20
    }
})

export default RequestPage;
