import Moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Alert, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import Header from '../../../components/moleculs/Header'
import { GETAUTH, POSTAUTH } from '../../../config/Axios'
import { colorBlur, colorDark, colorPrimary } from '../../utils/color'
import { BottomSheet, ListItem } from 'react-native-elements';
import MainButton from '../../../components/atoms/MainButton'
import QRCode from 'react-native-qrcode-svg'
import Textfield from '../../../components/atoms/Textfield'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient';
import Stars from 'react-native-stars';
import starfilled from '../../../assets/images/starfilled.png'
import starempty from '../../../assets/images/starempty.png'


const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

const BookDetailPages = ({route,navigation},props) => {
    const {id, is_rating, order_id} = route.params
    const [book,setBook] = useState()
    const [comment,setComment] = useState({book_id : id, komentar : "", rating:1 })
    const [isProcessing,setIsProcessing] = useState(false)
    const [ordering,setOrdering] = useState(false)
    // Bottom Sheet
    const [isVisible, setIsVisible] = useState(false);


    const getData = async () => {
        setIsVisible(false)
        let send = await GETAUTH(`/book-detail/${id}`)
        console.log(send.data)
        if(send.status === 200){
            setBook(send.data)
            setIsProcessing(true)
        }else{
            alert("Mohon maaf, server tidak merespons atau bisa jadi koneksi internet anda tidak stabil")
        }
    }

    const OrderBook = async () =>{ 
        setOrdering(true)
        const data = {
            book_id: id,
        }
        let send = await POSTAUTH('/order', data)
        console.log(send)
        if(send.data.error === false)
        {
            setTimeout(() => {
                setOrdering(false)
                navigation.navigate('HistoryPage')
            },2000)
        }else{
            alert(`Gagal meminjam buku, ${send.data.message} !`)
            setOrdering(false)
            setIsVisible(false)
            getData()
        }
    }
    useEffect(() => {
        getData()
    },[])


    const shimmer = () => {
        const render = new Array(1).fill(0).map((item,index) => {
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
        return render
    }

    const pushComment = async () => {
        setIsProcessing(false)
        let send = await POSTAUTH('/komentar', comment)
        console.log(send)
        if(send.status === 200){
            await POSTAUTH('/israting-finished', {order_id : order_id})
            getData()
            setTimeout(() => {
                navigation.navigate("SuccessPage")
            },1000)
        }else{
            setIsProcessing(false)
            alert("Komentar gagal dikirim, server tidak meresponse atau cek koneksi internet anda !")
        }
    }

    const wishlist = async () => {
        setOrdering(true)
        if(!book.wishlisted){
            let send = await POSTAUTH('/order-wishlist', {book_id : id})
            console.log(send)
            if(send.status === 200){
                setIsVisible(false)
                setOrdering(false)
                alert("Berhasil tambahkan ke Wishlist")
                navigation.navigate("Wishlist")
            }else{
                setOrdering(false)
                alert("Gagal menambahkan ke wishlist, server tidak merespon atau cek koneksi internet anda !")
            }
        }else{
            setOrdering(false)
            alert("Gagal menambahkan ke wishlist, Buku telah ada di Wishlist kamu !")
        }

    }




    // Flatlist Komentar
    const Item = ({ title }) => (
        <View style={styles.itemComment}>
            <View style={{backgroundColor:'transparent',alignContent:'flex-start', alignItems:'flex-start', marginLeft:-5, marginBottom:5}}>
                <Stars
                    display={title.rating}
                    spacing={8}
                    count={5}
                    starSize={20}
                    fullStar={require('../../../assets/images/starfilled.png')}
                    emptyStar={require('../../../assets/images/starempty.png')}
                />
            </View>
            <TouchableOpacity  style={styles.contentComment}>
                <Text style={{fontSize:15, color:colorPrimary, fontWeight:'bold'}}>{title.user_relation.name.split(' ').slice(0,2).join(' ')}</Text>
                <Text style={{fontSize:15, color:'#666'}}>{title.komentar}</Text>
                <Text style={{fontSize:13, color:'green'}}>{Moment(title.created_at).format('DD MMM YYYY')}</Text>
            </TouchableOpacity>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item} />
    );
    return(
        <>
        <Header />
        <View style={styles.container}>
            <ScrollView style={{flex:1}}>
                    {isProcessing ?
                        <>
                            <View style={styles.item}>
                                <View style={styles.image}>
                                    <Image style={styles.imageStyle} source={{uri:"https://img.freepik.com/free-vector/abstract-green-business-book-cover-page-brochure-template_1017-13933.jpg?size=338&ext=jpg"}} />
                                </View>
                                {!book.is_borrowing ?
                                <TouchableOpacity onPress={() => {setIsVisible(true);}}  style={styles.detailBook}>
                                    <Text style={{fontSize:13, color:colorPrimary}}>{book && book.data.book_number}</Text>
                                    <Text style={{fontSize:15, color:'#666'}}>{book && book.data.name}</Text>
                                    <Text style={{fontSize:13, color:'green'}}>{book && book.data.category}</Text>
                                    <Text style={{fontSize:13, color:'green'}}>Loker : {book && book.data.locker}</Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => {alert("Anda sedang meminjam buku ini !");}}  style={styles.detailBook}>
                                    <Text style={{fontSize:13, color:colorPrimary}}>{book && book.data.book_number}</Text>
                                    <Text style={{fontSize:15, color:'#666'}}>{book && book.data.name}</Text>
                                    <Text style={{fontSize:13, color:'green'}}>{book && book.data.category}</Text>
                                    <Text style={{fontSize:13, color:'green'}}>Loker : {book && book.data.locker}</Text>
                                </TouchableOpacity>
                                }
                            </View>
                            <View style={{padding:20, backgroundColor:'#f5f5f5'}}>
                                {book && book.data.stock > 0 ? <Text style={{fontSize:13, color:'orange',flex: 1, flexWrap: 'wrap'}}>Buku ini tersedia sebanyak <Text style={{fontWeight:'bold', color:'green'}}>{book && book.data.stock}</Text> Buku</Text> : book.wishlisted ? <Text style={{fontWeight:'bold', color:'orange',flexShrink: 1}}>Stock Habis, {!book.is_borrowing ? "sudah ada di Wishlist kamu !" : "dan kamu sedang meminjam buku ini !"}</Text> : <Text style={{fontWeight:'bold', color:'red',flexShrink: 1}}>Stock Habis, {!book.is_borrowing ? "masukan Wishlist !" : "dan kamu sedang meminjam buku ini !"} </Text>}
                                <Text style={{fontSize:13, color:'green'}}>Kamu telah meminjam buku ini sebanyak <Text style={{color:'orange', fontSize:15, fontWeight:'bold'}}>{book && book.your_usage}</Text> kali</Text>
                            </View>
                            {book && book.data.komentar.length > 0 ?
                                <FlatList
                                    data={book.data.komentar}
                                    renderItem={renderItem}
                                    keyExtractor={item => item.id}
                                />
                                :
                                <View style={{justifyContent:'center', height:50, alignContent:'center', alignItems:'center'}}>
                                    <Text style={{color:'#888'}}>Belum ada komentar, {!book.is_borrowing ? "pinjam dan beri komentar !" : "selesaikan pinjamanmu dibuku ini untuk beri komentar"} </Text>
                                </View>
                            }
                        </>
                        :
                        shimmer()
                    }
            </ScrollView>

            {is_rating &&
                <>
                    <View style={{alignItems:'center', marginBottom:10}}>
                        <Stars
                            half={true}
                            default={1}
                            spacing={4}
                            starSize={40}
                            count={5}
                            fullStar={require('../../../assets/images/starfilled.png')}
                            emptyStar={require('../../../assets/images/starempty.png')}
                            update={(val) => {
                                setComment(prev => ({
                                    ...prev,
                                    rating : val
                                }))
                            }}
                        />
                    </View>
                    <View style={{width:'100%', height:100, backgroundColor:'red'}}>
                        <Textfield placeholder="Ketik komentar ..." onChangeText={(value) => {
                            setComment(prev => ({
                                ...prev,
                                komentar : value
                            }))
                        }} />
                        <MainButton touchable onPress={() => {pushComment()}} style={{color:'#fff'}} title={<FontAwesomeIcon icon={faPaperPlane} style={{width:'10%'}} />} />
                    </View>
                </>
            }
        </View>

            <BottomSheet
                isVisible={isVisible}
                containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
            >   
                <View style={{height:'auto', width:'100%', backgroundColor:'#fff', padding:20, borderTopLeftRadius:10, borderTopRightRadius:10}}>
                    <View style={{justifyContent:'space-between'}}>
                        <View style={{width:'100%'}}>
                            {
                                book && book.data.stock > 0 ?
                                <View style={styles.qrCode}>
                                    <QRCode
                                        // ref={myQRCode}
                                        //QR code value
                                        value={'sasa'}
                                        //size of QR Code
                                        size={150}
                                        //Color of the QR Code (Optional)
                                        color="black"
                                        //Background Color of the QR Code (Optional)
                                        backgroundColor="white"
                                        //Center Logo size  (Optional)
                                        logoSize={30}
                                        //Center Logo margin (Optional)
                                        logoMargin={2}
                                        //Center Logo radius (Optional)
                                        logoBorderRadius={15}
                                        //Center Logo background (Optional)
                                        logoBackgroundColor="yellow"
                                        />
                                </View>
                                :
                                <View style={styles.qrCode}>
                                    <QRCode
                                        // ref={myQRCode}
                                        //QR code value
                                        value={'sasa'}
                                        //size of QR Code
                                        size={150}
                                        //Color of the QR Code (Optional)
                                        color="black"
                                        //Background Color of the QR Code (Optional)
                                        backgroundColor="white"
                                        //Center Logo size  (Optional)
                                        logoSize={30}
                                        //Center Logo margin (Optional)
                                        logoMargin={2}
                                        //Center Logo radius (Optional)
                                        logoBorderRadius={15}
                                        //Center Logo background (Optional)
                                        logoBackgroundColor="yellow"
                                        />
                                </View>
                            }     
                        </View>  
                       <View style={{width:'100%', flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
                            <View style={{width:'48%', marginTop:10}}>
                                <MainButton touchable title="Tutup" onPress={() => {setIsVisible(false)}} containerStyle={{backgroundColor:'#fff', borderStyle:'solid', borderWidth:1, borderColor:colorPrimary, borderRadius:10}} textStyle={{color:colorPrimary}} />
                            </View>
                            <View style={{width:'48%', marginTop:10}}>
                                {
                                    book && book.data.stock > 0 ?
                                    <MainButton touchable onPress={() => {OrderBook()}} touchable title={ordering ? "Meminjam ..." : "Pinjam"} containerStyle={{borderStyle:'solid', borderWidth:1, borderColor:colorPrimary, borderRadius:10}} />
                                    :
                                    <MainButton touchable onPress={() => {wishlist()}} touchable title={ordering ? "Memproses ..." : "Wishlist"} containerStyle={{borderStyle:'solid', borderWidth:1, borderColor:'orange', backgroundColor:'orange', borderRadius:10}} />
                                }

                            </View>
                       </View>
                    </View>
                </View>
            </BottomSheet>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 5,
        flex:1,
        backgroundColor:'#fff',
        justifyContent: 'center',

    },
    searchbooks:{
        textAlign:'center',
        fontWeight: '600',
        fontSize: responsiveFontSize(2.9),
    },
    judulone:{
        textAlign: 'center',
        fontSize: responsiveFontSize(2),
        fontWeight: '600',
    },
    cardImageBox:{
        width:'100%',
        height:200,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        marginTop: 10,
    },
    Title:{
        opacity:0.7,
        fontSize: responsiveFontSize(2.8),
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
    },
    stockbooks:{
        textAlign: 'center',
        fontSize: responsiveFontSize(2),
    },
    qrCode:{
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemComment:{
        width:'100%',
        backgroundColor:'#fff',
        borderBottomWidth:2,
        borderBottomColor:colorBlur,
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:20
    },
    item:{
        width:'100%',
        height:'auto',
        backgroundColor:'#fff',
        borderBottomWidth:2,
        borderBottomColor:colorBlur,
        flexDirection:'row',
        marginTop:15,
        paddingLeft:20,
        paddingRight:20,
    },
    image:{
        width:80,
        height:80,
        backgroundColor:colorDark,
        borderRadius:10,
        borderWidth:2,
        borderColor:colorPrimary,
        overflow:'hidden',
    },
    detailBook : {
        width:'90%',
        height:'auto',
        backgroundColor:'#fff',
        padding:10,
        paddingTop:0
        
    },
    content:{
        flex:1,
        height:80,
        backgroundColor:'#fff',
        paddingLeft:10,
    },
    imageStyle:{
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
    },
    myEmptyStarStyle: {
        color: 'white',
    }
})

export default BookDetailPages
