import { faCheck, faFileAlt, faSearch, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {
    responsiveFontSize, responsiveHeight,
    responsiveWidth
} from 'react-native-responsive-dimensions';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { connect } from 'react-redux';
import LoadMore from '../../../components/atoms/LoadMore';
import RemoveBooks from '../../../components/atoms/RemoveBooks';
import SearchButton from '../../../components/atoms/SearchButton';
import Wrapper from '../../../components/atoms/Wrapper';
import NavigationReport from '../../../components/moleculs/NavigationReport';
import { GETAUTH, POSTAUTH } from '../../../config/Axios';
import { SET_BOOK_DATA, SET_EBOOK_DATA, SET_REMOVE_BOOK, SET_REMOVE_EBOOK, SET_SEARCH_BOOK, SET_SEARCH_EBOOK } from '../../../config/Redux/action';
import { colorBlur } from '../../utils/color';
import { Button, Linking } from 'react-native';


const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)
const Books = (props) => {
    const [isProcessing,setIsProcessing] = useState(false)
    const [isLoadMore,setIsLoadmore] = useState(false)
    const [isRemoveBooks,setIsRemoveBooks] = useState(false)
    const [books] = useState();
    const [inSearch,setInSearch] = useState(false)
    const [bookSearchInput,setBookSearchInput] = useState(false)
    const [info,setInfo] = useState(true)
    const navigation = useNavigation()
    const getDataBooks = async () =>{
        let send = await GETAUTH(`/e-books-data?page=${props.booksData.epage}`);
        let result = send.data.data
        let array = books ?? []
        result.map(item =>{
            array.push(item)
        })

        let dataBookState = {
            data : array,
            page : props.booksData.epage + 1,
        }
        props.updateBook(dataBookState)
        setIsLoadmore(false)
        
    }

    const refreshData = async () => {
        if(inSearch){
            removeSearchBook()
        }
        let send = await GETAUTH(`/e-books-data?page=1`);
        let result = send.data.data
        console.log(result)
        let array = books ?? []
        result.map(item =>{
            array.push(item)
        })

        let dataBookState = {
            data : array,
            page : props.booksData.epage + 1,
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
                let send = await POSTAUTH(`/search-ebook?page=1`, data);
                let result = send.data.data
                let array = []
                result.data.map(item => {
                    array.push(item)
                })
                let dataState = {
                    data : array,
                    page : props.booksData.epageSearch + 1
                }
                props.updateBookSearch(dataState)
                setInSearch(bookSearchInput)
            }else{
                alert('Judul buku tidak boleh kosong')
            }
        }else{
            if(bookSearchInput.length > 0){
                props.updateRemoveSearch()
                let data = {
                    judul : bookSearchInput
                }
                let send = await POSTAUTH(`/search-ebook?page=1`, data);
                let result = send.data.data
                let array = []
                result.data.map(item => {
                    array.push(item)
                })
                let dataState = {
                    data : array,
                    page : props.booksData.epageSearch + 1
                }
                props.updateBookSearch(dataState)
                setInSearch(bookSearchInput)
            }else{
                alert('Judul e-book tidak boleh kosong')
            }
        }
    }


    
    const searchBookLoadMore = async () => {
        if(bookSearchInput.length > 0){
            let data = {
                judul : bookSearchInput
            }
            let send = await POSTAUTH(`/search-ebook?page=${props.booksData.epageSearch}`, data);
            let result = send.data.data
            let array = [...result.data]
            let dataState = {
                data : array,
                page : props.booksData.epageSearch + 1
            }
            if(array.length > 0)
                props.updateBookSearch(dataState)
            setInSearch(bookSearchInput)
        }else{
            alert('Judul buku tidak boleh kosong')
        }
        setIsLoadmore(false)
    }



    const removeSearchBook =  () => {
        props.updateRemoveSearch()
        setInSearch(false)
        setBookSearchInput("")
    }
    useEffect(() => {
        if(!props.booksData.ebooks){
            refreshData()
            setInfo(true)
        }
    },[])


    const shimmer = () => {
        let render = new Array(12).fill(0).map((item,index) => {
            return (
                <View style={{backgroundColor:'transparent', width:'48%', paddingBottom:10, borderRadius:10, borderRadius:10, marginTop:10, borderWidth:1, borderStyle:'solid', borderColor:'#ccc'}}>
                    <View >
                        <View style={{minHeight:responsiveHeight(10)}}>
                            <Wrapper style={{paddingTop:10,}}>
                                <ShimmerPlaceHolder style={{width:responsiveWidth(33)}} />
                                <ShimmerPlaceHolder style={{width:responsiveWidth(27), marginTop:5}} />
                            </Wrapper>
                        </View>
                        <View>
                            <Wrapper>
                                <View style={{ alignItems:'center', borderRadius:5, marginTop:20, display:'flex', flexDirection:'row'}}>
                                    <ShimmerPlaceHolder style={{width:responsiveWidth(33), height:responsiveHeight(1)}} />
                                </View>
                            </Wrapper>
                        </View>
                    </View>
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
            <Wrapper style={{ width:'100%', height:'100%'}}>
                <View>
                    <View style={styles.containerSearching}>
                        <TextInput style={[styles.inputbooks, {padding:15}]} placeholder="Cari E-books berdasarkan judul buku" onChangeText={(value) => {setBookSearchInput(value)}} value={bookSearchInput}></TextInput>
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
                        inSearch && <RemoveBooks result={bookSearchInput} onPress={() => {removeSearchBook()}} fade={isRemoveBooks} touchable={!isRemoveBooks ? true : false}  />
                    }
                    {/* {
                        info &&
                        <View style={{backgroundColor:'#EB8B8A', padding:20, marginTop:20, borderRadius:10, flexDirection:'row', justifyContent:'space-between'}}>
                            <View>
                                <Text style={{color:'#fff'}}>Swipe kebawah untuk merefresh </Text>
                            </View>
                            <TouchableOpacity onPress={() => {setInfo(false)}}>
                                <FontAwesomeIcon icon={faTimes} size={20} />
                            </TouchableOpacity>
                        </View>
                    } */}
                </View>
                <ScrollView style={{marginTop:10}}
                
                refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
                >
                        {
                            !inSearch ?
                                <View style={styles.container} >
                                    
                                    {
                                        !refreshing ?
                                        !props.booksData.ebooks ? 
                                        shimmer() :
                                        props.booksData.ebooks.map((item, i) => {
                                            var rand = 'rgb(' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ')';
                                            return(
                                                <View style={{backgroundColor:rand, width:'48%', paddingBottom:10, borderRadius:10, borderRadius:10, marginTop:10,}} key={i}>
                                                    <TouchableOpacity onPress={() => {
                                                        Linking.openURL(item.link_pdf)
                                                        .catch(err => {
                                                            alert('Failed to open page')
                                                        })
                                                    }} >
                                                        <View style={{minHeight:100}}>
                                                            {/* <Image style={styles.cardImageBox} source={ item.cover ? {uri:`${item.cover}`} : ImgaeBooks} /> */}
                                                            <Wrapper style={{paddingTop:10,}}>
                                                                <Text style={styles.Title}>{item.name}</Text>
                                                                {/* <Text style={styles.Title}>{item.name.split(" ")[0]} {item.name.split(" ")[1]}  {item.name.split(" ")[2]} {item.name.split(" ").length > 3 && "..."}</Text> */}
                                                                <Text style={{color:'#999'}}>{moment(item.created_at, "YYYYMMDD").fromNow()}</Text>
                                                            </Wrapper>
                                                        </View>
                                                        <View>
                                                            <Wrapper>
                                                            {
                                                                
                                                                <View style={{ alignItems:'center', borderRadius:5, marginTop:20, display:'flex', flexDirection:'row'}}>
                                                                    <FontAwesomeIcon icon={faFileAlt} style={{color:'blue'}} />
                                                                    <Text style={styles.TextContent, {color:'#888', marginLeft:5}}>Jenis File PDF</Text>
                                                                </View>
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
                                :
                                    <View style={styles.container} >
                            
                                        {
                                            !refreshing ?
                                            !props.booksData.ebooksSearch ? 
                                            shimmer() :
                                            props.booksData.ebooksSearch.map((item, i) => {
                                                var rand = 'rgb(' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ')';
                                                return(
                                                    <View style={{backgroundColor:rand, width:'48%', paddingBottom:10, borderRadius:10, borderRadius:10, marginTop:10,}} key={i}>
                                                        <TouchableOpacity onPress={() => {navigation.navigate('BookDetailPages',{
                                                            'id': item.id
                                                        })}} >
                                                            <View style={{minHeight:100}}>
                                                                {/* <Image style={styles.cardImageBox} source={ item.cover ? {uri:`${item.cover}`} : ImgaeBooks} /> */}
                                                                <Wrapper style={{paddingTop:10,}}>
                                                                    <Text style={styles.Title}>{item.name}</Text>
                                                                    {/* <Text style={styles.Title}>{item.name.split(" ")[0]} {item.name.split(" ")[1]}  {item.name.split(" ")[2]} {item.name.split(" ").length > 3 && "..."}</Text> */}
                                                                    <Text style={{color:'#999'}}>{moment(item.created_at, "YYYYMMDD").fromNow()}</Text>
                                                                </Wrapper>
                                                            </View>
                                                            <View>
                                                                <Wrapper>
                                                                {                                                                
                                                                    <View style={{ alignItems:'center', borderRadius:5, marginTop:20, display:'flex', flexDirection:'row'}}>
                                                                        <FontAwesomeIcon icon={faFileAlt} style={{color:'blue'}} />
                                                                        <Text style={styles.TextContent, {color:'#888', marginLeft:5}}>Jenis File PDF</Text>
                                                                    </View>
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
                        }

                        {isLoadMore &&
                            <View style={styles.container} >
                                {shimmer()}
                            </View>
                        }
                        <View style={{paddingBottom:20, paddingTop:20}}>
                            {
                                !inSearch ? <LoadMore onPress={() => {getDataBooks(); setIsLoadmore(true)}} fade={isLoadMore} touchable={!isLoadMore ? true : false}  />
                                :<LoadMore onPress={() => {searchBookLoadMore(); setIsLoadmore(true)}} fade={isLoadMore} touchable={!isLoadMore ? true : false}  />
                            }
                        </View>
                    
                
                </ScrollView>
            </Wrapper>
        </View>
    )

}
const styles = StyleSheet.create({
    containerSearching:{
        flexDirection:'row',
        width:'100%'
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
        fontSize: responsiveFontSize(1.5),
        fontWeight: 'bold',
        color: 'black',
        textTransform:'uppercase'
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
        updateBook: (value) => {dispatch(SET_EBOOK_DATA(value))},
        updateBookSearch: (value) => {dispatch(SET_SEARCH_EBOOK(value))},
        updateRemoveSearch: () => {dispatch(SET_REMOVE_EBOOK())},
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Books);