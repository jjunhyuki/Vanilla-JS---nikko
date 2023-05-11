const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDolist = document.getElementById("todo-list");

function paintToDo(newTodo){
	//console.log("i will paint ", newTodo);
	const li = document.createElement("li");
	//const potato = document.createElement("li");
	// ㄴ> 변수 이름이 꼭 html 태그의 이름으로 만들필요는 없다 but element() 안에는 li 여야만 한다.
	//2:34 까지함
}


function handleTodoSubmit(event){
	event.preventDefault();
	//console.log(toDoInput.value);
	const newTodo = toDoInput.value; //<----- 인풋값을 뉴투두 라는  변수에  저장해둠
	//console.log(toDoInput.value);
	toDoInput.value = "";
	//console.log(newTodo, toDoInput.value);
	paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleTodoSubmit);