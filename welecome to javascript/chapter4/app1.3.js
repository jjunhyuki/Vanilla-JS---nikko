const loginForm = document.querySelector("#login-form input");
const loginInput = document.querySelector("#login-form input");


function onLoginSubmit(tomato) {
	tomato.preventDefault();	
//	const username = loginInput.value;
	console.log(tomato);
}

loginForm.addEventListener("submit", onLoginSubmit);

//5minute 57seconds