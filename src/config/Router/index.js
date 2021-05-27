import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen, HomePage, LoginPage,BooksPage } from '../../containers/pages';

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
                {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
                {/* <Stack.Screen name="LoginPage" component={LoginPage} /> */}
                {/* <Stack.Screen name="BooksPage" component={BooksPage} />
                <Stack.Screen name="HomePage" component={HomePage} /> */}

            </Stack.Navigator>
        </>
    )
}

export default Router
