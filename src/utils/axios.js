import axios from "axios"


const api = axios.create({
    baseURL: "https://prep-gateway-service.onrender.com",
    withCredentials: true
})

export default api