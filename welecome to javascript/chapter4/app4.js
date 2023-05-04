const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
	event.preventDefault();	
	loginForm.classList.add("hidden");
	const username = loginInput.value;
	//string 합치는 방법1
	//greeting.innerText = "Hello " + username;
	//string 합치는 방법2 ("", '') 이 아닌 `(백틱)이다 ,백틱 : ctrl + ~ 하면 백틱이됨 
	greeting.innerText = `Hello ${username}`;
	//아래 처럼 string 을 더 추가해서 넣어도 됨!
	//greeting.innerText = `Hello ${username} keep going`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

