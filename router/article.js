const express = require('express')
const router = express.Router()
const article_handler = require('../router_handler/article') //请求处理逻辑

const expressJoi = require('@escook/express-joi')
const { add_article_schema } = require('../schema/article') //验证规则对象

router.post('/add',upload.single('cover_img'),expressJoi(add_article_schema),  article_handler.addArticle)

module.exports = router