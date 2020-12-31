
/* 外层声明的data是一个对象的形式 
*/
var data = {a : 1};

//如果这个b定义了，之后就会输出APK。如果没有，就不输出
/* var data = {b : 3}; */

/* 用vm保存了vue的实例 */
var vm = new Vue({
    el   : '#app',
    
    /* 第一个data表示的是vue对象的一个属性，
       而第二个data是外面的那个全新的变量。而且他是对象形式的。 */
    data : data
    
});

/* watch方法：
   放在变量变化之前。
   观察一个变量的变化，并获取这个变量变化前和变化后的结果 */
vm.$watch('a',function(newVal, oldVal){
     console.log(newVal, oldVal);
})

/* //data.b并不能输出，如果我们想让某一个属性或者某一个变量能够响应式的。我们要在new Vue之前的那个data提前进行声明
data.b = "APK";

  学习vue的响应式 
  对data进行改变
data.a = "hi...new..."


vm.a = "test!!!!";
这里要明白data对a属性的结果和vm对a属性的结果改变是完全一样的
data.a == vm.a; */

/* 
第二种改变属性的形式 ：用$符 */
vm.$data.a = "really"


   