import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SplashScreen, HomePage, LoginPage, BooksPage, ProfilePage, HistoryPage, BookDetailPages, Information, InformationCollect, DetailHistory, ListChat, Wishlist, SettingPreference, SuccessPage, ChangePassword, RequestPage, SelebPus, EbooksPage } from '../../containers/pages';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { colorPrimary } from '../../containers/utils/color';
import { faBook, faBookReader, faHistory, faHome, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const Tab = createBottomTabNavigator();

const Tabscreen = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let colorActive = focused ? colorPrimary : '#888'
        
                    if (route.name === 'HomePage') {
                        iconName = faHome
                    }
                    else if (route.name === 'EbooksPage') {
                        iconName = faBookReader
                    }
                    else if (route.name === 'BooksPage') {
                        iconName = faBook
                    }
                    else if (route.name === 'HistoryPage') {
                        iconName = faHistory
                    }
                    else {
                        iconName = faUserShield
                    }
        
                    // You can return any component that you like here!
                    return <FontAwesomeIcon style={{color: colorActive}}  size={23} icon={ iconName }/>;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarLabel: ({focused}) => {
                    let label;
                    let colorActive = focused ? colorPrimary : '#888'
        
                    if (route.name === 'HomePage') {
                        label = "Beranda"
                    }
                    else if (route.name === 'EbooksPage') {
                        label = "Ebook"
                    }
                    else if (route.name === 'BooksPage') {
                        label = "Buku"
                    }
                    else if (route.name === 'HistoryPage') {
                        label = "Riwayat"
                    }
                    else {
                        label = "Akun"
                    }
                    return <Text style={{fontSize:responsiveFontSize(1.2), color:'#888'}}>{label}</Text>
                }
            })}
        >
            <Tab.Screen name="HomePage" component={HomePage} />
            <Tab.Screen name="EbooksPage" component={EbooksPage} />
            <Tab.Screen name="BooksPage" component={BooksPage} />
            <Tab.Screen name="HistoryPage" component={HistoryPage} />
            <Tab.Screen name="ProfilePage" component={ProfilePage} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({})

export default Tabscreen;
