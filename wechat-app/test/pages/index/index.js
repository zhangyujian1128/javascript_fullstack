//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list:[
      { name: '转会', id: 'zhuanhui' },
      { name: '头条', id: 'toutiao' },
      { name: '热门', id: 'remen' },
      { name: '西甲', id: 'xijia' },
      { name: '欧冠', id: 'ouguan' },
      { name: '深度', id: 'shendu' },
      { name: '英超', id: 'yingchao' },
      { name: '闲情', id: 'xianqiang' }
    ],
    match:[

    ],
    hotsearch: '梅西金球奖专访',
    current: 'toutiao',
    inputquery: '',
    msgList: [
        { url: "/image/swiper1.jpg", title: "今夜，巴塞罗那登上了欧洲之巅！" },
        { url: "/image/swiper2.jpg", title: "梅西继续领跑射手榜" },
        { url: "/image/swiper3.jpg", title: "“MSG”组合火力全开各入一球，巴塞罗那继续领跑积分榜第一名" },
        { url: "/image/swiper4.jpeg", title: "C罗陷入球荒，各项赛事六轮不进" }
      ]
  },
  clicktop(e){
    this.setData({
      current: e.currentTarget.dataset.id
    })
  },
  getinput(e){
    console.log(e.detail.value)
    this.setData({
      inputquery: e.detail.value
    })
  },
  clearinput(e){
    console.log(e)
    this.setData({
      inputquery: ''
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
