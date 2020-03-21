const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// 访问静态资源
app.use(express.static(path.resolve(__dirname, '../dist')));
// 访问单页
app.get('/', function (req, res) {
	var html = fs.readFileSync(path.resolve(__dirname, '../web/dist/index.html'), 'utf-8');
	res.send(html);
});

app.get('/test1', (_, res) => {
	res.send('test');
})
app.get('/test2', (_, res) => {
	res.send({ test: 2 });
})
// 监听
app.listen(8081, function () {
	console.log('success listen...8081');
});
