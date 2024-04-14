# node_express_mysql后端服务开发

## Node.js
### 模块化

+ module.exports对象
+ npm包管理

### 内置模块

+ fs文件系统模块
+ path路径模块
+ http模块

## Express.js

`npm i express`

是基于 Node.js 平台，快速、开放、极简的 Web 开发框架， Express 的作用和 Node.js 内置的 http 模块类似，是专门用来创建 Web 服务器的, Express 是基于内置的 http 模块进一步封装出来 。

### 路由

### 中间件

### 接口

## mysql模块

`npm i mysql`

### 增

### 删

### 改

### 查

## 身份认证

### JWT(JSON Web Token)

Header.Payload.Signature 由Header（头部），Payload（有效载荷），Signature（签名）三部分组成.

客户端收到服务器返回的 JWT 之后，通常会将它储存在 localStorage 或 sessionStorage 中。 此后，客户端每次与服务器通

信，都要带上这个 JWT 的字符串，从而进行身份认证。推荐的做法是把 JWT 放在 HTTP 请求头的 Authorization 字段中 