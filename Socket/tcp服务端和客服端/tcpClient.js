var net = require('net');
var ConnSocket = net.connect('7000', '127.0.0.1', () => {
    console.log("地址:%s",ConnSocket.localAddress);
    console.log("地址:%s",ConnSocket.localPort);
    ConnSocket.write('word')
})
ConnSocket.on('data', (data) => {
    console.log('redata' + data)
    ConnSocket.end()
})
ConnSocket.on('error', (err) => {
    throw err
})
ConnSocket.on('end', () => {
    console.log("服务器断开")
})
ConnSocket.on('close', () => {
    console.log("完全断开")
})