const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreetings() {
	const username = localStorage.getItem(USERNAME_KEY);
	// greeting.innerText = "Hello " + username;
	greeting.innerText = `Hello ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
	event.preventDefault();
	localStorage.setItem(USERNAME_KEY, loginInput.value);
	loginForm.classList.add(HIDDEN_CLASSNAME);
	paintGreetings(username);
}

if(savedUsername === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
}
else {
	paintGreetings();
}


