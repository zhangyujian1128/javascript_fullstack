//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    
  },
  globalData: {
    userInfo: null,
    msgList: [
      { src: "/image/swiper1.jpg", title: "1今夜，巴塞罗那登上了欧洲之巅！" },
      { src: "/image/swiper2.jpg", title: "1梅西继续领跑射手榜" },
      { src: "/image/swiper3.jpg", title: "1“MSG”组合火力全开各入一球，巴塞罗那继续领跑积分榜第一名" },
      { src: "/image/swiper4.jpeg", title: "1C罗陷入球荒，各项赛事六轮不进" }
    ],
    news:[
      { src: "../../image/swiper1.jpg", title: "2今夜，巴塞罗那登上了欧洲之巅！" },
      { src: "../../image/swiper2.jpg", title: "2梅西继续领跑射手榜" },
      { src: "../../image/swiper3.jpg", title: "2“MSG”组合火力全开各入一球，巴塞罗那继续领跑积分榜第一名" },
      { src: "../../image/swiper4.jpeg", title: "2C罗陷入球荒，各项赛事六轮不进" }
    ]
  }
})