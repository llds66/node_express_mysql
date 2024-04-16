/**
 * 个人中心路由处理函数模块
 */

const { date } = require('joi')
const db = require('../db/index')
const bcrypt = require('bcryptjs')

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
    const sql = `select * from ev_users where id=?`    //sql语句
    db.query(sql, req.user.id, (err, results) => {
        if (err) return res.cc(err) // sql执行失败
        if (results.length !== 1) return res.cc('更新密码失败 用户不存在') //影响行数错误
        // 判断旧密码是否正确
        const compareResult = bcrypt.compareSync(req.body.oldPwd, results[0].password)
        if (!compareResult) return res.cc('旧密码错误')

        // 更新密码
        const sql = `update ev_users set password=? where id=?`
        const newPwd = bcrypt.hashSync(req.body.newPwd, 10)
        db.query(sql, [newPwd, req.user.id], (err, results) => {
            if (err) return res.cc(err) // sql执行失败
            if (results.affectedRows !== 1) return res.cc('更新密码失败') //影响行数错误
            res.cc('更新密码成功', 0)
        })
    })
}

// 4.更新用户头像的函数
exports.updateAvatar = (req, res) => {
    const sql = `update ev_users set user_pic=? where id=?`
    db.query(sql, [req.body.avatar, req.user.id], (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('更新密码失败 用户不存在')
        return res.cc('更新用户头像成功！', 0)
    })
}
