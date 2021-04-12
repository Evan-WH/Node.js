// 引入redis包
const redis = require('redis');
const redisStr = "192.168.3.42"
const redisCli = redis.createClient(6379, redisStr)
// 设置连接密码
redisCli.auth("wh")
//监听连接
const cars = ["🚗", "🚙", "🚕"];

for (const car of cars) {
    console.log(`This is the car ${car}`);
}
redisCli.on('error', function (err) {
    console.log(err)
})
redisCli.on('connect', () => {
    redisCli.set('name', 'long', function (err, data) {
        console.log(data)
    })
    redisCli.get('name', function (err, data) {
        console.log(data)
    })
})
console.log("连接成功")