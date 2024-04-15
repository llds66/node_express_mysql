/**
 * user注册登录路由模块
 */

const express = require('express')
const router = express.Router()

// 导入路由处理函数模块
const userHandler = require('../router_handler/user')

// 数据检验
// 1. 导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')
// 2. 导入需要的验证规则对象
const { reg_login_schema } = require('../schema/user')

// 一、注册新用户路由
router.post('/reguser', expressJoi(reg_login_schema), userHandler.regUser)
// 二、登录路由
router.post('/login', expressJoi(reg_login_schema), userHandler.login)

// 将路由对象共享出去
module.exports = router