/**
 * 个人中心模块
 */

const express = require('express')
const router = express.Router()
const userinfo_handler = require('../router_handler/userinfo')  //封装路由处理函数
const expressJoi = require('@escook/express-joi') //数据检验
const { update_userinfo_schema } = require('../schema/user')
// 1.获取用户信息模块
router.get('/userinfo', userinfo_handler.getUserInfo)

// 2.更新用户信息模块
router.post('/userinfo', expressJoi(update_userinfo_schema), userinfo_handler.updateUserInfo)

// 3.重置密码
router.post('/updatepwd', userinfo_handler.updatePassword)
module.exports = router