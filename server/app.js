const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const { createProxyMiddleware } = require('http-proxy-middleware')
const app = express()
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', ' ')

    res.header('Access-Control-Allow-Credentials', true)

    res.header(
        'Access-Control-Allow-Headers',
        'Content-Type,Content-Length, Authorization, Accept,X-Requested-With'
    )

    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')

    res.header('Content-Type', 'application/json;charset=utf-8')

    next()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// 访问静态资源
app.use(express.static(path.resolve(__dirname, '../web/dist')))
// 访问单页的路由
app.get('/', function(_, res) {
    var html = fs.readFileSync(path.resolve(__dirname, '../web/dist/index.html'), 'utf-8')
    res.send(html)
})

app.get('/test1', (_, res) => {
    res.send({ test: 2 })
})
app.get('/test2', (_, res) => {
    res.send({ test: 2 })
})

app.use('/proxy', createProxyMiddleware({ target: 'http://localhost:3001/', changeOrigin: false }))
// 监听
app.listen(8081, function() {
    console.log('success listen...8081')
})
