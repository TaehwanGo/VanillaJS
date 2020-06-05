const clockContainer = document.querySelector(".js-clock"), 
 clockTitle = clockContainer.querySelector("h1");
// document.querySelector(".js-clock"); 은 엘리먼트의 자식을 탐색하지만 우리는 js-clock class의 자식을 탐색하고 싶은거야 
// const를 두개를 써서 각각 사용해도 되지만 깔끔하게 보이기 위해서 const 하나에 , 를 써서 묶음 
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000); // 1초마다 함수를 실행시킴 
}
init();