// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      imurl: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      if (options.titles == "Kailei Zhang") {
          this.setData({
              imurl: '../../images/guide/Dr.Zhang2.jpg'
          });
          
      }
      console.log(this.data.imurl);
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
  
  },
  call: function(e){
      wx.makePhoneCall({
          phoneNumber: '15801758610' //仅为示例，并非真实的电话号码
      })
  },
  find: function(e){
      wx.getLocation({
          type: 'gcj02', //返回可以用于wx.openLocation的经纬度
          success: function (res) {
              var latitude = res.latitude
              var longitude = res.longitude
              wx.openLocation({
                  latitude: latitude+0.01,
                  longitude: longitude+0.01,
                  scale: 28
              })
          }
      })
  }
})