var mysql = require('mysql')
var config = require('./defaultConfig')

//创建线程池   node ,mysql 之间的桥梁

var pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATEBASE,
    port: config.database.PORT
})


//统一连接数据库的方法
let allServices ={
    query: function(sql, values){
        return new Promise((resolve, reject)=>{
            pool.getConnection(function(err, connection){
                if(err){
                    reject(err)
                }else{
                    connection.query(sql, values, (err, rows)=>{
                        if(err){
                            reject(err)
                        }else{
                            resolve(rows)
                        }
                        connection.release()
                    })
                }
            })
        })
    }
}

//读取所有 users 表数据 测试数据连接
let getAllusers = function(){
    let _sql = `select * from users;`
    return allServices.query(_sql)
}

// 用户登录
let userLogin = function (username, userpwd) {
    let _sql = `select * from users where username="${username}" and userpwd="${userpwd}";`
    return allServices.query(_sql)
}

//查找用户
let findUser = function(username){
    let _sql = `select * from users where username="${username}";`
    return allServices.query(_sql)
}

// 注册用户
let insertUser = function(value){
    let _sql = `insert into users set username=?,userpwd=?,nickname=?;`
    return allServices.query(_sql, value)
}

//根据分类名称查找对应的笔记列表
let findNoteListByType = function(note_type){
    let _sql =`select * from note where note_type="${note_type}";`
    return allServices.query(_sql)
}

module.exports ={
    getAllusers,
    userLogin,
    findUser,
    insertUser,
    findNoteListByType
}