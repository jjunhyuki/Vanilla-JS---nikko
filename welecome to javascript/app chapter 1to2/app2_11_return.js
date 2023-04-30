/* const calculator = {
	plus: function (a, b){
		console.log(a + b);
	},
	minus: function (a, b){
		console.log(a - b);
	},
	times: function (a, b){
		console.log(a * b);
	},
	divide: function (a, b){
		console.log(a / b);
	},
	power: function (a, b){
		console.log(a ** b);
	},
};

calculator.plus(2,3);
calculator.minus(2,3);
calculator.times(2,3);
calculator.divide(2,3);
calculator.power(2,3);


const calculator1 = {
	plus: function (a, b){
		alert(a + b);
	},
	minus: function (a, b){
		alert(a - b);
	},
	times: function (a, b){
		alert(a * b);
	},
	divide: function (a, b){
		alert(a / b);
	},
	power: function (a, b){
		alert(a ** b);
	},
};

calculator1.plus(2,3);
calculator1.minus(2,3);
calculator1.times(2,3);
calculator1.divide(2,3);
calculator1.power(2,3);

//console.log(calculator1.plus(2,3))
*/

/*const age =96;
function calculatorKrAge(ageOfForeigner){
	return  (ageOfForeigner + 2);
}

const krAge = calculatorKrAge(age);

console.log(krAge); 
*/

const calculator = {
	plus: function (a, b){
		return(a + b);
	},
	minus: function (a, b){
		return(a - b);
	},
	times: function (a, b){
		return(a * b);
	},
	divide: function (a, b){
		return(a / b);
	},
	power: function (a, b){
		return(a ** b);
	}
}

const plusResult = calculator.plus(2.3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResut = calculator.power(divideResult, minusResult);