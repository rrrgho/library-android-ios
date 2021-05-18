import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomePage, LoginPage } from '../../containers/pages';



const Stack = createStackNavigator();

const Router = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="LoginPage" component={LoginPage} />
                <Stack.Screen name="HomePage" component={HomePage} />
            </Stack.Navigator>
        </>
    )
}

export default Router
