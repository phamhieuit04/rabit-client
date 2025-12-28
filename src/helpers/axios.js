import axios from 'axios'

const urls = {
    gateway: 'http://localhost:8000/api',
    auth: 'http://localhost:8001/api',
}

export const apiHelper = axios.create({
    baseURL: urls['gateway'],
    headers: {
        'Content-Type': 'application/json',
    },
})

apiHelper.use = function (type) {
    return axios.create({
        ...this.defaults,
        baseURL: urls[type],
    })
}
