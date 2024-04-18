/**
 * 文章发布请求函数逻辑
 */

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
    res.send('ok')
}