// 封装db
function db(sql, params = null, callback) {
    // 导入mysql模块
    const mysql = require('mysql')
    // 
    const conn = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'user' 
    })
    conn.connect()
    conn.query(sql, params, callback)
    // 关闭连接
    conn.end()
}

// 导出函数
module.exports = db