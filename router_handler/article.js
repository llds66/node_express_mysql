/**
 * 文章列表分类
 */
const db = require('../db/index')

// 1.获取文章列表分类的模块
exports.getArticleCates = (req, res) => {
    const sql = 'select * from ev_article_cate where is_delete=0 order by id asc'
    db.query(sql, (err, results) => {
        if (err) return res.cc(err)
        res.send({
            status: 0,
            message: '获取文章分类列表成功...',
            data: results

        })
    })

}
// 2.新增文章分类
exports.addArticleCates=(req,res)=>{
    // 2.1是否存在，占用
    const sql = `select * from ev_article_cate where name=? or alias=?`
    db.query(sql,[req.body.name,req.body.alias],(err,results) =>{
        if(err) return res.cc(err)
        if(results.length === 2) return res.cc('名称与别名已占用,请更换重试。')
        if(results.length === 1 && results[0].name === req.body.name) return res.cc('名称已占用,请更换重试。')
        if(results.length === 1 && results[0].alias === req.body.alias) return res.cc('别名已占用,请更换重试。')
        res.send('新增成功')
    })
}
