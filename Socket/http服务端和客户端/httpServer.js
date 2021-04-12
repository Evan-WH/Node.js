// const {const}=require('console')
var http = require('http')//引入模块
// const { request } = require('node:http')
const url = require('url')//引入url模块
var httpServer=http.createServer()
httpServer.on('request',(request,response)=>{
    console.log(request.method)
    switch(request,response){
        case 'GET':
            response.write("123")
           response.write(request.method)
            break
        case 'PUT':
            response.write(request.method)
            break
        case 'DELETE':
            response.write(request.method)
            break
        case 'POST':
            response.write(request.method)
            break
    }
    console.log(request.url)
    response.write("1234567------来自http服务端")
    response.end()
})
httpServer.listen('8080',()=>{
    console.log("8080服务启用成功")
})