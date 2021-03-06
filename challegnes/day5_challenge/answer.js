// import "./styles.css";

const clockTitle = document.querySelector(".js-clock");

function getTime() {
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  // console.log(xmasDay);
  const now = new Date();
  // console.log(now);
  // This is in milisecondsx
  const difference = new Date(xmasDay - now);
//   console.log(difference);
  const secondsInMs = Math.floor(difference / 1000);
  // console.log(secondsInMs);
  const minutesInMs = Math.floor(secondsInMs / 60);
  // console.log(minutesInMs);
  const hoursInMs = Math.floor(minutesInMs / 60);
  const days = Math.floor(hoursInMs / 24);
  const seconds = secondsInMs % 60;
  // console.log(seconds);
  const minutes = minutesInMs % 60;
  // console.log(minutes);
  const hours = hoursInMs % 24;
  const daysStr = `${days < 10 ? `0${days}` : days}d`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
  const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
  const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
  clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
