// const clock = document.querySelector("h2#clock");

// function sayHello() {
//     console.log("hello");
// }

// sayHello();

// //setinterval 이랑 비슷함
// setTimeout(sayHello, 5000);

//브라우저 console에서 new Date()를 하면 오늘날짜를 가져옴
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

/*
console에 
> 이렇게 입력을 하면 
< 이렇게 나옴



const date = new Date();

date.getDate()
2   => 오늘이 화요일이여서 2가나옴

date.getDay()
9   => 오늘이 9일이여서

date.getFullyear()
2023

date.getHours()
2

date.getMinutes()
11

date.getSeconds()
54 

*/

const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}
getClock();
setInterval(getClock, 1000);