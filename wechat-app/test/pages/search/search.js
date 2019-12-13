// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputquery: '',
    hotsearch: '梅西金球奖专访'
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})