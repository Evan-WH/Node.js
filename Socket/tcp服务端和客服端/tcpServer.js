const net =require("net");

var clientSocket=net.connect(8000,'127.0.0.1',()=>{		//连接监听器
    clientSocket.write("world!");
    console.log("服务器方端口：%s",clientSocket.remotePort);
    console.log("服务器方IP地址：%s",clientSocket.remoteAddress);
    console.log("客户端方端口：%s",clientSocket.localPort);
    console.log("客户端方IP地址：%s",clientSocket.localAddress);//向服务器写出数据
})
clientSocket.on('data',(data)=>{//读取数据
    console.log(data.toString());
    clientSocket.end();	//主动断开连接
})
clientSocket.on('end',()=>{//发送FIN包完成
    console.log("双方进入半连接状态！")
});
clientSocket.on('close',()=>{//完全断开
    console.log("连接完全关闭！")
});