const clockContainer = document.querySelector(".js-clock"), 
 clockTitle = clockContainer.querySelector(".js-title");
// document.querySelector(".js-clock"); 은 엘리먼트의 자식을 탐색하지만 우리는 js-clock class의 자식을 탐색하고 싶은거야 
// const를 두개를 써서 각각 사용해도 되지만 깔끔하게 보이기 위해서 const 하나에 , 를 써서 묶음 
 
// test
// function getTime(){
//     const date = new Date();
//     const minutes = date.getMinutes();
//     const hours = date.getHours();
//     const seconds = date.getSeconds();
//     clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
// }

function getTime(){
    // current time
    const currentDate = new Date().getTime();  // .getTime();
    console.log(currentDate);
    // const currentMinutes = currentDate.getMinutes();
    // const currentHours = currentDate.getHours();
    // const currentSeconds = currentDate.getSeconds();

    // Christmas time
    const theDate = new Date("Dec 25,2020,00:00:00"); // .getTime()
    // const yearOfTheDay = currentDate.getFullYear(); // getYear(); -> 120 it doesn't work // getFullYear(); -> 2020
    // console.log(yearOfTheDay); // 120 // I don't know why it is 120 instead of 2020
    // const monthOfTheDay = 12;
    // const dayOfTheDay = 24;
    // const theDate = new Date(yearOfTheDay,monthOfTheDay,dayOfTheDay,0,0,0); // .getTime();
    console.log(theDate);
    // const theMinutes = currentDate.getMinutes();
    // const theHours = currentDate.getHours();
    // const theSeconds = currentDate.getSeconds();
    // console.log(theDate); // 1608822000000

    let dDay = (theDate - currentDate); // this result is not a day form, it shows a number
    // I need to parse it using function or by myself
    // console.log(dDay); // 17447852208
    // dDay = Date.parse(dDay); // NaN
    // console.log(dDay);
    // const date = dDay.getDate();
    // const minutes = dDay.getMinutes();
    // const hours = dDay.getHours();
    // const seconds = dDay.getSeconds();

    // Get the number of seconds since Unix Epoch
    const date = Math.floor(dDay / (1000 * 60 * 60 * 24)); 
    const minutes = Math.floor((dDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    const hours = Math.floor((dDay % (1000 * 60 * 60)) / (1000 * 60)); 
    const seconds = Math.floor((dDay % (1000 * 60)) / 1000);

    clockTitle.innerText = `${date < 10 ? `0${date}` : date}d ${hours < 10 ? `0${hours}` : hours}h ${minutes < 10 ? `0${minutes}` : minutes}m ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

function init(){
    getTime();
    setInterval(getTime, 1000); // 1초마다 함수를 실행시킴 
}
init();

// 참고문헌 : https://mcatcher.github.io/2018/01/24/dday.html

