var vm = new Vue({
	el   : "#app",
  data : {
       msg     : "hi vue",
       rawHtml : '<span style= "color: blue" >this is should be blue </span>'
       
  },
  
  //生命周期钩子的函数 以属性的方式
  
  //整个页面创建之前 需要调用的一个生命周期
  //在实例初始化之后，数据观测data observer和 event/watcher 事件配置之前被调用
  beforeCreate:function(){
  	console.log('beforeCreated');
  },
  
  //在实例被创建完成后被立即调用，在这一步，实例已完成以下的配置：数据观测data observer,属性和方法的运算，watcher/event事件回调。然而挂载阶段还没开始，$el属性目前不可见
  created : function(){
  	console.log('created');
  },
  
  //在挂载开始之前被调用，相关的渲染函数首次被调用
  beforeMount : function(){
  	console.log('beforeMount');
  },
  //le被新创建的vm.$el替换，挂载成功
  mounted: function(){
  	console.log('mounted');
  },
  
  //数据变化，更新时调用
  beforeUpdate : function(){
  	console.log('beforeUpdate');
  },
  
  //组件DOM已经更新，组件更新完毕
  update : function(){
  	console.log('update');
  }
  
  
  
});

vm.msg = "hi......";