/*
**定义校验规则
*/

const e = require('express')
const joi = require('joi')

/**
 * string() 值必须是字符串
 * alphanum() 值只能是包含 a-zA-Z0-9 的字符串
 * min(length) 最小长度
 * max(length) 最大长度
 * required() 值是必填项，不能为 undefined
 * pattern(正则表达式) 值必须符合正则表达式的规则
 */

// 1.注册和登录表单的验证规则对象
const username = joi.string().alphanum().min(1).max(10).required()
const password = joi
  .string()
  .pattern(/^[\S]{6,12}$/)
  .required()

exports.reg_login_schema = {
  body: {
    username,
    password,
  },
}

//2.更新信息：验证表单数据
const id = joi.number().integer().min(1).required()
const nickname = joi.string().required()
const user_email = joi.string().email().required()
exports.update_userinfo_schema = {
  body: {
    id,
    nickname,
    email: user_email
  }
}
// 3.验证密码：新旧密码符合规则，新与旧不同
exports.update_password_schema = {
  body: {
    oldPwd: password,  //password规则
    newPwd: joi.not(joi.ref('oldPwd')).concat(password)
  }
}

// 4.更新头像：检验
const avatar = joi.string().dataUri().required() //dataUri()规则的数据
exports.update_avataar_schema = {
  body: {
    avatar,
  }
}
