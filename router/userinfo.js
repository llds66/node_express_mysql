/**
 * 个人中心模块
 */

const express = require('express')
const router = express.Router()
const userinfo_handler = require('../router_handler/userinfo')  //封装路由处理函数

const expressJoi = require('@escook/express-joi')
const { update_userinfo_schema } = require('../schema/user')//数据检验
const { update_password_schema } = require('../schema/user') //更新密码规则

// 1.获取用户信息模块
router.get('/userinfo', userinfo_handler.getUserInfo)

// 2.更新用户信息模块
router.post('/userinfo', expressJoi(update_userinfo_schema), userinfo_handler.updateUserInfo)

// 3.重置密码模块
router.post('/updatepwd', expressJoi(update_password_schema), userinfo_handler.updatePassword)

// 4.更新用户头像模块
router.post('/upadate/avatar', userinfo_handler.updateAvatar)

module.exports = router