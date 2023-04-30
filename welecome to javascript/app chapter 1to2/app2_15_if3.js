const age = NaN;

if(isNaN(age)){
    console.log("please write a number");
} else if (age < 18){
    console.log("you are too young.");
} else if (age >= 18 && age <= 50){
    console.log("you can drink");
} else if (age > 50 && age <= 80){
    console.log("you should exercise");
} else if(age > 80){
    console.log("you can do whatever you want.");
}