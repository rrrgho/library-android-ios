import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen, HomePage, LoginPage, BooksPage, ProfilePage, HistoryPage, BookDetailPages, Information, InformationCollect, DetailHistory, ListChat, Wishlist, SettingPreference, SuccessPage, ChangePassword, RequestPage, SelebPus, EbooksPage, CameraPage, PreviewImage } from '../../containers/pages';
import {NetworkInfo} from 'react-native-network-info';
import NetInfo from "@react-native-community/netinfo";
import Tabscreen from './tabscreen';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>                
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="HomePage" component={Tabscreen} />
                <Stack.Screen name="LoginPage" component={LoginPage} />
                <Stack.Screen name="ProfilePage" component={ProfilePage} />
                <Stack.Screen name="DetailHistory" component={DetailHistory} />
                <Stack.Screen name="BookDetailPages" component={BookDetailPages} />
                <Stack.Screen name="Information" component={Information} />
                <Stack.Screen name="InformationCollect" component={InformationCollect} />
                <Stack.Screen name="ListChat" component={ListChat} />
                <Stack.Screen name="Wishlist" component={Wishlist} />
                <Stack.Screen name="SelebPus" component={SelebPus} />
                <Stack.Screen name="RequestScreen" component={RequestPage} />
                <Stack.Screen name="SettingPreference" component={SettingPreference} />
                <Stack.Screen name="ChangePassword" component={ChangePassword} />
                <Stack.Screen name="SuccessPage" component={SuccessPage} />
                <Stack.Screen name="CameraPage" component={CameraPage} />
                <Stack.Screen name="PreviewImage" component={PreviewImage} />
            </Stack.Navigator>
        </>
    )
}

export default Router
