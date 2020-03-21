
module.exports = baseURL => {
    const axios = require('axios')
    const http = axios.create({
        baseURL
    })
    return http
}