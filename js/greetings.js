const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginSubmit = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting")


function onLoginSubmit(event) {
	event.preventDefault();
	const username = loginInput.value;
	loginForm.classList.add("hidden");
	localStorage.setItem("username", username);
	paintGreetings();
}

function paintGreetings(username) { 
	const usernameThat = localStorage.getItem("username");
	greeting.innerText= `${usernameThat}님 안녕하세요!`;
	greeting.classList.remove("hidden");
}

const savedUsername = localStorage.getItem("username");

if(savedUsername === null) {
	loginForm.classList.remove("hidden");
	loginSubmit.addEventListener("click",onLoginSubmit);
} else {
	paintGreetings(savedUsername);
}