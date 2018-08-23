// pages/user/address/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: [],
    prompt: {
      hidden: !0,
      icon: '../../../../image/icon/iconfont-addr-empty.png',
      title: '还没有收货地址呢',
      text: '暂时没有相关数据',
    },
  },
  toAddressAdd:function(){
    // 新增地址页面
    wx.navigateTo({
      url: '../add/add',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      success:res=>{
        var user = res.userInfo.nickName;
        wx.request({
          url: 'http://localhost:8888/alladdress.do',
          data: {
            user: user
          },
          method: 'POST',
          success: res => {
            this.setData({
              address:res.data
            })
          }
        })
      }
    })
  },
  //修改页面
  toAddressEdit:function(e){
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: '../edit/edit?id=' + e.currentTarget.dataset.id,
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