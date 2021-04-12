const websocket = require('ws');
const ws=new websocket('ws://127.0.0.1:3000')
ws.on('message',(data)=>{
    console.log(data);
    ws.send('hi')
})