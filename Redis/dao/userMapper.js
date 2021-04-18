var userSqlMap = {
    list: 'select * from user',//查询列表
    findUserByid: 'select * from user where id=?',//按id查询列表
    add: 'insert into user(username,password) values(?,?)',//增添数据
    updateById: 'update user  set username=? where id=?',//更新数据
    delById: 'delete from user where id=?',//删除数据
}
//导出
module.exports = userSqlMap
