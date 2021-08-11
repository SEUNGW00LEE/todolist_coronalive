const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const finList = document.getElementById("todone-list");

const TODOS_LS = "toDos";
const FINS_LS = "finishedList";

let toDos, fins;


function getTaskObject(text) {
	return {
		id: String(Date.now()),
		text
	};
}

function findInToDos(taskId){
	return toDos.find(function(task){
		return task.id === taskId;
	})
}

function saveToDos(task){
	toDos.push(task);
}

function findInFin(taskId){
	return fins.find(function(task){
		return task.id === taskId;
	})
}

function removeFromToDo(taskId){
	toDos = toDos.filter(function(task){
		return task.id !== taskId;
	})
}

function removeFromFin(taskId){
	fins = fins.filter(function(task){
		return task.id !== taskId;
	})
}

function addToToDo(task){
	toDos.push(task)
}

function addToFin(task){
	fins.push(task)
}

function deleteBtn (event){
	const li = event.target.parentNode;
	li.parentNode.removeChild(li);
	removeFromFin(li.id);
	removeFromToDo(li.id);
	saveState();
}

function handleCompleteClick(event){
	const li = event.target.parentNode;
	li.parentNode.removeChild(li);
	const task = findInToDos(li.id);
	removeFromToDo(li.id);
	addToFin(task);
	paintFin(task);
	saveState();
}

function handleBackClick(event){
	const li = event.target.parentNode;
	li.parentNode.removeChild(li);
	const task = findInFin(li.id);
	removeFromFin(li.id);
	addToToDo(task);
	paintToDo(task);
	saveState();
}


function buildGenericLi(task){
	const li = document.createElement("li");
	const span = document.createElement("span");
	const delBtn = document.createElement("button");

	span.innerText = task.text;
	delBtn.innerText = "X";
	delBtn.addEventListener("click", deleteBtn);
	
	li.append(span, delBtn);
	li.id = task.id;
	return li;
}

function paintToDo(task){
	const genericLi = buildGenericLi(task);
	const completeBtn = document.createElement("button");
	completeBtn.innerText = "V";
	completeBtn.addEventListener("click", handleCompleteClick);
	genericLi.append(completeBtn);
	toDoList.append(genericLi);
}

function paintFin(task){
	const genericLi = buildGenericLi(task);
	const backBtn = document.createElement("button");
	backBtn.innerText = "↶";
	backBtn.addEventListener("click", handleBackClick);
	genericLi.append(backBtn);
	finList.append(genericLi)
}

function loadState(){
	toDos = JSON.parse(localStorage.getItem(TODOS_LS)) || [];
    fins = JSON.parse(localStorage.getItem(FINS_LS)) || [];
}


function restoreState(){
	toDos.forEach(function(task){
		paintToDo(task);
	})
	fins.forEach(function(task){
		paintFin(task);
	})
}

function saveState() {
	localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
	localStorage.setItem(FINS_LS, JSON.stringify(fins));
}

function handleFormSubmit(event) {
	
	event.preventDefault();
	const taskObj = getTaskObject(toDoInput.value)
	toDoInput.value = "";
	paintToDo(taskObj);
	saveToDos(taskObj);
	saveState();
}

function init() {
	toDoForm.addEventListener("submit", handleFormSubmit);
	loadState();
	restoreState();
}

init()