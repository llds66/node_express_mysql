/**
 * user用户路由处理函数模块
 */
// 注册用户的处理函数
exports.regUser = (req, res) => {

    // 接收post请求的数据
    const userinfo = req.body
    // 可接受body体的内容
    // console.log(userinfo);
    // 判断是否合法
    if(!userinfo.username || !userinfo.password){
      // 不合法，返回客户端错误信息
      return res.send({status:1,messsage:'用户名或密码不为空！！'})
    }
    res.send('reguser OK')
  }
  
// 登录的处理函数
exports.login = (req, res) => {
res.send('login OK')
}