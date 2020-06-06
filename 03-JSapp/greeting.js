// querySelector로 HTML element를 선언된 변수에 대입하기(변수에 저장)
const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings");

// 대문자로 선언한 변수는 변하지 않는 string값이며,
const USER_LS = "currentUser", // localStorage에 저장되는 key값을 의미함
SHOWING_CN = "showing"; // CSS의 가상 클래스를 의미 

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // she is not
        askForName();
    } else {
        // she is
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();