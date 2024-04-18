/**
 * 文章发布请求函数逻辑
 */
const multer = require('multer')// 导入解析 formdata 格式表单数据的包
const path = require('path')// 导入处理路径的核心模块
const upload = multer({ dest: path.join(__dirname, '../uploads') })// 创建 multer 的实例对象，通过 dest 属性指定文件的存放路径

// 1.发布新文章的处理函数
exports.addArticle = (req, res) => {
    console.log(req.body) // 文本类型的数据
    console.log('--------分割线----------')
    console.log(req.file) // 文件类型的数据

    res.send('ok')
}