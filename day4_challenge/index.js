// 참고문헌 : https://stackoverflow.com/questions/641857/javascript-window-resize-event

// const width = window.innerWidth;
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

function colorChange() {
    const width = window.innerWidth; // it should be inside the function. I don't know why
    if (width >= 1000) {
        document.querySelector("body").style.backgroundColor = colors[0];
        console.log(`more than 1000`);
    } else if (width >= 700) {
        document.querySelector("body").style.backgroundColor = colors[1];
        console.log(`more than 700`);
    } else {
        document.querySelector("body").style.backgroundColor = colors[2];
        console.log("else");
    }
}
window.addEventListener("resize", colorChange);
colorChange();