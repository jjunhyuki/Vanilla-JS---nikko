console.log("hello my name is junhyuki");
console.log("hello my name is hjeong");
console.log("hello my name is kyhan");
console.log("hello my name is hogkim");


function sayHello(nameOfPerson, age) {
	console.log("Hello my name is " + nameOfPerson + "and I'm "+ age);
}

sayHello("junhyuki", 31);
sayHello("hjeong", 30);
sayHello("kyhan", 20);
sayHello("hogkim", 33);

function plus(a, b){
	console.log(a + b);
}
plus(8, 60);

function divide(a, b)
{
	console.log(a / b);
}
divide(90, 20);

const player = {
	name: "junhyuki",
	sayHello1: function(atherPersonName){
		console.log("hola " + atherPersonName+ " nice to meet you");
	},
};

console.log(player.name);
player.sayHello1("junhyuki");
player.sayHello1("hjeong");