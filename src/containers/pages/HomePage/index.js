import React, {useEffect} from 'react'
import {StyleSheet, View, ScrollView, Dimensions, Button} from 'react-native'
import NavigationReport from '../../../components/moleculs/NavigationReport'
import HeaderHome from '../../../components/moleculs/HeaderHome'
import Slider from '../../../components/moleculs/Slider'
//import {vText, StyleSheet, Button, View} from 'react-native'
import { Auth } from '../../../config/Auth'
import { AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
{/*const HomePage = () => {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
        })
        // AsyncStorage.clear()
    },[])*/}


const {width} = Dimensions.get("window");
const {height} = width *100 / 60;

const HomePage = ({navigation, style, ...props}) => {
    return (
        <View>
            <HeaderHome/>
            <ScrollView>
                <Slider/>
                <Slider/>
                </ScrollView>                
            <NavigationReport/>
            <Button title="Books Page" onPress={() => {navigation.navigate("BooksPage")}}/>
        </View>
    )
}
            
export default HomePage
