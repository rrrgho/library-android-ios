simport React, { useEffect,useState } from 'react'
import { StyleSheet, Text, TextInput, View,Image, Button,ScrollView, Item,FlatList } from 'react-native'
import SearchButton from '../../../components/atoms/SearchButton'   
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { NavigationContainer } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';
import { GETAUTH } from '../../../config/Axios'
import { connect } from 'react-redux';
import ImgaeBooks from '../../../assets/images/notfoundbook.jpg'
import { SET_BOOK_DATA, SET_REMOVE_BOOK, SET_SEARCH_BOOK } from '../../../config/Redux/action'
const Books = (props) => {
    const [isProcessing,setIsProcessing] = useState(false)
    const [books] = useState();
    // const ItemBooks = ({name,creator,cover,codebook,ready}) =>{
    //     return(
    //         <View style={styles.container}>
    //             <View>
    //             <Image style={styles.cardImageBox} source={cover ?? ImgaeBooks} />
    //                 <Text style={styles.Title}>{name}</Text>
    //                 <Text style={styles.TextContent}>Creator: {creator}</Text>
    //                 <Text style={styles.TextContent}>Kode: {codebook}</Text>
    //                 {/* <Text style={styles.TextContent}>{ready}</Text> */}
    //             </View>
    //         </View>
            
    //     )
    // }
   
    const getDataBooks = async () =>{
        let send = await GETAUTH(`book-data?page=${props.booksData.page}`);
        let result = send.data.data
        let array = books ?? []
        result.data.map(item =>{
            array.push(item) 
        })

        let dataBookState = {
            data : array,
            page : props.booksData.page + 1
        }
        props.updateBook(dataBookState)
        // await GETAUTH(`/book-data?page=1`)
        // .then((res) =>{
        //     console.log(res)
        // })
    }
    useEffect(() => {
        if(props.booksData.page == 1){
            getDataBooks()
            
        }
    },[])
    return (
        <View style={styles.container}>
            <ScrollView >
                <Text style={styles.searchbooks}>Cari Buku</Text>
                <Text style={styles.judulone}>Temukan buku yang kamu cari dengan mengetik judul buku !</Text>
                <TextInput style={styles.inputbooks} placeholder="Cari buku berdasarkan judul buku"></TextInput>
                <SearchButton containerStyle={{
                    width: responsiveWidth(90),
                    height: responsiveHeight(7),
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    borderRadius: 10,
                    marginTop: responsiveHeight(1.1),
                }} fade={isProcessing} touchable={!isProcessing ? true : false}  title={!isProcessing ? "Cari Buku" : 'Loading ...'} />
                {/* {books.map(book => {
                    return <ItemBooks name={book.name} creator={book.creator} codebook={book.code_of_book} ready={book.ready}  />
                    
                })} */}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    card:{
        width: responsiveWidth(90),
        height:responsiveHeight(7),
        backgroundColor:'#fff',
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity:  0.1,
        shadowRadius: 3,
        elevation: 2,
        marginBottom:5,
        marginTop:20,
    },
    cardImageBox:{
        width:'100%',
        height:200,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        marginTop: 10,
    },
    cardTitleBox:{
        width:'100%',
        flex:1,
        backgroundColor:'#fff',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        padding:10,
        paddingBottom:20,
    },
    Title:{
        opacity:0.7,
        fontSize: responsiveFontSize(2.2),
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 40,
    },
    TextContent:{
        fontSize: responsiveFontSize(1.5),
        marginLeft: 40,
    },
    TextStok:{
        fontWeight: 'bold',
        color: '#81ed79',
        marginLeft: 40,
    },
    container:{
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
        fontSize: responsiveFontSize(1.9),
        fontWeight: '600',
        marginTop: 8,
    },
    inputbooks:{
        width: responsiveWidth(90),
        height: responsiveHeight(7),
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 10,
        alignSelf: 'center',
        marginVertical: responsiveHeight(2.33),
    },
    searchbooksbutton :{
        marginBottom: 10,
    },
    dumyBooks:{
        marginTop: 10,
        marginBottom: 20,
        width: 100,
        height: 100,
    }
})
const mapStateToProps = (state) => {
    return {
        booksData : state.bookReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateBook: (value) => {dispatch(SET_BOOK_DATA(value))},
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Books);