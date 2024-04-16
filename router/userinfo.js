/**
 * 个人中心模块
 */

const express = require('express')
const router = express.Router()
const userinfo_handler = require('../router_handler/userinfo')

// 1.获取用户信息模块
router.get('/userinfo', userinfo_handler.getUserInfo)

// 2.更新用户信息模块
router.post('/userinfo', userinfo_handler.updateUserInfo)
module.exports = router