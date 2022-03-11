import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../../components/moleculs/Header';
import { colorPrimary } from '../../utils/color';
import Textfield from '../../../components/atoms/Textfield'
import MainButton from '../../../components/atoms/MainButton'
import { TypingAnimation } from 'react-native-typing-animation';
import { GETAUTH, POSTAUTH } from '../../../config/Axios'


const ListChat = () => {
    const [chat, setChat] = useState([])
    const [input,setInput] = useState("")
    const [typing, setTyping] = useState(false)
    const leftChatDefault = () => {
        return (
            <View style={{width:'85%', backgroundColor:'#fff', borderRadius:20, marginTop:20, marginLeft:20, padding:20}}>
                <Text>Hi, RoboSim disini. Silahkan ketik pilihan nomor dibawah untuk informasi !</Text>
                <Text>1. Info Level</Text>
                <Text>2. Info peminjaman Expired</Text>
                <Text>3. Info Peminjaman Berjalan</Text>
            </View>
        )
    }

    const leftChat = (value) => {
        return (
            <View style={{width:'85%', backgroundColor:'#fff', borderRadius:20, marginTop:20, marginLeft:20, padding:20}}>
                <Text>{value}</Text>
            </View>
        )
    }

    const rightChat = () => {
        return (
            <View style={{width:'auto', justifyContent:'flex-end', flexDirection:'row', padding:20}}>
                <View style={{maxWidth:'85%', backgroundColor:colorPrimary, borderRadius:20, marginTop:20, marginLeft:20, padding:20}}>
                    <Text style={{color:'#fff'}}>{input}</Text>
                </View>
            </View>
        )
    }

    const sendChat = async () => {
        let tmp = [...chat, rightChat()]
        setTyping(true)
        setInput("")
        if(input.length > 0){
            setChat(tmp)
            let request = await POSTAUTH('/chat-bot', {main: input});
            if(request.status === 200){
                tmp = [...tmp, leftChat(request.data.data)]
                setTimeout(() => {
                    setTyping(false)
                    setChat(tmp)
                },2000)
            }else{
                tmp = [...tmp, leftChat("Maaf, RoboSim mengalami masalah saat mengecek data kamu, coba lagi ya")]
                setTimeout(() => {
                    setTyping(false)
                    setChat(tmp)
                },2000)
            }
        }else{
            setTyping(false)
        }
    }

    useEffect(() => {
        setChat([leftChatDefault()])
    },[])
    return (
        <>
            <Header isChat />
            <ScrollView style={{flex:1}}>
                {chat && chat.map((item,idx) => {
                    return (
                        item
                    )
                })}

                {typing && 
                    <View style={{padding:20, width:'60%', backgroundColor:'#fff', borderRadius:20, marginLeft:20, marginTop:20, flexDirection:'row'}}>
                        <Text> RoboSim Sedang Mengetik </Text>
                        <TypingAnimation dotColor={colorPrimary}
                        dotMargin={5}
                        dotAmplitude={4}
                        dotSpeed={0.1}
                        dotRadius={2.5}
                        dotX={12}
                        dotY={6} />
                    </View>
                }
            </ScrollView>
            <View style={{height:70, backgroundColor:'#fff', flexDirection:'row', justifyContent:'space-between', padding:10}}>
                <View style={{flex:1}}>
                    <Textfield value={input} onChangeText={(value) => {setInput(value)}} placeholder="Ketik disini" />
                </View>
                <View style={{width:50, marginLeft:10}}>
                    <MainButton onPress={() => {sendChat()}} touchable title="Kirim" />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({})

export default ListChat;
