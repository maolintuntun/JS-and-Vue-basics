//点击Greet按钮 跳出一个alert的警示 上面写着 HelloVue.js!

var example1 = new Vue({
	
  el   : "#example-1",
  data : {
      name: 'Vue.js'
  },
   // define methods under the 'methods' object
   methods: {
      greet: function(event){
         //'this' inside methods points to the Vue instance
         alert('Hello' + this.name + '!')
         
         //'event' is the native DOM event
         if(event){
           alert(event.target.tagName)
         }
      }
   }
})
