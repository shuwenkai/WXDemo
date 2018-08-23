// pages/product/sofa/sofa.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product:[]
  },
  topro:function(e){
    // console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: '../pro/pro?id=' + e.currentTarget.dataset.id + '&cla=' + e.currentTarget.dataset.cla,
    })
  },
  addCart: function (e) {
    // console.log(e.currentTarget.dataset.id)
    wx.getUserInfo({
      success: res => {
        wx.request({
          url: 'http://localhost:8888/addcart.do',
          data: {
            id: e.currentTarget.dataset.id,
            name: res.userInfo.nickName
          },
          method: 'POST',
          success: res => {
            console.log(res);
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'http://localhost:8888/allSofa.do',
      method:'POST',
      success:function(resp){
        that.setData({
          product:resp.data
        })
      }
    })
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