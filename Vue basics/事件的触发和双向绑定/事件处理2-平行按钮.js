//有两个按钮，一个叫say hi，一个叫say what，放在同一排。
//点击 say hi按钮，跳出hi的窗口.点击say what按钮，跳出what的窗口
var example1 = new Vue({

  el: '#example-3',
  methods: {
    say: function (message) {
      alert(message)
    }
    
  }
})