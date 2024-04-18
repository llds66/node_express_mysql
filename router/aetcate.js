const express = require('express')
const router = express.Router()
const artcate_handler = require('../router_handler/article')

// 1.获取文章分类列表的接口
router.get('/cates',artcate_handler.getArticleCates)

//2.新增文章分类的接口
router.post('/addcates',artcate_handler.addArticleCates) 

module.exports = router