const rangeInput = document.querySelector(".js-input__range"),
form = document.querySelector(".js-form"),
inputText = form.querySelector(".js-input"),
resultDisplay = document.querySelector(".js-result"),
myNumber = resultDisplay.querySelector(".js-result__number__mine"),
randomNumber = resultDisplay.querySelector(".js-result__number__random"),
gameResult = resultDisplay.querySelector(".js-result__game");
let rangeNumber = document.querySelector(".js-range__number");

const SHOW = "show";

function getInputRange() {
    rangeNumber.innerText = rangeInput.value;
    // console.log(rangeNumber.innerText);
}

function getRandomNumber() {
    // random number return
    const randomNum = Number(rangeNumber.innerText)+1; // max값을 일치시키기 위해 +1 해줌 
    return Math.floor(Math.random()*(randomNum));
    // Math.random()*num == 실수출력 , 정수 출력 : Math.floor(Math.random()*rangeNumber.innerText);
}

function showResult(currentValue, randNum) {
    console.log(currentValue, randNum);
    if(Number(currentValue) === randNum) {
        gameResult.innerText = "You won!";
    } else {
        gameResult.innerText = "You lost!";
    }
}

function checkResult(event) {
    event.preventDefault(); // 이거 안하면 새로고침 되서 싹다 초기화됨 
    resultDisplay.classList.add(SHOW); // 클릭 되면 보여지게 설정 
    const currentValue = inputText.value;
    console.log(currentValue);
    // inputText.value = "";
    myNumber.innerText = currentValue;
    
    const randNum = randomNumber.innerText = getRandomNumber();
    showResult(currentValue, randNum);
}

function init() {
    form.addEventListener("submit", checkResult);
    rangeInput.addEventListener("input", getInputRange)
}

init();