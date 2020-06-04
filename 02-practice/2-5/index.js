/*
// 2-5
const age = prompt("How old are you");

console.log(age);

if(age >= 18 && age <= 21){
    console.log(`you can drink but you should not`);
} else if(age > 21) {
    console.log(`go ahead`);
} else {
    console.log(`you can't`);
}
*/

// 2-6

const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    // console.log(title.style.color);
    const currentColor = title.style.color;
    console.log(currentColor);
    if(currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    }
    else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
    // title.addEventListener("mouseenter", handleClick);
}

init();

