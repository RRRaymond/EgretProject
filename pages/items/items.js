//index.js
Page({
  data: {
    //   guiders: [{ "img": "../../images/guide/Dr.Zhang.jpeg", "sc": 8.7, "preSale": 0, "nm": "Kailei Zhang", "comments": ["He is so patient.", "He can take wonderful photos for tourists.", "He is so professional that can introduce much culture for us.",], "labels": ["Patient", "Humors", "Handsome"] }, { "img": "../../images/guide/Dr.Cao.jpeg", "sc": 7, "preSale": 1, "nm": "Lei Cao", "comments": ["Good boy.", "Tall and Strong!", "I like him!",], "labels": ["Tall", "Strong", "Handsome"] },{},{},{},{},{}],
    guiders: [],
    limit: 6,
    loading: false,
    windowHeight: 0,
    windowWidth: 0
  },
  onLoad: function (options) {
    // this.setData({
    //   loading: true
    // })
    console.log(options)
  },
  onShow: function(){
    var that = this
    const requestTask = wx.request({
        url: 'http://closecv.com:7777',
        header: {
            'content-type': 'application/json'
        },
        success: function (res) {
            //console.log(res.data)
            that.setData({
                guiders: res.data,
                loading: true
            })
        }
    })
    wx.getSystemInfo({
        success: (res) => {
            this.setData({
                windowHeight: res.windowHeight,
                windowWidth: res.windowWidth
            })
        }
    })
  },
  onPullDownRefresh: function() {               
    wx.showNavigationBarLoading() //在标题栏中显示加载
    this.setData({
      loading: false,
      guiders: []
    })
    
    var that = this
    const requestTask = wx.request({
        url: 'http://closecv.com:7777',
        header: {
            'content-type': 'application/json'
        },
        success: function (res) {
            console.log(res.data)
            that.setData({
                guiders: res.data,
                loading: true
            })
        },
        complete: function(){
            wx.hideNavigationBarLoading() //完成停止加载
            wx.stopPullDownRefresh() //停止下拉刷新
        }
    })
  },
 
  pullUpLoad: function(e) {
    var limit = this.data.limit + 6
    console.log(limit)
    this.setData({
      limit: limit
    })
    this.onShow()
  },
  onReachBottom: function () {
      this.setData({
          loading: false
      })
      var that = this
      setTimeout(function(){
          var m_data = that.data.guiders
          m_data.push(m_data[2], m_data[2], m_data[2])
          that.setData({
              loading: true,
              guiders: m_data
          })
      },1000)
  },
  click:function(e){
      console.log(this.data.guiders)
  }
})
