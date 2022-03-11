import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainButton from '../../../components/atoms/MainButton';
import Textfield from '../../../components/atoms/Textfield';
import Header from '../../../components/moleculs/Header';
import { POSTAUTH } from '../../../config/Axios';
import { colorBlue, colorDark, colorPrimary } from '../../utils/color';

const ChangePasswords = ({navigation}) => {
    const [userInput, setUserInput] = useState({old_password: "", new_password: "", confirm_password: ""});
    const [processing, setProcess] = useState(false);
    const [error,setError] = useState(false)

    const handleSubmit = async () => {
        setProcess(true)
        setError(false)
        let request = await POSTAUTH('/change-password', userInput);
        if(request.status === 200){
            let response = request.data
            if(response.status != 200){
                setError(response.message)
                setProcess(false)
            }else{
                navigation.navigate("SuccessPage")
                setProcess(false)

            }
        }else{
            setError("Terjadi kesalahan pada server")
            setProcess(false)
        }
    }
    return (
        <>
            <Header />
            <View style={styles.container}>
                <Text style={styles.title}>Ganti Kata Sandi</Text>
                <Text style={{color:colorBlue, marginBottom:30}}>Harap ingat password anda setelah menggantinya</Text>

                {error &&
                    <View style={{backgroundColor:'red', padding:20, marginBottom:20}}>
                        <Text style={{color:'#fff'}}>{error}</Text>
                    </View>
                }

                <Text style={styles.label}>Kata Sandi Lama : </Text>
                <Textfield
                    password 
                    style={{marginTop:10, marginBottom:20}} 
                    placeholder="Ketikan Kata Sandi lama anda" 
                    onChangeText={(value) => {
                        setUserInput(prev => ({
                            ...prev,
                            old_password: value
                        }))
                    }}
                />
                <Text style={styles.label}>Kata Sandi Baru : </Text>
                <Textfield
                    password 
                    style={{marginTop:10, marginBottom:20}} 
                    placeholder="Ketikan Kata Sandi baru" 
                    onChangeText={(value) => {
                        setUserInput(prev => ({
                            ...prev,
                            new_password: value
                        }))
                    }}
                />
                <Text style={styles.label}>Konfirmasi Kata Sandi Baru : </Text>
                <Textfield
                    password 
                    style={{marginTop:10, marginBottom:20}} 
                    placeholder="Ketikan Kata Sandi baru" 
                    onChangeText={(value) => {
                        setUserInput(prev => ({
                            ...prev,
                            confirm_password: value
                        }))
                    }}
                />

                <MainButton touchable={processing ? false : true} title={processing ? "Sedang memproses..." : "Ganti Kata Sandi"} onPress={() => {handleSubmit()}} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#fff',
        flex:1,
        padding:20
    },
    title: {
        fontSize:20,
        fontWeight:'bold',
        color:colorPrimary
    },
    label:{
        color: colorDark
    }
})

export default ChangePasswords;
