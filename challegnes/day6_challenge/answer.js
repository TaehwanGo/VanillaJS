// import "./styles.css";
'use strict'
const select = document.querySelector(".js-select");

function handleChange() {
  const selected = select.value;
  localStorage.setItem("country", selected);
//   const temp = localStorage.setItem("country", selected);
//   console.log(temp); // value값 그런데 새로고침을 하지않으면 undefined로 확인이 되네 return값이 없어서 그런가 보다. 
}

function loadCountries() {
  const selected = localStorage.getItem("country");
  console.log(selected); // country키에 해당되는 값이 없으면 null이 되고 null, false, undefined를 제외한 모든 값은 if문을 실행시킴
  if (selected) {
    const option = document.querySelector(`option[value=${selected}]`); // "${selected}"에 ""를 붙이나 안붙이나 똑같음 , 근데 붙이는게 좋겠지?
    // console.log(option);
    option.selected = true; // 이게 option에 selected 붙여서 처음 시작 조건을 만들어주는 거구나 default값은 모두 false라는 것이겠네 
  }
}

loadCountries();
select.addEventListener("change", handleChange);
