import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../../components/moleculs/Header';
import InformationDetail from '../../organisms/InformationDetail';

const Information = ({route, navigation}) => {
    const {data} = route.params
    return (
        <View style={{backgroundColor:'#fff', flex:1}}>
            <Header />
            <InformationDetail data={data} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Information;
