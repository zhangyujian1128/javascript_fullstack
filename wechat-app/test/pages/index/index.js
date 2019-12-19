//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list:[
      { name: '转会'},
      { name: '头条'},
      { name: '热门'},
      { name: '西甲'},
      { name: '欧冠'},
      { name: '深度'},
      { name: '英超'},
      { name: '闲情'}
    ],
    hotsearch: '梅西金球奖专访',
    currentTab: 1,
    inputquery: '',

    firstHeight: 0,
    secondHeight: 0,
    thirdHeight: 0,
    forthHeight: 0,
    fifthHeight: 0,
    sixthHeight: 0,
    seventhHeight: 0,
    eighthHeight: 0,
    
    msgList: [
        { src: "/image/swiper1.jpg", title: "今夜，巴塞罗那登上了欧洲之巅！" },
        { src: "/image/swiper2.jpg", title: "梅西继续领跑射手榜" },
        { src: "/image/swiper3.jpg", title: "“MSG”组合火力全开各入一球，巴塞罗那继续领跑积分榜第一名" },
        { src: "/image/swiper4.jpeg", title: "C罗陷入球荒，各项赛事六轮不进" }
      ],
    news:[
      { src: "../../image/swiper1.jpg", title: "今夜，巴塞罗那登上了欧洲之巅！" },
      { src: "../../image/swiper2.jpg", title: "梅西继续领跑射手榜" },
      { src: "../../image/swiper3.jpg", title: "“MSG”组合火力全开各入一球，巴塞罗那继续领跑积分榜第一名" },
      { src: "../../image/swiper4.jpeg", title: "C罗陷入球荒，各项赛事六轮不进" }
    ]
  },
  //点击进入跳转
  search: function(e){
    console.log(e)
    wx.navigateTo({
      url:'../search/search'
    })
  },
  //得到输入框的内容
  getinput(e){
    console.log(e.detail.value)
    this.setData({
      inputquery: e.detail.value
    })
  },
  //清除输入框的内容
  clearinput(e){
    console.log(e)
    this.setData({
      inputquery: ''
    })
  },
  //点击top
  clicktop(e){
    console.log(e)
    this.setData({
      currentTab: e.currentTarget.dataset.current
    })
  },
  //滑动界面
  bindchange(e){
    console.log(e)
    this.setData({
      currentTab: e.detail.current
    })
  },
  //点击轮播图
  clickswiper(e){
    console.log(e)
  },
  //生命周期onload中计算页面高度
  onLoad: function(){
    let oneheight = 224*this.data.news.length
    let twoheight = 400+12+180+12+(224*this.data.news.length)
    console.log(oneheight)
    console.log(twoheight)
    this.setData({
      firstHeight: oneheight,
      secondHeight: twoheight
    })
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
