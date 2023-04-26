//object

const playerName = "junhyuki";
const playerPoints = 10000;
const playerHansome = false;
const playerFat = "little bit";

//player[0] = name;
//player[1] = points;
//player[2] = hansome;
//player[3] = fat;
const player = ["junhyuki", 10000, false, "little bit"];

const player1 = {
	name: "junhyuki",
	points: 10,
	fat: true,
}

console.log(player1);
console.log(player1.name);

console.log(player1.fat);
player1.fat = false;
console.log(player1.fat);

console.log(player1.points);
player1.points = 15
console.log(player1.points);
player1.points = player1.points + 15;
console.log(player1.points);


//can after add 
player1.lastname = "kim";
console.log(player1);

