var userSqlMapper={
    add:'insert into user(user,pwd) value(?,?)',
    delById:'delete from user where id=?',
    update:'updata user set user=? pwd=? where id=?',
    list:'select * from user',
    getById:'select * from user where id=?'
}//封装dao模块