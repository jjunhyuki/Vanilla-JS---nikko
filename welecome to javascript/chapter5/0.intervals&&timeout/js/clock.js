const clock = document.querySelector("h2#clock");

function sayHello() {
    console.log("hello");
}

//함수를 매2초 마 실행시키고 싶을때 
//두번째 인자는 새로고침 할 시간으로 받는데 5000 => 5second
setInterval(sayHello, 5000);
//5초마다 sayhello함수를 실행함