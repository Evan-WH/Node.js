const { request, response } = require('express');
const express = require('express');
const bodyparser = require('body-parser')
const app = express();
app.listen(800, () => {
    console.log("服务启动成功")
})
// app.get('/',(request,response)=>{
//     console.log(request.url)
//     console.log(request.method)

//     response.send('你好')
// })
// app.get('/wk',(request,response)=>{
//     console.log(request.url)
//     console.log(request.method)
//     response.send('你2  好')
// })
app.use(express.static('public'))
app.use(bodyparser.json())


app.post('/wwk:user', (req, res) => {

    let users = new Array()
    users.push({user:"张三"})
    users.push({user:"李四"})
    users.push({user:"王五"})
    // res.send("使用" + req.method + "请求方法" + req.url + "路径")
    // res.send("你好")
    console.log(req.params.user)
    res.json(users).end()
    // let user =req.query.user
    // console.log('得到请求数据user:' +'${user}')

})