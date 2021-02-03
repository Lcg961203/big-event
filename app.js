// 导入express模块
const { LOADIPHLPAPI } = require('dns')
const express = require('express')
const app = express()
const path = require('path')

// 开启服务器并配置端口
app.listen(3007, () => console.log('大事件服务器启动啦.....'))

// 加载路由模块,并注册路由
// 注册登录路由
app.use('/api', require(path.join(__dirname, 'router', 'login')))
// 文章类别
app.use('/my/article', require(path.join(__dirname, 'router', 'category')))
// 文章
app.use('/my/article', require(path.join(__dirname, 'router', 'article')))
// 个人中心
app.use('/my',require(path.join(__dirname,'router','user')))
