const express = require('express')
const router = express.Router()

// 1.获取文章分类列表的接口
router.get('/cates',(req,res) =>{
    res.send('获取文章成功!')
})



module.exports = router