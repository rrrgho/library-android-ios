import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Wrapper from '../../../components/atoms/Wrapper'
import Header from '../../../components/moleculs/Header'
import BookHistoryDone from '../../organisms/BookHistoryDone'
import BookHistoryOngoing from '../../organisms/BookHistoryOngoing'
import BookHistoryUnapproved from '../../organisms/BookHistoryUnapproved'
import { colorPrimary } from '../../utils/color'

const HistoryPage = () => {
    const [activeMenu,setActiveMenu] = useState("ORDER ONGOING")
    const componentWillBeRendered = () => {
        switch(activeMenu){
            case "ORDER ONGOING":
                return <BookHistoryOngoing />
            case "ORDER FINISHED":
                return <BookHistoryDone />
            case "ORDER UNAPPROVED":
                return <BookHistoryUnapproved />
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
                        <TouchableOpacity onPress={() => {setActiveMenu("ORDER UNAPPROVED")}} style={activeMenu === "ORDER UNAPPROVED" ? styles.buttonFilterActive : styles.buttonFilterInActive}>
                            <Text style={activeMenu === "ORDER UNAPPROVED" ? styles.textButtonActive : styles.textButtonInActive}>Menunggu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setActiveMenu("ORDER FINISHED")}} style={activeMenu === "ORDER FINISHED" ? styles.buttonFilterActive : styles.buttonFilterInActive}>
                            <Text style={activeMenu === "ORDER FINISHED" ? styles.textButtonActive : styles.textButtonInActive}>Selesai</Text>
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
        width:'32%',
        height:50,
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
        width:'32%',
        height:50,
        borderColor:colorPrimary,
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
})

export default HistoryPage
