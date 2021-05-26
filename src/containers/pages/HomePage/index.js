import React, {useEffect} from 'react'
import {StyleSheet, View, ScrollView, Dimensions, Button} from 'react-native'
import NavigationReport from '../../../components/moleculs/NavigationReport'
import HeaderHome from '../../../components/moleculs/HeaderHome'
import Slider from '../../../components/moleculs/Slider'
import { Auth } from '../../../config/Auth'
import { AsyncStorage } from 'react-native'



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
        </View>
    )
}    
            
export default HomePage
