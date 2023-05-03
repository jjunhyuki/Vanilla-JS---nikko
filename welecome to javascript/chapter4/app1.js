// const loginForm =document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");


const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick(){
// 	console.dir(loginInput);
// 	console.log("click it!!");
// }

// loginButton.addEventListener("click", onLoginBtnClick);



// function onLoginBtnClick(){
// 	console.log("hello", loginInput.value);
// }

// loginButton.addEventListener("click", onLoginBtnClick);


// function onLoginBtnClick(){
// 	const username = loginInput.value;
// 	if (username === "") {
// 		alert("Please write yout name");
// 	} else if (username.length < 4) {
// 		alert ("your name is too short")
// 	} else if (username.length > 15) {
// 		alert ("your name is too long");
// 	}
// }

// loginButton.addEventListener("click", onLoginBtnClick);



function onLoginBtnClick(){
	const username = loginInput.value;
		console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);