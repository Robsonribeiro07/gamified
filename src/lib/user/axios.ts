import axios from 'axios'
const baseApiUser = axios.create({
  baseURL: process.env.EXPO_APP_API_URL,
})

export default baseApiUser
