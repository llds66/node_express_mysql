/**
 * user用户路由处理函数模块
 */

// 导入数据库模块
const db = require('../db/index')
// 导入bcryptjs对用户密码进行加密
const bcrypt = require('bcryptjs')


// 一、注册用户的处理函数
exports.regUser = (req, res) => {

  // 接收post请求的数据
  const userinfo = req.body
  // 可接受body体的内容
  // console.log(userinfo);
  // 1.判断是否合法
  // if (!userinfo.username || !userinfo.password) {
  //   // 不合法，返回客户端错误信息
  //   return res.send({ status: 1, messsage: '用户名或密码不为空！！' })
  // }
  //2.用户名是否被占用
  const sql = `select * from ev_users where username=?`
  db.query(sql, [userinfo.username], function (err, results) {
    // 执行 SQL 语句失败
    if (err) {
      return res.send({ status: 1, message: err.message })
    }
    // 用户名被占用
    if (results.length > 0) {
      // 向客户端响应错误信息
      return res.send({ status: 1, message: '用户名被占用，请更换其他用户名！' })
    }
    // TODO: 用户名可用，继续后续流程...
    // bcryptjs密码加密
    // console.log(userinfo);
    userinfo.password = bcrypt.hashSync(userinfo.password, 10)
    // console.log('加密后：',userinfo);

    // 新增用户
    const sql = 'insert into ev_users set ?'
    db.query(sql, { username: userinfo.username, password: userinfo.password }, function (err, results) {
      // 执行 SQL 语句失败
      if (err) return res.send({ status: 1, message: err.message })
      // SQL 语句执行成功，但影响行数不为 1
      if (results.affectedRows !== 1) {
        return res.send({ status: 1, message: '注册用户失败，请稍后再试！' })
      }
      // 注册成功
      res.send({ status: 0, message: '注册成功！' })
    })
  })
}

// 二、登录的处理函数
exports.login = (req, res) => {
  res.send('login OK')
}