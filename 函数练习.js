
//return的用法
//1.先赋值给一个新变量
function multiply(a, b){
    let c = `${a}` * `${b}`;
    return c;
}

//2.也可以直接return一个表达式
function multiply(a, b){
    return c = `${a}` * `${b}`;
   
}

//Arrow Function 箭头函数
// 重点七个方法
     // forEach
     // map
     // filter
     // find
     // reduce
     // some
     // every

     //-------------------------------------------------------------------//
     //.forEach()：accept a callback function, calls the function once per element in the array
     const nums = [9,8,7,6,5,4,3,2,1];
     nums.forEach(function (n){

     	console.log(n*n)
     	//prints:81,64,49,36,25,16,9,4,1
     });

     nums.forEach(function (el){
     	if(el % 2 === 0){
     		console.log(el)
     		//prints: 8, 6, 4, 2
     	}
     })

     //------------------------------------------------------------------//
     //.MAP(): 返回一个数组，Creates a new array with the results of calling a callback on every element in the array
     const texts = ['rof','lol','omg','ttyl'];
     const caps = texts.map(function(t){
     	return t.toUpperCase();
     })

     //caps
    //输出 ["ROF", "LOL", "OMG", "TTYL"]

    //texts
    //输出 ["rof", "lol", "omg", "ttyl"]
    //-------------------------------------------------------------------//

    //1.箭头函数 的格式：括号里+参数
    const square = (x) => {
    	return x*x;
    }
    //square(9)
    //输出81

    const sum = (x,y) => {
    	return x+y;
    }
    //sum(2,8)
    //输出10

   // 2. 当只有一个参数时，可以不加括号 
      const squre = x => {
      	return x*x;
      }

    //3. 没有参数时，用空的括号
      const singASong = () => {
      	return "LA LA LA LA";
      }

     //----------------------------------------------------------------//
      //定义一个函数时，return可以隐去。定义一个函数有这么多种写法
      //1. 常规写法
      const isEven = function(num){ 
      	return num % 2 === 0;
      }

      //2. 括号包着参数
      const isEven = (num) => {
      	return num % 2 === 0;
      }

      //3. 参数外面不加括号
      const isEven = num => {
      	return num % 2 === 0;
      }

      //4. 隐形return， 参数外面不加括号。但是最外面的大括号要改成 圆括号！！！
      const isEven = num => (
      	    num % 2 ===0;
		);

      //5. 写在一行 隐形return
      const isEven = num => num % 2 === 0;

      //============================================================//
      // .FIND(): 返回数组中满足函数条件的第一个元素
       let movies = [
       	"The Fantanstic Mr.fox",
       	"aaaaaa",
       	"bbbbbb",
       	"Deeds"
       ]

       let movie = movies.find(movie => {
       	   return movie.includes('a')
       })


       //==========================================================//
       // .Filter(): 创建一个新的数组，with 所有满足函数条件的元素

       const nums = [1,2,3,4,5,6]
       const odds = nums.filter(n => {
       		return n % 2 === 1;
       })

        //[1,3,5]

       const smallNums = nums.filter(n => n<=4);
       //[1,2,3,4]

        //==========================================================//
        // .Every(): 返回一个boolean。测试是否数组里的所有元素都满足函数条件

        const words = ['a', 'ab','ac','ad', 'a78', 'a25']
        let temp = words.every(word => {
        	return word.length === 3;
        }) // false

       words.every(word => word[0] === 'd');  
       words.every(w)


       //========================================================//
        