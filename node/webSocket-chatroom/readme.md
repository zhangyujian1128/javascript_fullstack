## 应用层
http webSocket

http: client  ->>>> server

webSocket: client  -> server
server ->client
全双工双向通信

http2.0: 支持 server-push

# 连接
1. 发送一个 http 请求
    后端 101 switch pro
    Connection: Upgrade
之后 由 http 协议 升级为 webSocket 后续的发送接收信息都会走 这个全双工双向通道