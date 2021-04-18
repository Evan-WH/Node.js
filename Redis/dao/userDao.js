const mysql=require('mysql')
const mysqlConf=require('../conf/mysqlconf')
const {createResult}=require('../model/result')
const userSqlMap=require('../dao/userMapper')
const conn= mysql.createPool(mysqlConf.mysql)
module.exports={
    getUserList:function(user,call){
        conn.query(userSqlMap.list,(err,rest,fild)=>{
            if(err) throw err
            console.log(rest)
            call(createResult(true,rest))
        })
    },
    getUserById:function(id,call){
        conn.query(userSqlMap.findUserByid,[id],(err,rest,fild)=>{
            if(err) throw err
            console.log(rest)
            call(createResult(true,rest[0]))
        })
    },
/*----------------------------------------------------*/
    add:function(user,call){
        conn.query(userSqlMap.add,[user.userName,user.pwd],(err,rest,fild)=>{
            if(err) throw err
            console.log(rest)
            call(createResult(rest.affectedRows>0) )
            
        })
    },
    updateById:function(user,call){
        conn.query(userSqlMap.updateById,[user.id,user.username],(err,rest)=>{
            if(err) throw err
            call(createResult(rest.affectedRows>0) )
        })
    },
    delById:function(id,call){
        conn.query(userSqlMap.delById,[id],(err,rest)=>{
            if(err)throw err
            call(createResult(rest.affectedRows>0) )
            console.log(rest+"删除成功")
        })
    },
    close:function(){
        conn.end() //正常关闭
        conn.distroy()//销毁，这种关闭会影响底层
    }
}