import axios from "axios"
import BASE_URL from "../BaseUrl"

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


export {
    POST
}