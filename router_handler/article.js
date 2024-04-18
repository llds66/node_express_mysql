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
    res.send('新增文章分类成功')
}
