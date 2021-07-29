import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen, HomePage, LoginPage, BooksPage, ProfilePage, HistoryPage, BookDetailPages, Information, InformationCollect, DetailHistory, ListChat } from '../../containers/pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="LoginPage" component={LoginPage} />
                <Stack.Screen name="HomePage" component={HomePage} />
                <Stack.Screen name="ProfilePage" component={ProfilePage} />
                <Stack.Screen name="BooksPage" component={BooksPage} />
                <Stack.Screen name="HistoryPage" component={HistoryPage} />
                <Stack.Screen name="DetailHistory" component={DetailHistory} />
                <Stack.Screen name="BookDetailPages" component={BookDetailPages} />
                <Stack.Screen name="Information" component={Information} />
                <Stack.Screen name="InformationCollect" component={InformationCollect} />
                <Stack.Screen name="ListChat" component={ListChat} />
            </Stack.Navigator>
        </>
    )
}

export default Router
