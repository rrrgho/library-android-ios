import React, { useEffect,useState } from 'react'
import { StyleSheet, Text, TextInput, View,Image, Button,ScrollView, Item,FlatList } from 'react-native'
import SearchButton from '../../../components/atoms/SearchButton'   
import RemoveBooks from '../../../components/atoms/RemoveBooks'   
import LoadMore from '../../../components/atoms/LoadMore'   
import { responsiveHeight,responsiveWidth,responsiveFontSize} from 'react-native-responsive-dimensions';
import { NavigationContainer } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';
import { GETAUTH,POSTAUTH } from '../../../config/Axios'
import { connect } from 'react-redux';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder'
import ImgaeBooks from '../../../assets/images/notfoundbook.jpg'
import { SET_BOOK_DATA, SET_REMOVE_BOOK, SET_SEARCH_BOOK } from '../../../config/Redux/action'
import HeaderHome from '../../../components/atoms/moleculs/HeaderHome'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const Books = (props) => {
    const [isProcessing,setIsProcessing] = useState(false)
    const [isLoadMore,setIsLoadmore] = useState(false)
    const [isRemoveBooks,setIsRemoveBooks] = useState(false)
    const [books] = useState();
    const [inSearch,setInSearch] = useState(false)
    const [bookSearchInput,setBookSearchInput] = useState(false)
    const navigation = useNavigation()
    const getDataBooks = async () =>{
        let send = await GETAUTH(`/book-data?page=${props.booksData.page}`);
        let result = send.data.data
        // console.log(send)
        let array = books ?? []
        result.data.map(item =>{
            array.push(item) 
        })

        let dataBookState = {
            data : array,
            page : props.booksData.page + 1
        }
        props.updateBook(dataBookState)
        // await GETAUTH(``)
    }
    const searchBook = async () => {
        if(!inSearch){
            if(bookSearchInput.length > 0){
                let data = {
                    judul : bookSearchInput
                }
                let send = await POSTAUTH(`/search-book`, data);
                let result = send.data.data
                console.log(result)
                let array = []
                result.data.map(item => {
                    array.push(item)
                })
                let dataState = {
                    data : array,
                    page : props.booksData.pageSearch + 1
                }
                props.updateBookSearch(dataState)
                setInSearch(bookSearchInput)
            }else{
                alert('Judul buku tidak boleh kosong')
            }
        }else{
            removeSearchBook()
            if(bookSearchInput.length > 0){
                let data = {
                    judul : bookSearchInput
                }
                let send = await POSTAUTH(`search-book`, data);
                let result = send.data.data
                console.log(result)
                let array = []
                result.data.map(item => {
                    array.push(item)
                })
                let dataState = {
                    data : array,
                    page : props.booksData.pageSearch + 1
                }
                props.updateBookSearch(dataState)
                setInSearch(bookSearchInput)
            }else{
                alert('Judul buku tidak boleh kosong')
            }
        }
    }
    const removeSearchBook = () => {
        props.updateRemoveSearch()
        setInSearch(false)
        setTimeout(() => {
            console.log(props.booksData.books)
            console.log(props.booksData.booksTmp)
        },500)
    }
    useEffect(() => {
        if(props.booksData.page == 1){
            getDataBooks()
        }
    },[])
    const getDetailBook = (book_id) =>{
        navigation.push(`/book-detail/${book_id}`)
    }
    return (
        <View style={styles.container}>
                <ScrollView >
                    <HeaderHome />
                    <Text style={styles.searchbooks}>Cari Buku</Text>
                    <Text style={styles.judulone}>Temukan buku yang kamu cari dengan mengetik judul buku !</Text>
                    <TextInput style={styles.inputbooks} placeholder="Cari buku berdasarkan judul buku" onChangeText={(value) => {setBookSearchInput(value)}}></TextInput>
                    <SearchButton onPress={() => {searchBook()}} containerStyle={{
                        width: responsiveWidth(90),
                        height: responsiveHeight(7),
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        borderRadius: 10,
                        marginTop: responsiveHeight(1.1),
                    }} fade={isProcessing} touchable={!isProcessing ? true : false}  title={!isProcessing ? "Cari Buku" : 'Loading ...'} />
                    {
                        inSearch && <RemoveBooks onPress={() => {removeSearchBook()}} fade={isRemoveBooks} touchable={!isRemoveBooks ? true : false}  />
                    }
                    {
                        !props.booksData.books ? 
                        <Text>Loading!!</Text> :
                        props.booksData.books.map((item, i) => {
                            return(
                                <View style={styles.container} >
                                    <TouchableOpacity onPress={() => {navigation.navigate('BookDetail')}}>
                                        <View>
                                            <Image style={styles.cardImageBox} source={item.cover ?? ImgaeBooks} />
                                            <Text style={styles.Title}>{item.name}</Text>
                                            <Text style={styles.TextContent}>{item.description ?? 'Tidak ada deskripsi buku'}</Text>
                                            <Text style={styles.TextContent}>Creator: {item.creator}</Text>
                                            <Text style={styles.TextContent}>Kode: {item.code_of_book}</Text>
                                            {
                                                item.ready ? <Text style={styles.TextContent}>Tersedia</Text> :
                                                <Text style={styles.TextContent}>Tidak Tersedia</Text>
                                            }
                                        </View>
                                    </TouchableOpacity>
                                </View>  
                            )
                        })
                    }
                    {
                        !inSearch && <LoadMore onPress={() => {getDataBooks()}} fade={isLoadMore} touchable={!isLoadMore ? true : false}  />
                    }
                    
                
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
        updateBookSearch: (value) => {dispatch(SET_SEARCH_BOOK(value))},
        updateRemoveSearch: () => {dispatch(SET_REMOVE_BOOK())},
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Books);