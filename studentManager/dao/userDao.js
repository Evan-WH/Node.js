const mysql = require("mysql")
const mysqlConf = require('../conf/mysqlconf')//导入
const conn = mysql.createPool(mysqlConf.mysql)//得到连接对象
module.exports={
    getById:function(id,call){
        pool.query()
    }
}
