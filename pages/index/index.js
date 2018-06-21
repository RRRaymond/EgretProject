const app = getApp();
Page({
  onShareAppMessage: function () {
      return {
          title: 'Here',
          desc: 'Here'
      }
  },
  data: {
    userInfo: {},
    button: {
      defaultSize: 'default',
      disabled: false,
      plain: false,
      loading: false
    },
    guideType: ['-','Basic', 'Advanced', 'Senior'],
    guideTypeIndex: 0,
    age: ['-','18~23', '23～30', '30～40', ' 40+'],
    ageIndex: 0,
    sex: ['-','Male', 'Female'],
    sexIndex: 0,
    budget: ['-','30 or less', '30～50','50～100', '100 or more'],
    budgetIndex: 0,
    destination: ['-','Hawaii', 'Maldives', 'Bali Island', 'Hangzhou', 'Xianghu Lake'],
    desIndex: 0,
  },
  onLoad () {
    let that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      });
    })
  }, 
  bindageChange(e) {
      let _this = this;
      _this.setData({
          ageIndex: e.detail.value
      })
  },
  binddesChange(e) {
      let _this = this;
      _this.setData({
          desIndex: e.detail.value
      })
  },
  bindbudgetChange(e) {
      let _this = this;
      _this.setData({
          budgetIndex: e.detail.value
      })
  },
  bindsexChange(e) {
    let _this = this;
    _this.setData({
      sexIndex: e.detail.value
    })
  },
  bindPickerChange (e) {
    let _this  = this;
    _this.setData({
      guideTypeIndex: e.detail.value
    })
  },
  findGuide (e){
    let _this  = this;
    let m_data = this.data;
    let sum = m_data.guideTypeIndex * m_data.sexIndex * m_data.ageIndex * m_data.desIndex * m_data.budgetIndex
    if(sum === 0){
       wx.showModal({
          title: '提示',
          content: '请填写你的需求',
          showCancel:false
       });
       return false;
    }

    wx.navigateTo({
        url: '../items/items?type=' + m_data.guideTypeIndex + '&sex=' + m_data.sexIndex + '&des=' + m_data.desIndex + '&budget=' + m_data.budgetIndex + '&age=' + m_data.ageIndex
    });
  }
})
