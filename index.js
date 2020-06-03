// alert('Im working. Im JS. Im beautiful. Im worth it');
/*
let a = 221;
let b = a - 5;
a = 4;
console.log(b, a);
*/
/*
const what = "tony";
console.log(what);
*/
// const monday = "Mon";
// const tue = "Tue";
// const wed = "Wed";
// const thu = "Thu";
// const fri = "Fri";
// const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// console.log(daysOfWeek);

const tonyInfo = {
    name:"tony", 
    age:31
};
// console.log(tonyInfo);
// tonyInfo.age = 29;
// console.log(tonyInfo.age);

// console.log(console);
/*
function sayHello(name, age){
    // console.log("Hello!", name, "your age is", age);
    // console.log(`Hello! ${name} your age is ${age}`);
    return `Hello! ${name} your age is ${age}`;
}

const greetTony = sayHello(tonyInfo.name, tonyInfo.age);

console.log(greetTony);
*/
/*
const calculator = {
    plus: function(a,b){
        return a + b;
    },
    minus: function(a,b){
        return a - b;
    },
    multi: function(a,b){
        return a * b;
    },
    divide: function(a,b){
        return a / b;
    },
    power: function(a,b){
        return a**b;
    }
}

const plus = calculator.plus(5, 5);
console.log(plus);
console.log(calculator.multi(5,4));
const divide = calculator.divide(9,2);
console.log(divide);

const calculator1 = (sign, a, b) => {
    switch(sign){
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            return a/b;
        case '**':
            return a**b;
        default:
            return "wrong input";
    }
};

console.log(calculator1('**',2,4));
*/

// javascript에서 html의 element의 id에 접근 하는 방법 : document
// console.log(document); 
/*
const title = document.getElementById("title");

// console.log(title);

title.innerHTML = 'Hello from JS';

title.style.color = "yellow";

console.dir(title);

document.title = "I own you now";
*/
const title = document.querySelector("#title");


// function handleResize(){
//     // console.log(event); // 
//     console.log("I have been resized");
// }

// window.addEventListener("resize", handleResize()); // javascript가 이벤트를 기다리는 것
// window.addEventListener("resize", handleResize);

title.addEventListener("click", handleClick);

function handleClick(){
    title.style.color = 'yellow';
}

// 화장실 갔다와서 hover도 해볼것 

title.addEventListener("mouseover", handleHover);

function handleHover(){
    title.style.color = 'black';
}

title.addEventListener("mouseover", handleHover);

function handleHover(){
    title.style.color = 'black';
}
