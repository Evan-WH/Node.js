// 工具类
const redis = require('redis');
const redisStr = "192.168.43.59"
const redisCli = redis.createClient(6379, redisStr)
// 设置连接密码
redisCli.auth("wh")
//监听连接
redisCli.on('error', function (err) {
    console.log(err)
})
// 封装导出
module.exports = {
    set: function (key, value, call) {
        redisCli.on("connect", () => {
            // JSON.parse()将json字符串转换成json对象
            // JSON.stringify()将json对象转为json字符串
            // 客户端对象
            redisCli.set(key, value, (err, data) => {
                if (err) throw err;
                call(data)
            })
        })
    },
    // get
    get: function (key, call) {
        redisCli.on("connect", () => {
            redisCli.get(key, (err, data) => {
                if (err) throw err;
                if (data == "ok") call (data)
            })
        })
    }
}