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
    imgbx:{
      topImg:'/images/p1-top.png',
      titImg:'/images/p1-tit.png',
      bomImg:'/images/p1-bom.png'
    },
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
    inputContent: {}
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
    let _datas = 0;
    let _types = _this.data.guideTypeIndex;
    let _salary = _this.data.inputContent.currentSalary;
    console.log(this.data.budgetIndex);
    console.log(this.data.sexIndex);
    console.log(this.data.guideTypeIndex);
    console.log(this.data.inputContent.workPalce);
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
    

    if(_types == 0 && _salary < 10000){
        _datas= 0;
    }
    else if(_types == 1 && _salary < 10000){
        _datas= 1;
    }
    else if(_types == 0 && _salary > 10000){
         _datas= 2;
    }
    else if (_types == 1 && _salary > 10000){
         _datas= 3;
    }

    wx.navigateTo({
      //url: '../content/content?type='+_datas
        url: '../items/items?type=' + "hello?"
    });
  },
  bindchangeInput (e) {
    this.data.inputContent[e.currentTarget.id] = e.detail.value;
  }

})
