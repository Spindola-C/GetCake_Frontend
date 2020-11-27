import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://getcake.herokuapp.com/',
})

export const get_api = axios.create({
    baseURL: 'http://localhost:3000',
})

