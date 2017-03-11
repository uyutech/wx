//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    imgUrls: [
      'https://modao.cc/uploads2/images/804/8040490/raw_1489133599.jpeg',
      'http://wx4.sinaimg.cn/bmiddle/bc9ff833gy1fddzb3or0mj20ya0qoafm.jpg',
      'http://wx1.sinaimg.cn/bmiddle/ae0a29degy1fdftby51zzj20xc0m8adm.jpg'
    ],
    follow: [
      {
        img: 'http://tva2.sinaimg.cn/crop.0.0.179.179.50/6df98ffegw1edi8qo38xuj20500500t1.jpg',
        name: 'aaa'
      },
      {
        img: 'http://tva2.sinaimg.cn/crop.69.43.430.430.50/9dda3dcejw8fbfz792apkj20dw0dwjrk.jpg',
        name: 'bbb'
      },
      {
        img: 'http://tva4.sinaimg.cn/crop.20.7.413.413.50/aaf2c648jw8er5gol07czj20ge0htn02.jpg',
        name: 'ccc'
      }
    ],
    news: [
      {
        type: '',
        img: 'http://tva2.sinaimg.cn/crop.69.43.430.430.50/9dda3dcejw8fbfz792apkj20dw0dwjrk.jpg',
        name: 'test',
        time: '2017-01-02',
        content: 'sdfsdsawefafs'
      },
      {
        type: '',
        img: 'http://tva4.sinaimg.cn/crop.20.7.413.413.50/aaf2c648jw8er5gol07czj20ge0htn02.jpg',
        name: 'dfth',
        time: '2017-03-02',
        content: 'llllllsdkjkj'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
