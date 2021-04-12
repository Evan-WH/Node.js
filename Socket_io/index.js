var express = require('express');
var http = require('http');
var socket = require('socket.io');
const app=express()

var httpServer=http.Server(app)
var sio=socket(httpServer)

sio.on('connection',(rsocket)=>{
    rsocket.on('disconnect',()=>{
        console.log("用户"+rsocket.id+"断开连接")
    });
    rsocket.on('msg',(data)=>{
            console.log("客户端发消息"+data)
            rsocket.emit('msg',"你好我是服务端发来消息"+data)
        });
})
app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.header('Content-Type','text/html;charset=utf-8')
    console.log(__dirname + '/Cli.html')
    res.sendFile(__dirname + '/Cli.html');
})
httpServer.listen(3000, () => {
    console.log("端口3000启动成功")
});