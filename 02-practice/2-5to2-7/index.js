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

// 2-6, 2-7

const title = document.querySelector("#title");
/*
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
*/
const CLICKED_CLASS = "clicked";

function handleClick(){
    // // const currentClass = title.className;
    // // console.log(currentClass);
    // const hasClass  = title.classList.contains(CLICKED_CLASS);
    // if(!hasClass){ // currentClass !== CLICKED_CLASS)
    //     // title.className = CLICKED_CLASS;
    //     title.classList.add(CLICKED_CLASS);
    // }
    // else{
    //     // title.className = "";
    //     title.classList.remove(CLICKED_CLASS);
    // }
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
    // title.addEventListener("mouseenter", handleClick);
}

init();

