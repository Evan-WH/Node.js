const express = require('express')
const mysql = require('mysql')
const router = express.Router()
const bodyParser=require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const conn = mysql.createConnection({
    host: '192.168.43.59',
    user: 'root',
    password: '12345',
    database: 'studentmanager'

});
conn.connect((err) => {
    if (err) throw err;
    console.log("连接成功")
})
// 查询表信息
router.get('/getUserList', (req, res) => {
    conn.query('select * from user', (err, rest, fild) => {
        if (err) throw err
        console.log(rest)
        res.json(rest).end
    })
})
// 按参数查询数据
router.get('/getUserById', (req, res) => {
    let id=req.query.id
    conn.query('select * from user where id=?', [id], (err, rest, fild) => {
        if (err) throw err
        console.log(rest)
        res.json(rest).end
    })
})
// 增添数据
router.post('/addUser',(req,res)=>{
    let id=req.body.id
    let user=req.body.user
    let pwd=req.body.pwd
    conn.query('insert into user (id,username,password) values(?,?,?)', [id,user,pwd], (err, rest, fild) => {
        if (err) throw err
        console.log("增添数据成功")
        console.log(rest)
        res.json(rest).end
    })
})
// 修改数据
router.post('/updateUser',(_req,res)=>{
    let id=req.body.id
    let user=req.body.user
    let pwd=req.body.pwd    
    conn.query('update user  set username=? where id=?',[id,user,pwd], (err, rest, fild) => {
        if (err) throw err
        console.log("修改数据成功")
        console.log(rest)
        res.json(rest).end
    })
})
// 删除数据
router.get('/deleteUser',(_req,res)=>{
    conn.query('delete from user where id in(1,2)', (err, rest, fild) => {
        if (err) throw err
        res.json(rest).end
        console.log("删除数据成功")
        console.log(rest)
    })
})
// 导出路由
module.exports = router