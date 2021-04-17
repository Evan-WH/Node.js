// 引入redis包
const redis = require('redis');
const redisStr = "172.29.5.181"
const redisCli = redis.createClient(6379, redisStr)
// 设置连接密码
redisCli.auth("wh")
//监听连接
const cars = ["🚗", "🚙", "🚕"];

for (const car of cars) {
    console.log(` ${car}`);
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
    redisCli.lpush('user', 'name', '张三', (err, data) => {
        if (err) throw err;
        console.log(data)
    }) 
    redisCli.lpush('user', 'name', '王五', (err, data) => {
        if (err) throw err;
        console.log(data)
    })
    redisCli.lrange('user',0,-1,(err, data)=>{
        if (err) throw err;
        console.log(data)
    })
})
console.log("连接成功")