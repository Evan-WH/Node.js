const ws = require('ws')
const websocketSever = ws.Server;

var wss = new websocketSever({ port: 3000 }, () => {
    console.log("websocket服务启动3000")
})
/* 
//服务器被客户端连接
wss.on('connection', (ws) => {
    //一秒回一次
    setInterval(()=>{
        ws.on('message',(data)=>{
        console.log(data)
        })
        ws.send("1212")
    },1000)
})*/
wss.on('connection', (ws, request) => {
    // request客户端请求信息
    console.log(request)
    console.log(request.connection.remoteAddress)
    ws.on('message', (data) => {
        console.log(data)
        ws.send("收到客服端" + data, (err) => {
            console.log(err)
        })
    })
    
    setInterval(() => {
        ws.on('message', (data) => {
            console.log(data)
            ws.send("发送客服端:" + data, (err) => {
                console.log(err)
            })
        }, 3000)
    })
})
wss.on('open', () => {
    console.log('打开连接触发')
})
wss.on('close', () => {
    console.log('断开连接触发')
})