import React, { useEffect,useState } from 'react'
import { StyleSheet, Text, TextInput, View,Image, Button,ScrollView,Alert } from 'react-native'
import axios from "axios"
import HeaderHome from '../../../components/atoms/moleculs/HeaderHome'
import { useNavigation } from '@react-navigation/native'
import { responsiveHeight,responsiveWidth,responsiveFontSize} from 'react-native-responsive-dimensions'
import ImgaeBooks from '../../../assets/images/notfoundbook.jpg'
import Header from '../../../components/moleculs/Header'
import QRCode from 'react-native-qrcode-svg';
import SweetAlert from 'react-native-sweet-alert';
// import swal from 'sweetalert'
// import QRCode from 'react-native-qrcode-generator';
import MainButton from '../../../components/atoms/MainButton'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GETAUTH, POSTAUTH } from '../../../config/Axios'
const BookDetailPages = ({route,navigation},props) => {
    const {id,description,cover,code_of_book,category} = route.params
    const [book,setBook] = useState()
    const [isProcessing,setIsProcessing] = useState(false)
    const getData = async () => {
        let send = await GETAUTH(`/book-detail/${id}`)
        setBook(send.data)
        // console.log(book)
    }
    const OrderBook = async () =>{ 
        const data = {
            book_id: id,
        }
        let send = await POSTAUTH('/order', data)
        if(send.data.error === false)
        {
            Alert.alert('Good Job', send.data.message, 'success')
            // setTimeout(() => {
            //     navigation.navigate('BooksPage')
            // }, 1000)
        }else{
            Alert.alert('Gagal Bro',send.data.message)
        }
    }
    useEffect(() => {
        getData()
    },[])

    const testing = () => {
        SweetAlert.showAlertWithOptions({
            title: 'aaaa',
            subTitle: 'aaa',
            otherButtonTitle: 'Cancel',
            otherButtonColor: '#dedede',
            style: 'success',
            cancellable: true
          });
    }
    return(
        <>
        <Header />
        <View style={styles.container}>
            <ScrollView>
                    <Text style={styles.searchbooks}>Detail Buku</Text>
                    <Text style={styles.judulone}>Lihat selengkapnya tentang buku ini !</Text>                    
                        <Image  style={styles.cardImageBox} source={cover ?? ImgaeBooks} />
                    <Text style={styles.Title}>{book && book.data.name}</Text>
                    <Text style={styles.judulone}>{description ?? 'Tidak ada deskripsi untuk buku ini'}</Text>
                    <View style={styles.garis}>
                        <Text style={styles.judulone}>Category : {book && book.data.category}</Text>
                        <Text style={styles.judulone}>Rak : {book && book.data.locker}</Text>
                    </View>
                    {
                        book && book.data.stock > 0 ? <Text style={styles.stockbooks}>Buku ini tersedia sebanyak {book && book.data.stock}</Text>
                        :
                        <Text style={styles.stockbooks} onPress={() => {testing()}}>Mohon maaf, stok buku ini telah habis terpinjam</Text>
                    }
                    {
                        book && book.data.stock > 0 &&
                        
                        <MainButton
                            onPress={() => {OrderBook()}}
                            containerStyle={{
                                width: responsiveWidth(60),
                                height: responsiveHeight(7),
                                alignItems: 'center',
                                justifyContent: 'center',
                                alignSelf: 'center',
                                borderRadius: 10,
                                marginTop: responsiveHeight(1.1),
                            }} fade={isProcessing} touchable={!isProcessing ? true : false} title={'Pinjam'}
                        />
                        
                    }
{
    book && book.data.stock > 0 &&
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
                    
            </ScrollView>
        </View>
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
    }
})

export default BookDetailPages
