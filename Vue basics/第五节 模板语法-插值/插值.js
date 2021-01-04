var vm = new Vue({
	el   : "#app",
  data : {
       message: "格神是天才",
       msg     : "hi vue", 
       //声明这个变量：rawHtml 加span标签，是红色的
       rawHtml : '<span style= "color: brown;font-size: 60px; font-family: Futura;"> Hole&Corner</span>',
       color:'blue',     
       number: 10,
       ok: 1,       
       
  },

})

vm.msg = "hi......";

