/**
 * 个人中心路由处理函数模块
 */

// 获取用户信息
const { date } = require('joi')
const db = require('../db/index')

exports.getUserInfo = (req, res) => {
    const sql = `select id,username,nickname,email,user_pic from ev_users where id=?` // sql语句
    db.query(sql, req.user.id, (err, results) => {
        if (err) return res.cc(err) // sql执行失败
        if (results.length !== 1) return res.cc('获取用户信息失败') //影响行数错误
        res.send({
            status: 0,
            message: '获取用户信息成功',
            data: results[0]
        })
    })
}