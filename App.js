import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Text} from 'react-native'
import Router from './src/config/Router';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './src/config/Redux/reducer';


// Redux Store
const store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
  return (
    <NavigationContainer>
        <Provider store={store}>
          <Router />
        </Provider>
    </NavigationContainer>
  )
}

export default App