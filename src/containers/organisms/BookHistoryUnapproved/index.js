import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, FlatList, Image } from 'react-native'
import { GETAUTH, POSTAUTH } from '../../../config/Axios';
import {colorBlur, colorDark, colorPrimary} from '../../utils/color'
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import { ScrollView } from 'react-native';
import nodata from '../../../assets/images/no_data.png'
import Moment from 'moment';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { BottomSheet, ListItem } from 'react-native-elements';
import MainButton from '../../../components/atoms/MainButton'


const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

const BookHistoryUnapproved = () => {
    const [DATA, setDATA] = useState()
    const navigation = useNavigation()

    // Bottom Sheet
    const [isVisible, setIsVisible] = useState(false);
    const [cancelData,setCancelData] = useState()
    const list = [
        { title: 'List Item 1' },
        { title: 'List Item 2' },
        {
          title: 'Cancel',
          containerStyle: { backgroundColor: 'red' },
          titleStyle: { color: 'white' },
          onPress: () => setIsVisible(false),
        },
    ];

    const batalkanPinjaman = async (data) => {

        let cancelOrder = await POSTAUTH('/return-book', {id : data.id})
        if(cancelOrder.status === 200){
            let request = await GETAUTH('/no-approved');
            if(request.status === 200){
                let data = request.data.data
                setDATA(data)
            }
        }else{
            alert("Maaf, ada kesalahan pada server, coba lagi nanti !")
        }
    }


    useEffect( async () => {
        let request = await GETAUTH('/no-approved');
        if(request.status === 200){
            let data = request.data.data
            setDATA(data)
        }
        console.log(request)
    },[])

    const Item = ({ title }) => (
        <View style={styles.item}>
            {/* <View style={styles.image}>
                <Image style={styles.imageStyle} source={{uri:"https://img.freepik.com/free-vector/abstract-green-business-book-cover-page-brochure-template_1017-13933.jpg?size=338&ext=jpg"}} />
            </View> */}
            <TouchableOpacity onLongPress={() => {setIsVisible(true); setCancelData(title)}} style={styles.content}>
                <Text style={{fontSize:15}}>{title.book_relation.name}</Text>
                <Text style={{fontSize:13, color:'green'}}>{Moment(title.start_date).format('DD MMM YYYY')}</Text>
                {
                    <Text style={{color:'#888', marginTop:10}}>Silahkan datang ke perpus untuk mengambil buku, admin akan menyetujui bersamaan dengan pengambilan buku kamu !</Text>
                }
            </TouchableOpacity>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item} />
    );


    const shimmer = () => {
        const render = new Array(7).fill(0).map((item,index) => {
            return (
                <View key={index} style={styles.item}>
                    <View style={styles.image}>
                        <ShimmerPlaceHolder style={{width:'100%', height:'100%'}}/>
                    </View>
                    <View style={styles.content}>
                        <ShimmerPlaceHolder style={{width:'80%', height:20, marginTop:3}}/>
                        <ShimmerPlaceHolder style={{width:'95%', height:20, marginTop:3}}/>
                        <ShimmerPlaceHolder style={{width:'40%', height:20, marginTop:3}}/>
                    </View>
                </View>
            )
        })
        return (
            <ScrollView>
                {render}
            </ScrollView>
        )
    }
    
    return (
        <>

            
            {
            DATA ?
            DATA.length > 0 ?
                <>
                    <View style={{paddingHorizontal:10}}>
                        <Text style={{color:'#888'}}> <FontAwesomeIcon style={{color:colorPrimary}} icon={faExclamationCircle} /> Tekan dan tahan untuk membatalkan</Text>
                    </View>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </>
            : 
            <View style={{width:'100%',justifyContent:'center', alignItems:'center'}}>
                <Image source={nodata} style={{width:300, height:300, opacity:0.5}} />
                <Text>Upps, silahkan lakukan peminjaman !!</Text>
            </View> 
            :
                shimmer()       
            }

            <BottomSheet
            isVisible={isVisible}
            containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
            >   
                {cancelData &&
                    <View style={{height:'auto', width:'100%', backgroundColor:'#fff', padding:20, borderTopLeftRadius:10, borderTopRightRadius:10}}>
                        <Text style={{fontSize:20, color:'#666'}}>{cancelData.book_relation.name}</Text>
                        <Text style={{fontSize:15, color:colorPrimary}}>{Moment(cancelData.start_date).format('DD MMM YYYY')}</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <View style={{width:'48%', marginTop:10}}>
                                <MainButton touchable title="Tutup" onPress={() => {setIsVisible(false)}} containerStyle={{backgroundColor:'#fff', borderStyle:'solid', borderWidth:1, borderColor:colorPrimary, borderRadius:10}} textStyle={{color:colorPrimary}} />
                            </View>
                            <View style={{width:'48%', marginTop:10}}>
                                <MainButton touchable onPress={() => {setIsVisible(false); setDATA(false); batalkanPinjaman(cancelData)}} touchable title="Batalkan Peminjaman" containerStyle={{borderStyle:'solid', borderWidth:1, borderColor:colorPrimary, borderRadius:10}} />
                            </View>
                        </View>
                    </View>
                }
            </BottomSheet>
        </>
    )
}

const styles = StyleSheet.create({
    item:{
        width:'100%',
        height:'auto',
        backgroundColor:'#fff',
        borderBottomWidth:2,
        borderBottomColor:colorBlur,
        justifyContent:'center',
        flexDirection:'row',
        marginTop:15,
        paddingTop:20,
        paddingBottom:20
    },
    image:{
        width:80,
        height:80,
        backgroundColor:colorDark,
        borderRadius:10,
        borderWidth:2,
        borderColor:colorPrimary,
        overflow:'hidden'
    },
    content:{
        flex:1,
        height:80,
        backgroundColor:'#fff',
        justifyContent:'center',
        paddingLeft:10,
    },
    imageStyle:{
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    }

})

export default BookHistoryUnapproved
