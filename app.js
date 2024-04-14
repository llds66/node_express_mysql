// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()
// 导入 cors 中间件
const cors = require('cors')
// 将 cors 注册为全局中间件
app.use(cors())
// 这个中间件 ,只能解析 application/x-www-form-urlencoded格式的表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 在中间件，封装自定义错误响应函数res.cc(路由前，因为要在路由中掉用)
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



// 导入user用户路由模块
const userRouter = require('./router/user')
app.use('/api',userRouter)
// write your code here...

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3007, function () {
  console.log('api server running at http://127.0.0.1:3007')
})