//index.js
Page({
  data: {
      films: [{ "img": "../../images/guide/Dr.Zhang.jpeg", "sc": 8.7, "preSale": 0, "nm": "Kailei Zhang", "comments": ["He is so patient.", "He can take wonderful photos for tourists.", "He is so professional that can introduce much culture for us.",], "labels": ["Patient", "Humors", "Handsome"] }, { "img": "../../images/guide/Dr.Cao.jpeg", "sc": 7, "preSale": 1, "nm": "Lei Cao", "comments": ["Good boy.", "Tall and Strong!", "I like him!",], "labels": ["Tall", "Strong", "Handsome"] },{},{},{},{},{}],
    limit: 6,
    loading: false,
    windowHeight: 0,
    windowWidth: 0
  },
  onLoad: function () {
    this.setData({
      loading: true
    })
  },
  onShow: function(){
    var that = this
    
    wx.getSystemInfo({
        success: (res) => {
            console.log(res.windowWidth);
            that.setData({
                windowHeight: res.windowHeight,
                windowWidth: res.windowWidth
            })
        }
    })
  },
  pullDownRefresh: function(e) {
    //this.onLoad()
    console.log(this.data.films)
  },
  pullUpLoad: function(e) {
    var limit = this.data.limit + 6
    console.log(limit)
    this.setData({
      limit: limit
    })
    this.onShow()
  },
  click:function(e){
      console.log(this.data.films)
  }
})
