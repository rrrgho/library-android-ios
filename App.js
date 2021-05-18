import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Text} from 'react-native'
import Router from './src/config/Router';

const App = () => {
  return (
    <NavigationContainer>
        <Router />
    </NavigationContainer>
  )
}

export default App