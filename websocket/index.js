var ws = require('nodejs-websocket')

var clientCount = 0 // 客户数量

var server = ws.createServer(conn => {
  console.log('New connection')

  // console.log(conn)
  clientCount++
  //给每一个客户都广播一个信息，告知有新用户进来
  // broadcast(conn.nickName + '进来了');

  // 获取连接信息
  conn.on("text", (str) => {
    if (str.indexOf("|") == -1) {
      broadcast(`${str}|参与群聊|${clientCount}`)
    } else {
      broadcast(`${str}|${clientCount}`)
    }
  })

  //断开连接的回调
  conn.on("close", (code, reason) => {
    console.log("Connection closed")
    broadcast(conn.nickName + ' leave')
  })

  //处理错误事件信息
  conn.on('error', err => {
    console.log('throw : err');
    console.log(err);
  })

})

server.listen(8090, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('webSocket server listening on port 8090');
})

function broadcast (str) {
  server.connections.forEach(item => {
    item.sendText(str)
  })
}