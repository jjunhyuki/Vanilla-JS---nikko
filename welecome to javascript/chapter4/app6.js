//Local strage : 브라우저의 미니 db 같은것 , 준비물 key, value
//https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

/* example
현재 도메인의 로컬 스토리지 개체에 액세스하고 스토리지를 
			사용하여 데이터 항목을 추가합니다.setItem().
	localStorage.setItem("myCat", "Tom");

	localStorage 항목을 읽는 구문은 다음과 같습니다:
		const cat = localStorage.getItem("myCat");

	localStorage 항목을 제거하는 구문은 다음과 같습니다:
		localStorage.removeItem("myCat");

	모든 localStorage 항목을 제거하는 구문은 다음과 같습니다:
		localStorage.clear();

	etc
		localStorage.removeItem, localStorage.getItem, localStorage.setItem 

	위 코드를 콘솔에 localStroage.setItem("username", "junhyuki");
	를 입력하면 어플리케이션에 strage 부분에 localstrage에 들어가보면 입력이되어있다

	그리고 localStroage.getItem("username"); 을 입력하면 이미 입력 되어있는 username의 값인 junhyuki를 불러온다.
	저장되어있는 값이 없으면 null을 반환한다.
*/
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