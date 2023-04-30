/* const title = document.querySelector("div.hello.first-child h1");

console.log(title);

title.innerText = "hello";
*/

//const title = document.querySelector("div.hello.first-child h1");

//console.dir(title);

//title.innerText = "hello"; 

//title.style.color = "blue";

const title = document.querySelector("div.hello.first-child h1");

function handleTitleClick(){
    //console.log("title was clicked");
    title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);