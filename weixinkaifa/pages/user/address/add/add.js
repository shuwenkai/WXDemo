// pages/user/address/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: !0,
    form: {
      name: '',
      gender: 'male',
      tel: '',
      address: '',
      is_def: !1,
    },
    radio: [
      {
        name: '先生',
        value: 'male',
        checked: !0,
      },
      {
        name: '女士',
        value: 'female',
      },
    ],
  },
  // 选择地址
  chooseLocation() {
    var _this=this;
    wx.chooseLocation({
        success:function(res){   
          _this.setData({
            'form.address': res.address
          })
        }
      })
  },
  // 切换性别
  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e)
    const value = e.detail.value
    const radio = this.data.radio
    radio.forEach(n => n.checked = n.value === value)
    this.setData({
      radio: radio,
      'form.gender': value,
    })
  },
  // 提交按钮事件
  submitForm(e) {
    const params = e.detail.value;
    wx.getUserInfo({
      success:res=>{
        var user=res.userInfo.nickName;
         wx.request({
      url: 'http://localhost:8888/addaddress.do',
      method:'POST',
      data:{
        user:user,
        name:params.name,
        gender :params.gender,
        tel: params.tel,
        address: params.address
      },
      success:resp=>{
        wx.navigateTo({
          url: '../list/list',
        })
      }
    })
      }
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