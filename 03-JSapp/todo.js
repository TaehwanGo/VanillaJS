const toDoForm = document.querySelector(".js-toDoForm"), // const form = document.querySelector(".js-toDoForm")를 사용하고 싶지만 모듈을 분리하는 법을 아직 안배웠으므로 form 대신 toDoForm으로 사용하자
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList"); // ul 태그 

const TODOS_LS = 'toDos';

let toDos = []; // empty array

function filterFn(toDo){
    // create an array with the items that function returns true
    return toDo.id === 1;
}

function deleteToDo(event){
    // console.log(event.target);
    // console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    // cleanToDos와 filter가 하는 것은 filterFn이 체크가 된 아이템들의 array를 주는 것
    const cleanToDos = toDos.filter(function(toDo){
        // console.log(toDo.id, li.id); // toDo.id는 숫자, li.id는 string
        return toDo.id !== parseInt(li.id); 
    }); 
    toDos = cleanToDos;
    saveToDos();
    
    // console.log(cleanToDos);
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text, newId) { // 3.6 : 해야할일을 생성할때마다 toDos라는 array에 추가되도록 할 것임 
    // 새로운 방식으로 접근하는 방법, 우리가 뭔가를 생성하기를 원한다면?
    const li = document.createElement("li"); // li태그를 생성 
    const delBtn = document.createElement("button"); // li태그 안에 들어갈 삭제버튼을 만듦(아직 li태그안에 넣진 않았음)
    delBtn.innerText = "❌"; // delBtn.value로 하면 console.log에선 찍히는데 브라우저 화면엔 안나옴 // 추가로 head에서 meta.charset을 설정안하면 innerHTML은 안됨 
    // console.log(delBtn.innerText);
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span"); // li태그 안에 들어갈 텍스트 : span태그를 만들고
    // const newId = toDos.length + 1;
    // console.log(newId);
    if(newId == undefined){
        newId = Date.now();
        console.log(newId);
    }
    span.innerText = text; // 그 span태그 안에 innerText로 글자를 적음 ( parameter로 전달 받은 text 변수에 있는 값 )
    li.appendChild(span); // li태그 안에 span태그를 넣음
    li.appendChild(delBtn); // li태그 안에 삭제 버튼을 넣음
    li.id = newId; // 이걸 추가 안했어서 그동안 li태그 안에 id값이 없었네 
    toDoList.appendChild(li); // 마지막으로 완성된 li를 ul태그에 넣음

    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj); // toDos array에 toDosObj object를 추가함(자바의 arrayList에서 add()같은 느낌);
    saveToDos();
}

function handleSubmit(event){ // 만약 여기 파라미터로 event없다면? 이건 없어도 됨
    event.preventDefault(); // 이게 그냥 preventDefault라면? 이건 event.이 없으면 안됨 
    const currentValue = toDoInput.value;
    paintToDo(currentValue); // 와 근데 자바스크립트 존나 사기네 오버라이딩없이 파라미터 하나만 보내도 에러안뜨고 잘되네 paintToDo(currentValue, undefined); 로 바꾸면 완벽할듯
    toDoInput.value = ""; // 이게 없으면 editText(input type="text")에서 엔터를 쳐도 값이 남아 있음 // 근데 없어도 지워지긴하는데 그래도 이렇게 적는게 정석인듯 
}

function loadTodos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        // console.log(loadedToDos); // JSON
        const parsedToDos = JSON.parse(loadedToDos);
        // console.log(parsedToDos); // parsed Object

        // 모든 parsedToDos 배열의 항목마다 paintToDo() 를 실행시킬 것임
        parsedToDos.forEach(toDo => {
            // console.log(toDo.text);
            paintToDo(toDo.text, toDo.id);
        });
    }
}

function init() { // 거의 생성자 느낌이네 
    loadTodos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();