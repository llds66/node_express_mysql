/**
 * user用户路由处理函数模块
 */
const db = require('../db/index')
// 导入bcryptjs对用户密码进行加密
const bcrypt = require('bcryptjs')


// **一、注册用户的处理函数**
exports.regUser = (req, res) => {
  const userinfo = req.body// 可接受body体的内容
  //1.用户名是否被占用
  const sql = `select * from ev_users where username=?`
  db.query(sql, [userinfo.username], function (err, results) {
    if (err) {
      return res.send({ status: 1, message: err.message })
    }  // 执行 SQL 语句失败
    if (results.length > 0) {
      return res.send({ status: 1, message: '用户名被占用，请更换其他用户名！' })   // 向客户端响应错误信息
    }    // 用户名被占用

    //2.bcrypt加密加密
    // console.log('加密前：',userinfo);
    userinfo.password = bcrypt.hashSync(userinfo.password, 10)
    // console.log('加密后：',userinfo);

    // 3.数据库存储注册的用户
    const sql = 'insert into ev_users set ?'
    db.query(sql, { username: userinfo.username, password: userinfo.password }, function (err, results) {
      if (err) return res.send({ status: 1, message: err.message })// 执行 SQL 语句失败
      if (results.affectedRows !== 1) {
        return res.send({ status: 1, message: '注册用户失败，请稍后再试！' })
      } // SQL 语句执行成功，但影响行数不为 1
      res.send({ status: 0, message: '注册成功！' })// 注册成功
    })
  })
}

// **二、登录的处理函数**
exports.login = (req, res) => {
  // 1.判断用户名是否存在
  const userinfo = req.body //接收请求body体中的内容
  const sql = `select * from ev_users where username=?` //定义sql语句
  db.query(sql, userinfo.username, (err, results) => {
    if (err) return res.cc(err)  //sql语句失败，[??res.cc(err)]
    if (results.length !== 1) return res.cc('登录失败！没有该用户') //失败2:查询到的数据条数错误 

    // 2.密码是否匹配 调用bcrypt.compareSync(提交密码,数据库密码)返回true/flase来判断
    const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
    if (!compareResult) {
      return res.cc('登录失败！-密码错误') //失败
    }

    // 3.成功 生成token

    res.send('登陆成功')


  })
}