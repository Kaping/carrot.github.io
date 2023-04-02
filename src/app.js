//form selectors
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const loginInput = loginForm.querySelector("input");


//const value
const HIDDEN_CLASSNAME = "hidden";
const FLEX_CLASSNAME = "flex";
const USERNAME_KEY = "username";


//handler functions start
function handleLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY, username);

    drawGreeting(username);
    loginForm.classList.remove(FLEX_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
}


//draw functions start
function drawGreeting(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Welcome! ${username}`;
     
}

loginForm.addEventListener("submit", handleLoginSubmit);


//localStorage get items
const savedUserName = localStorage.getItem(USERNAME_KEY);

//When start this browser
if(savedUserName === null){
    greeting.classList.add(HIDDEN_CLASSNAME);
    // loginForm.classList.add(FLEX_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    
    // console.log("first"); 
}else{
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.remove(FLEX_CLASSNAME);
    
    drawGreeting(savedUserName);
    // console.log("greeting");  
}
