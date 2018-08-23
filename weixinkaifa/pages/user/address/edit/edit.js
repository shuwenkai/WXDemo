// pages/user/address/edit/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myid:'',
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
  //删除函数
  del:function(){
    console.log(this.myid);
    wx.request({
      url: 'http://localhost:8888/deladdress.do',
      method:'POST',
      data:{
        id:this.myid
      },
      success:res=>{
        wx.navigateTo({
        url: '../list/list',
      })

      }
    })
  },
  //切换性别
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
    var id=this.myid;
    console.log(this.myid);
    wx.getUserInfo({
      success: res => {
        wx.request({
          url: 'http://localhost:8888/editaddress.do',
          method: 'POST',
          data: {
            id: id,
            name: params.name,
            gender: params.gender,
            tel: params.tel,
            address: params.address
          },
          success: resp => {
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
    this.myid=options.id;
  console.log(options);
  wx.request({
    url: 'http://localhost:8888/getaddress.do',
    method:'POST',
    data:{
      id:options.id
    },
    success:res=>{
      console.log(res)
      this.setData({
        form:res.data[0]
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