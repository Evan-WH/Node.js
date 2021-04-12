const WebSocket = require('ws')
const ws = new WebSocket('ws://localhost:3000')

// 接受
ws.on('message', (message) => {
  console.log(message)

    // 当数字达到 10 时，断开连接
    if (message == 10) {
      ws.send('close');
      ws.close()
      console.log("服务关闭")
  }
})