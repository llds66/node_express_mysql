/**
 * 个人中心模块
 */

const express = require('epxress')
const router = express.Router()

router.get('/userinfo', (req, res) => {
    res.send('请求成功！')
})

module.exports = router