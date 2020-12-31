// To make an object literal:
const dog = {
    name: "Rusty",
    breed: "unknown",
    isAlive: false,
    age: 7
}
// All keys will be turned into strings!

// To retrieve a value:
dog.age; //7
dog["age"]; //7

//updating values
dog.breed = "mutt";
dog["age"] = 8;


const years = {
	1999: "GOOD",
	2020: "BAD"

};

//嵌套object和array
///一个object里面有多个objects
const shoppingCart = [
	{
		product:'Jenda Classic',
		price: 6.88,
		quantity:1,
	},

	{
		product:'Echo Dot',
		price: 29.99,
		quantity:3,
	},
	{
		product:'Fire Stick',
		price: 39.99,
		quantity:2,
	}
]

///一个object里面不仅有小object，还有属性
const student = {
	firstName:'David',
	lastName: 'Jones',
	strengths:['Music','Art'],
	exams:{
		midterm: 92,
		final: 88
	}
}

//JS函数
let die1 = Math.floor(Math.random()*6)+1;
let die2 = Math.floor(Math.random()*6)+1;
let die3 = Math.floor(Math.random()*6)+1;
let die4 = Math.floor(Math.random()*6)+1;
let die5 = Math.floor(Math.random()*6)+1;
let die6 = Math.floor(Math.random()*6)+1;


let die1 = rollDie();

//sing function
function singSong(){
	console.log("DO");
	console.log("RE");
	console.log("MI");
}

//parameter参数
function greet(person){
	console.log(`Hi, ${person}`)
}

//如果什么都不输的话会怎么样
function firstName(firstName){
    console.log(`hey there, ${firstName}!`);
}

//多个实参输入
function greet(firstName, lastName){
	console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}


//设计一个函数，叫isSnakeEyes，有两个输入参数。如果这两个输入值都为1，则输出“Snake Eyes!" 如果不是，则输出"Not Snake Eyes!"

function isSnakeEyes(number1, number2){
    
    //顿号不能放到 ==1之后。在比较之前就要把数值提取出来
    if(`${number1}` == 1 && `${number2}` == 1){
        console.log("Snake Eyes!");
    }else{
        console.log("Not Snake Eyes!");
    }
    
}