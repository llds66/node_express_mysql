/**
 * 个人中心路由处理函数模块
 */

const { date } = require('joi')
const db = require('../db/index')

// 1.获取用户信息函数
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

// 2.更新用户信息函数
exports.updateUserInfo = (req, res) => {
    const sql = `update ev_users set ? where id=?`    //定义sql
    db.query(sql, [req.body, req.body.id], (err, results) => {
        if (err) return res.cc(err) // sql执行失败
        if (results.affectedRows !== 1) return res.cc('更新用户信息失败') //影响行数错误
        return res.cc('更新信息成功', 0)
    })
}

// 3.更新密码的函数
exports.updatePassword = (req, res) => {
    res.send('更新密码成功')
}
