// pages/common/pop/pop.js
Page({
  options:{
    multipleSlots:true // 在组件定义时的选项启用多slot支持
  },
  properties:{
    title:{
      type:String,
      value:'标题'
    },
    content:{
      type:String,
      value:'弹窗内容'
    },
    cancleText:{
      type:String,
      value:'取消'
    },
    confirmText:{
      type:String,
      value:'确定'
    },
  },
  /**
   * 页面的初始数据
   */
  data: {
    isShow:false
  },
  methods:{
    // 公有方法
    hideDialog() { 
      this.setData({ 
        isShow: !this.data.isShow 
      }) 
    }, 
    //展示弹框 
    showDialog() { 
      this.setData({ 
        isShow: !this.data.isShow 
      }) 
    }, 
    /** 
     * 内部私有方法建议以下划线开头 
     * triggerEvent 用于触发事件 
    */ 
    _cancelEvent() { //触发取消回调 
      this.triggerEvent("cancelEvent") 
    }, 
    _confirmEvent() { //触发成功回调 
      this.triggerEvent("confirmEvent"); 
    } 
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