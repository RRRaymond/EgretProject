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
    const requestTask = wx.request({
        // url: 'http://closecv.com:5000/api/score/game1', //仅为示例，并非真实的接口地址
        url: 'http://127.0.0.1:7777',
        header: {
            'content-type': 'application/json'
        },
        success: function (res) {
            console.log(res.data)
        }
    })
  }, 
  onPullDownRefresh: function () {
      // Do something when pull down.
      console.log(666);
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
    let _datas = 0;
    let _types = _this.data.guideTypeIndex;
    console.log(this.data.budgetIndex);
    console.log(this.data.sexIndex);
    console.log(this.data.guideTypeIndex);
    // wx.navigateTo({
    //   url: '../logs/logs?type=1'
    // });
    // return false;

    /*if(typeof(_salary) == 'undefined' || !_salary){
       wx.showModal({
          title: '提示',
          content: '不好意思后面还没做',
          showCancel:false
          
       });
       return false;
    }*/

    wx.navigateTo({
      //url: '../content/content?type='+_datas
        url: '../items/items?type=' + "hello?"
    });
  }
})
