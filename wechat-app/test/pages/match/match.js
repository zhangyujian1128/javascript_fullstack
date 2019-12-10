Page({
  onLoad() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        console.log(res.winowHeight)
        that.setData({
          clientHeight: res.windowHeight
        });
      }
    })
  },
  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换
    currentTab: 0,
    order: [],
    orderlist: {},
  },
  bindChange: function(e) {
    console.log("滑动切换会触发的事件")
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  swichNav: function(e) {
    console.log("点击上方选项卡触发的事件")
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})
