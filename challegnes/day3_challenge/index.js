const title = document.querySelector("#title");
const body = document.querySelector("body");
const colors = ["pink" ,"#32b9b5", "#f79d2d", "#c2390d", "#f9c234"];

const superEventHandler = {
    rightClick: function(){
        title.style.color = colors[0];
        title.innerHTML = "That was a right click"
    },
    mouseover: function() {
        title.style.color = colors[1];
        title.innerHTML = "The mouse is here!"
    },
    mouseout: function() {
        title.style.color = colors[2];
        title.innerHTML = "The mouse is gone!"
    },
    resize: function(){
        title.style.color = colors[3];
        title.innerHTML = "You just resized!"
    }
};

title.addEventListener("mouseout",superEventHandler.mouseout);
title.addEventListener("mouseover", superEventHandler.mouseover);
// function handleHover(){
//     title.style.color = 'black';
// }
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("auxclick", superEventHandler.rightClick);
// title.addEventListener("click", superEventHandler.click);
// function handleClick(){
//     title.style.color = '#32b9b5';
// }