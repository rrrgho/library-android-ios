import React from 'react'
import {StyleSheet, View, ScrollView, Dimensions} from 'react-native'
import NavigationReport from '../../../components/moleculs/NavigationReport'
import HeaderHome from '../../../components/moleculs/HeaderHome'
import Slider from '../../../components/moleculs/Slider'


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

const styles = StyleSheet.create({
    container:{
        width:'100%',
        position:'relative',
    },
})

export default HomePage
