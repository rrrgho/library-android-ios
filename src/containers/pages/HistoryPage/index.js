import React, { useState } from 'react'
import {Text,View, StyleSheet, TouchableOpacity} from 'react-native'
import Wrapper from '../../../components/atoms/Wrapper'
import BookHistoryOngoing from '../../organisms/BookHistoryOngoing'
import {colorBlur, colorDark, colorPrimary} from '../../utils/color'
import Header from '../../../components/moleculs/Header'

const HistoryPage = () => {
    const [activeMenu,setActiveMenu] = useState("ORDER ONGOING")
    const componentWillBeRendered = () => {
        switch(activeMenu){
            case "ORDER ONGOING":
                return <BookHistoryOngoing />
            case "ORDER FINISHED":
                return <BookHistoryOngoing />
            case "ORDER HISTORY":
                return <BookHistoryOngoing />
            default:
                return <BookHistoryOngoing />
        }
    }
    return (
        <>
            <Header />
            <View style={styles.container}>
                <Wrapper style={styles.filterContainer}>
                        <TouchableOpacity onPress={() => {setActiveMenu("ORDER ONGOING")}} style={activeMenu === "ORDER ONGOING" ? styles.buttonFilterActive : styles.buttonFilterInActive}>
                            <Text style={activeMenu === "ORDER ONGOING" ? styles.textButtonActive : styles.textButtonInActive}>Berjalan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setActiveMenu("ORDER FINISHED")}} style={activeMenu === "ORDER FINISHED" ? styles.buttonFilterActive : styles.buttonFilterInActive}>
                            <Text style={activeMenu === "ORDER FINISHED" ? styles.textButtonActive : styles.textButtonInActive}>Selesai</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setActiveMenu("ORDER HISTORY")}} style={activeMenu === "ORDER HISTORY" ? styles.buttonFilterActive : styles.buttonFilterInActive}>
                            <Text style={activeMenu === "ORDER HISTORY" ? styles.textButtonActive : styles.textButtonInActive}>Peminjaman</Text>
                        </TouchableOpacity>
                </Wrapper>
                <Wrapper>
                    {componentWillBeRendered()}
                </Wrapper>
            </View>
       </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        backgroundColor:'#fff'
    },
    filterContainer:{
        height:100,
        width:'100%',
        backgroundColor: '#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    buttonFilterActive:{
        width:120,
        height:30,
        backgroundColor:colorPrimary,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    textButtonActive:{
        color:'#fff',
    },
    textButtonInActive:{
        color:colorPrimary,
    },
    buttonFilterInActive:{
        width:120,
        height:30,
        borderColor:colorPrimary,
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
})

export default HistoryPage
