const express = require('express')
const router = require('./router/router')
const bodyParser=require('body-parser')
const app = express()
app.use(bodyParser.urlencoded())
// app.use(bodyParser.json())
// 设置跨域
app.all('*', (req, res, next) => {
    //允许header类型 
    res.header("Access-Control-Allow-Origin", "*")
    //请求的响应类型
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
})
app.use('/stu', router)
app.listen(8080, () => {
    console.log("HTTP服务启动成功8080")
})