const express = require('express')
const router = express.Router()
const artcate_handler = require('../router_handler/article')

// 1.获取文章分类列表的接口
router.get('/cates',artcate_handler.getArticleCates)



module.exports = router