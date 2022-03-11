import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../../components/moleculs/Header';
import WishlistData from '../../organisms/WishlistData';

const Wishlist = () => {
    return (
        <>
            <Header />
            <View style={{backgroundColor:'#fff', flex:1, paddingLeft:20, paddingRight:20}}>
                <WishlistData />
            </View>
        </>
    );
}

const styles = StyleSheet.create({})

export default Wishlist;
