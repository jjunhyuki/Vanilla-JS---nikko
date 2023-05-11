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

// const clock = document.querySelector("h2#clock");

// function getClock() {
//     const date = new Date();
//     clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
// }
// getClock();
// setInterval(getClock, 1000);

/*
    브라우저 console에 padStart() 써보기
    padStart와 padEnd 함수는 ES8(ES2017)에 새롭게 추가된 기능이다. 
    pad는 좌우에 특정한 문자열로 채우는 기능이다. 
    좀더 자세히 얘기하면 첫번째 파라미터인 maxLength를 받아 문자열의 길이가 maxLength보다 작을 경우 나머지를 특정한 문자열로 채워주는 기능이다.
    이때 두번째 문자열을 넘겨주지 않으면 빈 공백으로 문자열을 채운다.
    ex) String.prototype.padStart(maxLength, ?fillString);
        > "hello".padStart(20, "x");
        < "xxxxxxxxxxxxxxxhelo" 

    "1".padStart(2, "0"); => 1 string가 오면 2글자 까지 1글자 앞에 0을 채우라는 함수 => 01, 02, 03, 04 이런식으로 됨 
    ㄴ> 이렇게 되어있으면 string이 1개짜리가 있으면 padding을 padstart 
        즉 string 시작하는 부분에 padding을 2번째 인자를 채우는 함수이다)
    "1".padend(); 요 함수는 뒤에다 padding을 붙이는 함수이다. 사용법은 start와 동일     
*/
const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

/* < new Date().getHours()
   > 19 (int)
   > String(new Date(). getHours())
   < "19" (string)
   ㄴ> 이렇게 값을 스트링으로 받고싶으면 String()으로 감싸면 됨
*/
getClock();
setInterval(getClock, 1000);
