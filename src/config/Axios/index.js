import axios from "axios"
import BASE_URL from "../BaseUrl"
import { AsyncStorage } from 'react-native';

const access_token = async () => {
    let token = await AsyncStorage.getItem('access_token')
    return token
}

const POST = async (endpoint,data) => {
    let result = false
    await axios.post(`${BASE_URL}${endpoint}`,data)
    .then(response => {
        result = response
    })
    .catch((error) => {
        result = error.response.status
    })
    return result
}


const POSTAUTH = async (endpoint,data) => {
    let result = false
    await axios.post(`${BASE_URL}${endpoint}`,data, { headers: {"Authorization" : `Bearer ${access_token()}`} })
    .then(response => {
        result = response
    })
    .catch((error) => {
        result = error.response.status
    })
    return result
}

const GETAUTH = async (endpoint) => {
    let result = false
    await axios.post(`${BASE_URL}${endpoint}`, { headers: {"Authorization" : `Bearer ${access_token()}`} })
    .then(response => {
        result = response
    })
    .catch((error) => {
        result = error.response.status
    })
    return result
}


export {
    POST,
    POSTAUTH,
    GETAUTH
}