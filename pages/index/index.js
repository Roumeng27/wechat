//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    Bool:false,
    current: '1',
    tab1: true,
    swiperCurrent: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    circular: true,
    indicatorCo:"#ffdfdc",
    indicatoraAC:"#ff948a",
    typeTag:[
      {
        typename:'选项一',
        keyId:'1'
      },
      {
        typename:'选项二',
        keyId:'2'
      },
      {
        typename:'选项三',
        keyId:'3'
      },
    ],
    question:[
      {
        answer:'我是选项一，我的目标是学精学细',
        id:'1'
      },
      {
        answer:'我是选项二，我的目标是拥有自己的专业技巧',
        id:'2'
      },
      {
        answer:'我是选项三，我的目标是暴富',
        id:'3'
      },
    ],
    imgUrls:[
      '../../static/images/starSky.jpg',
      '../../static/images/great.jpg',
      '../../static/images/city.jpg',
    ]
  },
  handleChange ({ detail }) {
    this.setData({
      current: detail.key
    });
  },
  //轮播图的切换事件
  swiperChange:((e)=>{
    // this.setData({
    //   swiperCurrent: e.detail.current
    // })
  }),
  swipclick: function (e) {
    // wx.switchTab({
    //   url: this.data.links[this.data.swiperCurrent]
    // })
  },
  handeleClick(){
    this.dialog.properties.isShow = true;
  },
  //取消事件 
  _cancelEvent() {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  }, 
  //确认事件 
  _confirmEvent() {
    console.log('你点击了确定');
    this.dialog.hideDialog();
  },
  onLoad: function () {
   
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.dialog = this.selectComponent("#dialog"); 
    console.log(this.dialog)
  },
})
