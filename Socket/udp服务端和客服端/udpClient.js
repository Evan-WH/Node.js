/*client*/
const dgram = require('dgram');
const client = dgram.createSocket('udp4');
const multicastAddr = '224.100.100.100';

client.on('close',()=>{
    console.log('socket已关闭');
});

client.on('error',(err)=>{
    console.log(err);
});
client.on('listening',()=>{
    console.log('socket正在监听中...');
    client.addMembership(multicastAddr);
});
client.on('message',(msg,rinfo)=>{
    console.log(`接受消息来自： `+`地址：`+ `${rinfo.address}   `+`端口：`+`内容：`+`${rinfo.port}：${msg}`);
});
setInterval(function(){
    var SendBuff = 'hello 123.';
    var SendLen = SendBuff.length;
    console.log("向服务端发送消息ing~")
    client.send(SendBuff, 0, SendLen, 8060, '224.100.100.100'); 
},3000);
client.bind(8061);