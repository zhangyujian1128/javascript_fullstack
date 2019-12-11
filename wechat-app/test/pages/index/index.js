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
        { url: "/image/swiper1.jpg", title: "今夜，巴塞罗那登上了欧洲之巅！" },
        { url: "/image/swiper2.jpg", title: "梅西继续领跑射手榜" },
        { url: "/image/swiper3.jpg", title: "“MSG”组合火力全开各入一球，巴塞罗那继续领跑积分榜第一名" },
        { url: "/image/swiper4.jpeg", title: "C罗陷入球荒，各项赛事六轮不进" }
      ],
    news:[
      { url: "../../image/swiper1.jpg", title: "今夜，巴塞罗那登上了欧洲之巅！" },
      { url: "../../image/swiper2.jpg", title: "梅西继续领跑射手榜" },
      { url: "../../image/swiper3.jpg", title: "“MSG”组合火力全开各入一球，巴塞罗那继续领跑积分榜第一名" },
      { url: "../../image/swiper4.jpeg", title: "C罗陷入球荒，各项赛事六轮不进" }
    ]
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
