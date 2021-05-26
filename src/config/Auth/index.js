import { AsyncStorage } from 'react-native';

const Auth = async () => {
    let isAuth = await AsyncStorage.getItem('access_token')
    return isAuth
}

export {Auth}