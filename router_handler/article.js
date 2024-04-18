/**
 * 文章发布请求函数逻辑
 */
const db = require('../db/index')
const multer = require('multer')// 导入解析 formdata 格式表单数据的包
const path = require('path')// 导入处理路径的核心模块
const upload = multer({ dest: path.join(__dirname, '../uploads') })// 创建 multer 的实例对象，通过 dest 属性指定文件的存放路径

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