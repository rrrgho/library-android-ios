import axios from "axios"
import BASE_URL from "../BaseUrl"
import { AsyncStorage } from 'react-native';

const access_token = async () => {
    let token = await AsyncStorage.getItem('access_token')
    return `Bearer ${token}`
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
const GET = async (endpoint) => {
    let result = false
    await axios.get(`${BASE_URL}${endpoint}`)
    .then(response => {
        result = response
    })
    .catch((error) => {
        result = error.response
    })
    return result
}

const POSTAUTH = async (endpoint,data) => {
    let result = false
    await axios.post(`${BASE_URL}${endpoint}`,data, { headers: {"Authorization" : await access_token()} })
    .then(response => {
        result = response
    })
    .catch((error) => {
        result = error.response
    })
    return result
}

const POSTFILEAUTH = async (endpoint,data) => {
    let result = false
    await axios.post(`${BASE_URL}${endpoint}`,data, { 
        headers: {
            "Authorization" : await access_token(),
            'Content-Type': 'multipart/form-data',
        } 
    })
    .then(response => {
        result = response
    })
    .catch((error) => {
        result = error.response
    })
    return result
}

const GETAUTH = async (endpoint) => {
    let result = false
    await axios.get(`${BASE_URL}${endpoint}`, { headers: {"Authorization" : await access_token()} })
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
    GET,
    POSTAUTH,
    POSTFILEAUTH,
    GETAUTH
}