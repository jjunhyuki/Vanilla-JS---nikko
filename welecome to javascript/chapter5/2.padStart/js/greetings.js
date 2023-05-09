const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
	event.preventDefault();	
	loginForm.classList.add("hidden");
	const username = loginInput.value;
	//이렇게 해주면 브라우저에 localStrage에 입력값이 저장이됨
	localStorage.setItem(USERNAME_KEY, username);
	paintGreeptings(username);

}

function paintGreeptings(username){
	greeting.innerText = `Hello ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
	// show the form
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	// show the greeting
	paintGreeptings(savedUsername);
}