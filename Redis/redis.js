// 引入redis包
const redis = require('redis');
const redisStr = "192.168.43.59"
const redisCli = redis.createClient(6379, redisStr)
// 设置连接密码
redisCli.auth("wh")
//监听连接
redisCli.on('error', function (err) {
    console.log(err)
})
redisCli.on('connect', () => {
    //     redisCli.set('name', 'long', function (err, data) {
    //         console.log(data)
    //     })
    //     // 返回键值
    //     redisCli.get('name', function (err, data) {
    //         console.log(data)
    //     })
    //     // 从左写入‘user’键值，+key---------集合存储
    //     redisCli.lpush('user', '李四', '张三', "王五", (err, data) => {
    //         if (err) throw err;
    //         console.log(data)
    //     })
    //     // 结果集
    //     redisCli.lrange('user', 0, -1, (err, data) => {
    //         if (err) throw err;
    //         console.log(data)
    //     })
    // ------------hash------------
    // // 键值储存
    // redisCli.hset('student','name','张三', (err, data) => {
    //     console.log(data)
    // })
    // redisCli.hget('student','name',(err,data)=>{
    //     console.log(data)
    // })
    // ---------设置对象储存---------
    let stu = {
        name: "张三",
        no: "1931613078",
        sex: "男"
    }
    redisCli.hmset('student',stu, (err, data) => {
        console.log(data)
    })
})