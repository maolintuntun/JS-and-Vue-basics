//Submit按钮: 有时我们还需要在内联语句处理程序中访问原始DOM事件。 您可以使用特殊的$event变量将其传递给方法：
 
var example1 = new Vue({

  el: '#example-4',
  methods: {
    warn: function (message, event) {
    
      //现在我们已经接上了native 事件 虽然我不知道这个if想干嘛。。
      if(event){
        event.preventDefault()
      }
      alert(message)
     
    }
    
  }
})

