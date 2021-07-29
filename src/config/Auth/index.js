import { AsyncStorage } from 'react-native';

const Auth = async () => {
    let isAuth = await AsyncStorage.getItem('access_token')
    return isAuth
}

const Identity = async () => {
    let identity = await AsyncStorage.getItem('identity')
    return identity
}

export {Auth, Identity}