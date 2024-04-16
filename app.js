const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
// 这个中间件 ,只能解析 application/x-www-form-urlencoded格式的表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 这个中间件，封装自定义错误响应函数res.cc(路由前，因为要在路由中掉用)
app.use(function (req, res, next) {
  // status = 0 为成功； status = 1 为失败； 默认将 status 的值设置为 1，方便处理失败的情况
  res.cc = function (err, status = 1) {
    res.send({
      // 状态
      status,
      // 状态描述，判断 err 是 错误对象 还是 字符串
      message: err instanceof Error ? err.message : err,
    })
  }
  next()
})

// 这个中间件：解析jwt-token
const expressJWT = require('express-jwt')
const config = require('./config')
//unless:不需要认证的接口
app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] }))


//  一、注册登录用户路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)

const joi = require('joi')
// 全局错误中间件
app.use(function (err, req, res, next) {
  // 数据验证失败
  if (err instanceof joi.ValidationError) return res.cc(err)

  // 捕获身份认证token失败的错误
  if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
  // 未知错误
  res.cc(err)
})

//  二、个人中心路由模块
const userinfoRouter = require('./router/userinfo')
app.use('/my', userinfoRouter) //需要验证token










app.listen(3007, function () {
  console.log('api server running at http://127.0.0.1:3007')
})