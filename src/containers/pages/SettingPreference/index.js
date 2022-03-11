import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Select2 from "react-select2-native";
import Header from '../../../components/moleculs/Header';
import { GETAUTH, POST, POSTAUTH } from '../../../config/Axios';
import { DELETE_PREFERENCES, SET_PREFERENCES } from '../../../config/Redux/action';
import { colorPrimary } from '../../utils/color';

const mockData = [
    { aku: 1, name: "React Native Developer" }, // set default checked for render option item
    { aku: 2, name: "Android Developer" },
    { aku: 3, name: "iOS Developer" },
  ];



const SettingPreference = () => {

    const [category, setCategory] =  useState([])
    const [prefer, setPrefer] = useState([])

    const getCategory = async () => {
        let send = await GETAUTH('/get_category');
        console.log(send)
        setCategory(send.data.data)
    }


    const PREFERENCES = useSelector(state => state.preferencesReducer.data)
    const dispatch = useDispatch()
    const ADD_PREFERENCES = async (value) => {
        let send = await POSTAUTH('/add_preference', {category_id:value.id})
        console.log(send)
        if(send.status === 200){
            dispatch(SET_PREFERENCES({id:send.data.id, name:value.name}))
        }else{
            alert("Gagal menambahkan, coba lagi !")
        }
    }
    
    const REMOVE_PREFERENCES = async (value) => {
        let send = await POST('/delete-preference', {id_preference : value})
        if(send.status === 200){
            dispatch(DELETE_PREFERENCES(value))
        }else{
            console.log(send)
            alert("Gagal menghapus, coba lagi !")
        }
    }

    const getPreferences = async () => {
        let send = await GETAUTH('/get_preference');
        console.log(send)
        if(send.status === 200){
            if(PREFERENCES.length === 0){
                if(send.data.data.length > 0){
                    send.data.data.map((item) => {
                        dispatch(SET_PREFERENCES({id:item.id, name:item.category.name}))
                    })
                }
            }
        }

    }



    useEffect(() => {
        getCategory()
        getPreferences()
    }, [])

    

    return (
        <>
            <Header />
            <View style={styles.container}>
                <Text style={{fontSize:20, color:colorPrimary, marginTop:20}}>
                    Tambah Preferensi
                </Text>

                <Select2
                    isSelectSingle
                    style={{ borderRadius: 5, marginTop:10 }}
                    colorTheme="blue"
                    popupTitle="Preferensi Kategori"
                    title="Pilih Preferensi"
                    data={category}
                    onSelect={async (data) => {
                        let send = await GETAUTH('/category/'+data[0])
                        if(send.status === 200){
                            ADD_PREFERENCES({id:send.data.data.id, name:send.data.data.name})
                        }else{
                            alert("Gagal menambahkan, koneksi gagal atau coba lagi !")
                        }
                    }}
                    onRemoveItem={(data) => {
                        alert('ss')
                    }}
                />

                <View style={styles.boxItem}>
                    {PREFERENCES.map((item,idx) => {
                        return (
                            <View key={idx} style={styles.item}>
                                <Text style={{color:colorPrimary}}>{item.name}</Text>
                                <FontAwesomeIcon onPress={() => {REMOVE_PREFERENCES(item.id)}} icon={faTimes} style={{color:'red', marginLeft:10, marginTop:2}} />
                            </View>
                        )
                    })}
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#fff',
        paddingLeft:20,
        paddingRight:20
    },
    boxItem:{
        flexDirection:'row',
        width:'100%',
        marginTop:20,
        flexWrap:'wrap'
    },
    item:{
        width:'auto',
        padding:10,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:colorPrimary,
        borderRadius:10,
        flexDirection:'row',
        margin:5
    }
})

export default SettingPreference;
