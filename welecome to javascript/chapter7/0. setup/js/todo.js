const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDolist = document.getElementById("todo-list");

function handleTodoSubmit(event){
	event.preventDefault();
	//console.log(toDoInput.value);
	const newTodo = toDoInput.value; //<----- 인풋값을 뉴투두 라는  변수에  저장해둠
	console.log(toDoInput.value);
	toDoInput.value = "";
	console.log(newTodo, toDoInput.value);
}

toDoForm.addEventListener("submit", handleTodoSubmit);