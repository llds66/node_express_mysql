/**
 * 文章发布请求函数逻辑
 */
const db = require('../db/index')
// 1.发布新文章的处理函数
exports.addArticle = (req, res) => {
    // console.log(req.body) 
    // console.log('--------分割线----------')
    // console.log(req.file) 
        // 手动判断是否上传了文章封面
  if (!req.file || req.file.fieldname !== 'cover_img') return res.cc('文章封面是必选参数！')
  const sql = `insert into ev_articles set ?`  
  db.query(sql, articleInfo, (err, results) => {
    if (err) return res.cc(err)
    if (results.affectedRows !== 1) return res.cc('发布文章失败！')
    res.cc('发布文章成功', 0)
  })
}