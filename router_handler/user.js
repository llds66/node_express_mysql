/**
 * user用户路由处理函数模块
 */

// 导入数据库模块
const db = require('../db/index')



// 注册用户的处理函数
exports.regUser = (req, res) => {

  // 接收post请求的数据
  const userinfo = req.body
  // 可接受body体的内容
  // console.log(userinfo);
  // 1.判断是否合法
  if (!userinfo.username || !userinfo.password) {
    // 不合法，返回客户端错误信息
    return res.send({ status: 1, messsage: '用户名或密码不为空！！' })
  }
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
    res.send('reguser OK')

  })
}

// 登录的处理函数
exports.login = (req, res) => {
  res.send('login OK')
}