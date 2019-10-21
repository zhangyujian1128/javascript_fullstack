Page({
  data:{
    markers:[],
    longitude:115.832777,     //经度
    latitude:28.724024,      //纬度
    scale:18
  },
  onLoad(){
    //微信赋予小程序可以调用的API
    wx.showLoading({
      title: '获取坐标中'
    });
    //手机的GPS
    wx.getLocation({
      type:'gcj02',
      success:(res)=>{
        let {longitude,latitude}=res;
        this.tocreateMarkers(longitude,latitude)

        //console.log(longitude,latitude);
        this.setData({
          longitude,
          latitude
        },()=>{
          wx.hideLoading();
        })
      }
    })
  },
  onReady(){
    this.mapCtx =wx.createMapContext('myMap');
      
  },
  toVisit(e){
    console.log(e);
  },
  toScan(){
    return wx.scanCode({
      success:(res)=>{
        wx.showModal({
          title:'scan',
          content:JSON.stringify(res)
        })
      }
    })
  },
  toUser(){

  },
  toMsg(){

  },
  toReset(){
    //当你使用地图来来去去的，再回来当初的起点
    this.mapCtx.moveToLocation();
    this.setData({
      scale:18
    })
  },

  tocreateMarkers(longitude,latitude){
    let markers = [
      {
        "id":1,
        "iconPath":"../../images/map-bicycle.png",
        "latitude":latitude,
        "longitude":longitude,
        "width":52.5,
        "height":30,
        "callout":{}
      }
    ]
    this.setData({
      markers
    })
  }
})