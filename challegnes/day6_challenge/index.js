const select = document.querySelector(".js-select"); // select 태그 
// console.log(select);
const SELECTED_DATA = "selected_data";
// console.log(SELECTED_DATA);

select.onchange = function saveDate(){
    // const select = document.querySelector(".js-select");
    // console.log(select.selectedIndex); // select태그에서 선택한 option의 index, ex)korea -> 1 (0, 1, 2, ..)
    const selected_country = select.options[select.selectedIndex].value;
    // console.log(select.options[select.selectedIndex]); // select태그에서 선택한 option태그 전체, .value를 더하면 그 value값
    // console.log(selected_country);
    localStorage.setItem(SELECTED_DATA, selected_country); // key 값이 왜 "selected_data"가 아니지? 대소문자 똑같으면 안되네 
}

function init() {
    const currentData = localStorage.getItem(SELECTED_DATA);
    // console.log(currentData);
    if(currentData !== null){
        // set currentData to select
        // const select_init = document.querySelector(".js-select");
        // select_init.value = currentData;
        select.value = currentData;
    }
}
init();

// var select = document.querySelector(".js-select");
// var selectOption = select.options[select.selectedIndex];
// var lastSelected = localStorage.getItem('select');

// if(lastSelected) {
//     select.value = lastSelected; 
// }

// select.onchange = function () {
//    lastSelected = select.options[select.selectedIndex].value;
//    console.log(lastSelected);
//    localStorage.setItem('select', lastSelected);
// }

// https://stackoverflow.com/questions/23905358/how-to-use-localstorage-on-last-html-select-value
// onchange // https://frhyme.github.io/web/html_select_javascript/
// get option value // https://hsunnystory.tistory.com/125