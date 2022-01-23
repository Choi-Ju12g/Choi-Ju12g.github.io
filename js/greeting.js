const loginPage = document.querySelector("#login-page");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const loginButton = document.querySelector(".login-btn");
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginPage.style.display = "none";
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY,userName);
    paintGreetings(userName);

}

function paintGreetings(username){
    if(username ===''){
        greeting.innerText = `Hello ???`;
    }else{
        greeting.innerText = `Hello ${username}`;
    }
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    loginPage.addEventListener("submit",onLoginSubmit);
}else{
    loginPage.style.display = "none";
    paintGreetings(savedUsername);
}

loginButton.addEventListener("click",onLoginSubmit);