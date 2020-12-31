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