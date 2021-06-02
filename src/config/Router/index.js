import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen, HomePage, LoginPage,BooksPage, ProfilePage } from '../../containers/pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="HomePage" component={HomePage} />
                <Stack.Screen name="LoginPage" component={LoginPage} />
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                {/* <Stack.Screen name="ProfilePage" component={ProfilePage} /> */}
                <Stack.Screen name="BooksPage" component={BooksPage} />
            </Stack.Navigator>
        </>
    )
}

export default Router
