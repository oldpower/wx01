// page/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'date bangding',
    students: [
      {id: 1001, name: 'a', age: 30},
      {id: 1002, name: 'b', age: 31 },
      {id: 1003, name: 'c', age: 32 }
    ],
    counter:0
  },


  handleBtnClick(){
    //1.这种方式,界面不会刷新
    // this.data.count += 1
    // console.log(this.data.count)

    //2.this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
    //console.log('clices 100')
  },
  handleSubterClick(){
    this.setData({
      counter: this.data.counter - 1
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