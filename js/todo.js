const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const toDoneList = document.getElementById("todone-list");



let toDos= [];
let toDones= [];

function saveToDos() {
	localStorage.setItem("toDos",JSON.stringify(toDos));
	localStorage.setItem("toDones", JSON.stringify(toDones));
}

function deleteToDo(event) {
	const li = event.target.parentElement;
	toDos = toDos.filter ((toDo) => toDo.id !== parseInt(li.id)); 
	toDones= toDones.filter((toDone)=>toDone.id!== parseInt(li.id));
	li.remove();  
	saveToDos();
}

function doneToDo(event) {
	const li = event.target.parentElement;
	console.dir(li);
	const button_first = li.children[1];
	toDos = toDos.filter ((toDo) => toDo.id !== parseInt(li.id));
	const span = li.firstChild.innerText;
	const button_second = event.target;
	button_second.innerText = "↶";
	toDoneList.appendChild(li);
	const newToDoObject = {
			text: span,
			id: li.id,
	};
	toDones.push(newToDoObject);
	saveToDos();
	button_first.addEventListener("click", deleteToDo)
	button_second.addEventListener("click", rollbackList);
}

function rollbackList(event){
	const li = event.target.parentElement;
	const button_first = li.children[1];
	const button_second = event.target;
	const span = li.firstChild.innerText;
	button_second.innerText = "V";
	toDoList.appendChild(li);
	const newToDoObject = {
			text: span,
			id: li.id,
	};
	toDos.push(newToDoObject);
	button_first.addEventListener("click", deleteToDo);
	button_second.addEventListener("click", doneToDo);
	saveToDos();
}

function paintToDo(newToDo) {
	const li = document.createElement("li") ;
	li.id = newToDo.id;
	const span = document.createElement("span");
	span.innerText = newToDo.text;
	const button_1 = document.createElement("button");
	const button_2 = document.createElement("button");
	button_1.innerText = "X";
	button_1.classList = "button_1"
	button_2.innerText = "V";
	button_2.classList = "button_2"
	button_1.addEventListener("click", deleteToDo);
	button_2.addEventListener("click", doneToDo);
	li.appendChild(span);
	li.appendChild(button_1);
	li.appendChild(button_2);
	toDoList.appendChild(li);	
}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newToDo = toDoInput.value;
	toDoInput.value = "";
	const newToDoObject = {
		text: newToDo,
		id: Date.now(),
	};
	toDos.push(newToDoObject);
	paintToDo(newToDoObject);
	saveToDos();
}

const savedToDos = localStorage.getItem("toDos");
const savedToDones = localStorage.getItem("toDones");

if(savedToDos !== null) { 
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;
	parsedToDos.forEach( item => paintToDo(item));
}

if(savedToDones !== null) { 
	const parsedToDones = JSON.parse(savedToDones);
	toDones = parsedToDones;
	parsedToDones.forEach( item => paintToDo(item));
}


toDoForm.addEventListener("submit", handleToDoSubmit);




















