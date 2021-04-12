/*server*/
const dgram = require('dgram');
const server = dgram.createSocket('udp4'); //创建udp服务器
const multicastAddr = '224.100.100.100';

//server.on 都是在监听不同信号
server.on('close', () => { // ()=> 是 ES6的箭头函数===function()
    console.log('socket已关闭');
});

server.on('error', (err) => {
    console.log(err);
});

server.on('listening', () => {
    console.log('socket正在监听中...');
    server.addMembership(multicastAddr); //加入组播组
    server.setMulticastTTL(128);

});
server.on('message', (msg, rinfo) => {
    console.log(`接受消息来自： ` + `地址：` + `${rinfo.address}   ` + `端口：` + `${rinfo.port}：${msg}`);
});

function sendMsg() {
    var message = '信息-----来自服务端';
    server.send(message, 0, message.length = 26, 8061, multicastAddr);
    //参数分别是，数据（buffer或者string），偏移量（即开始发送的位子），数据长度，接收的端口，组播组
}
server.bind(8060); //绑定端口，不绑定的话也可以send数据但是无法接受
//循环发送
server.on('message', function (msg, rinfo) {
    strmsg = msg.toString();
    // server.send(strmsg, 0, strmsg.length, rinfo.port, rinfo.address); 
    //将接收到的消息返回给客户端
})
setInterval(() => {
    sendMsg();
    console.log("向客户端发送消息ing~");
}, 3000);