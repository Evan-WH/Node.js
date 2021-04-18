
const express = require('express')
const userDao = require('../dao/userDao.js')
const router = express.Router()

router.get('/getUserList', (req, res) => {
    userDao.getUserList({}, function (data) {
        res.json(data)
    })
})
router.get('/getUserById', (req, res) => {
    let id = req.query.id
    userDao.getUserById(id, function (data) {
        res.json(data)
    })
})
/*----------------------------------------------------*/
router.post('/loginUser', (req, res) => {
    let name = req.body.username
    let pwd = req.body.password

    userDao.loginLogin({ name: name, pwd: pwd }, function (data) {
        //登录成功缓存
        if (data.success) {
            redisUtil.set(data.data.id, JSON.stringify(data.data))
        }
        res.json(data).end()
    })
})
router.post('/updateById', (req, res) => {
    let id = req.body.id
    let username = req.body.username
    userDao.updateById({ id: id, username: username }, function (data) {
        res.json(data).end()
    })

})
router.post('/delById', (req, res) => {
    let userId = req.query.id
    userDao.delById(userId, function (data) {
        res.json(data).end()
    })
})

module.exports = router