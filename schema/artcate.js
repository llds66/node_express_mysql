/**
 * 文章分类验证规则
 */
const joi = require('joi')
const { param } = require('../router/user')

// 1.分类名称与别名的规则
const name = joi.string().required()
const alias = joi.string().alphanum().required()

exports.add_cate_schema = {
    body: {
        name,
        alias
    }
}

// 2.分类id的规则
const id = joi.number().integer().min(1).required()
exports.delete_cate_schema = {
    param: {
        id
    }
}

// 3.根据id分类的规则
exports.get_cate_schema = {
    param: {
        id
    }
}
