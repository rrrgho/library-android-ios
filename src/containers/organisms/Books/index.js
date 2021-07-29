import React, { useEffect,useState } from 'react'
import SearchButton from '../../../components/atoms/SearchButton'   
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import RemoveBooks from '../../../components/atoms/RemoveBooks'   
import LoadMore from '../../../components/atoms/LoadMore'   
import { NavigationContainer } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';
import { GETAUTH,POSTAUTH } from '../../../config/Axios'
import { connect } from 'react-redux';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useNavigation } from '@react-navigation/native'
import { Image, RefreshControl, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ImgaeBooks from '../../../assets/images/notfoundbook.jpg'
import HeaderHome from '../../../components/atoms/moleculs/HeaderHome'
import Wrapper from '../../../components/atoms/Wrapper'
import { SET_BOOK_DATA, SET_REMOVE_BOOK, SET_SEARCH_BOOK } from '../../../config/Redux/action'
import { colorBlur, colorDark, colorPrimary } from '../../utils/color'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)
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
            page : props.booksData.page + 1,
        }
        props.updateBook(dataBookState)
        setIsLoadmore(false)
    }

    const refreshData = async () => {
        let send = await GETAUTH(`/book-data?page=1`);
        let result = send.data.data
        // console.log(send)
        let array = books ?? []
        result.data.map(item =>{
            array.push(item) 
        })

        let dataBookState = {
            data : array,
            page : props.booksData.page + 1,
            refresh : true
        }
        props.updateBook(dataBookState)
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
        }
    }
    const removeSearchBook =  () => {
        props.updateRemoveSearch()
        setInSearch(false)
        setTimeout(() => {
            console.log(props.booksData.books)
            console.log(props.booksData.booksTmp)
        },500)
    }
    useEffect(() => {
        refreshData()
        // if(props.booksData.page == 1){
        //     getDataBooks()
        // }
        // console.log(props.booksData.books)
    },[])


    const shimmer = () => {
        let render = new Array(6).fill(0).map((item,index) => {
            return (
                <View key={index} style={{backgroundColor:'#fff', width:190, paddingBottom:10, borderColor:colorBlur, borderRadius:10, borderRadius:10, marginTop:10, borderWidth:2}}>
                    <TouchableOpacity >
                        <View>
                            <ShimmerPlaceHolder style={{height:200}} />
                            <Wrapper style={{paddingTop:10,}}>
                                <ShimmerPlaceHolder />
                                <ShimmerPlaceHolder />
                            </Wrapper>
                        </View>
                    </TouchableOpacity>
                </View> 
            )
        })

        return render
    }


    const [refreshing, setRefreshing] = useState(false);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        await refreshData()
        wait(2000).then(() => setRefreshing(false));
    }, []);
    return (
        <View style={styles.container}>
            <Wrapper>
                <View>
                    <View style={styles.containerSearching}>
                        <TextInput style={styles.inputbooks} placeholder="Cari buku berdasarkan judul buku" onChangeText={(value) => {setBookSearchInput(value)}}></TextInput>
                        <SearchButton onPress={() => {searchBook()}} containerStyle={{
                            width: responsiveWidth(15),
                            marginLeft:5,
                            height: responsiveHeight(7),
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            borderRadius: 10,
                            marginTop: responsiveHeight(0),
                        }} fade={isProcessing} touchable={!isProcessing ? true : false}  title={!isProcessing ? <FontAwesomeIcon icon={faSearch} style={{color:"#fff"}}/> : <FontAwesomeIcon icon={faSpinner} style={{color:'#fff'}}/>} />
                    </View>
                    {
                        inSearch && <RemoveBooks onPress={() => {removeSearchBook()}} fade={isRemoveBooks} touchable={!isRemoveBooks ? true : false}  />
                    }
                </View>
                <ScrollView style={{marginTop:10}}
                
                refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
                >
                        <View style={styles.container} >
                        
                        {
                            !refreshing ?
                            !props.booksData.books ? 
                            shimmer() :
                            props.booksData.books.map((item, i) => {
                                return(
                                    <View style={{backgroundColor:'#fff', width:190, paddingBottom:10, borderColor:colorBlur, borderRadius:10, borderRadius:10, marginTop:10, borderWidth:2}} key={i}>
                                        <TouchableOpacity onPress={() => {navigation.navigate('BookDetailPages',{
                                            'id': item.id,
                                            'description': item.description,
                                            'cover': item.cover,
                                            'code_of_book': item.code_of_book,
                                            'category': item.category,
                                        })}} >
                                            <View>
                                                <Image style={styles.cardImageBox} source={item.cover ?? ImgaeBooks} />
                                                <Wrapper style={{paddingTop:10,}}>
                                                    <Text style={styles.Title}>{item.name}</Text>
                                                    {
                                                        item.ready ? <View style={{width:70, alignItems:'center', borderRadius:5, height:30, backgroundColor:'green', justifyContent:'center', marginTop:10}}><Text style={styles.TextContent, {color:'#fff'}}>Tersedia</Text></View> :
                                                        <View style={{width:120, alignItems:'center', borderRadius:5, height:30, backgroundColor:'red', justifyContent:'center', marginTop:10}}><Text style={styles.TextContent, {color:'#fff'}}>Tidak Tersedia</Text></View>
                                                    }
                                                </Wrapper>
                                            </View>
                                        </TouchableOpacity>
                                    </View>  
                                )
                            })
                            :
                            shimmer()
                        }
                        </View>

                        {isLoadMore &&
                            <View style={styles.container} >
                                {shimmer()}
                            </View>
                        }
                        <View style={{paddingBottom:20, paddingTop:20}}>
                            {
                                !inSearch && <LoadMore onPress={() => {getDataBooks(); setIsLoadmore(true)}} fade={isLoadMore} touchable={!isLoadMore ? true : false}  />
                            }
                        </View>
                    
                
                </ScrollView>
            </Wrapper>
        </View>
    )

}
const styles = StyleSheet.create({
    containerSearching:{
        flexDirection:'row'
    },
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
    },
    TextContent:{
        fontSize: responsiveFontSize(1.5),
    },
    TextStok:{
        fontWeight: 'bold',
        color: '#81ed79',
    },
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent: 'center',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',

    },
    searchbooks:{
        textAlign:'center',
        fontWeight: '600',
        fontSize: responsiveFontSize(3.2),
    },
    judulone:{
        textAlign: 'center',
        fontSize: responsiveFontSize(1.6),
        fontWeight: '600',
        marginTop: 8,
    },
    inputbooks:{
        flex:1,
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


// Kalo mau set redux pakai API, harus pakai redux thunk


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