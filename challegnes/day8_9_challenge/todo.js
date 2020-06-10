const toDoForm = document.querySelector(".js-toDoForm"), // const form = document.querySelector(".js-toDoForm")를 사용하고 싶지만 모듈을 분리하는 법을 아직 안배웠으므로 form 대신 toDoForm으로 사용하자
toDoInput = toDoForm.querySelector("input"),
pendingList = document.querySelector(".js-pendingList"), // ul 태그 
finishedList = document.querySelector(".js-finishedList");

const TODOS_LS = 'PENDING';
const FIN_LS = 'FINISHED';

let toDos = []; // empty array
let finList = [];

// function filterFn(toDo){
//     // create an array with the items that function returns true
//     return toDo.id === 1;
// }

function deleteToDo(event){ // 삭제가 Pending에선 되는데 Finished에선 안되는 중 
    // console.log(event.target);
    // console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    // console.log(li, btn, li.parentNode == finishedList);
    if(li.parentNode == pendingList){
        pendingList.removeChild(li);
        // cleanToDos와 filter가 하는 것은 filterFn이 체크가 된 아이템들의 array를 주는 것
        const cleanToDos = toDos.filter(function(toDo){
            // console.log(toDo.id, li.id); // toDo.id는 숫자, li.id는 string
            return toDo.id !== parseInt(li.id); 
        }); 
        toDos = cleanToDos;
        saveToDos();
    }
    else {
        finishedList.removeChild(li);
        const cleanFinList = finList.filter(function(toDo){
            // console.log(toDo.id, li.id); // toDo.id는 숫자, li.id는 string
            return toDo.id !== parseInt(li.id); 
        }); 
        finList = cleanFinList;
        saveFinList();
    }
    
    // console.log(cleanToDos);
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function saveFinList(){
    // console.log(finList);
    localStorage.setItem(FIN_LS, JSON.stringify(finList));
}

function checkId(anId) {
    if(anId == undefined){
        anId = String(Date.now()); 
        // console.log(anId);
    }
    return anId;
}

function moveToDo(event) {
    // console.log(event.target);
    const btn = event.target;
    // const li_beforeChanged = btn.parentNode; // 복사가 안되네? 결국 찾아야 되나
    const li = btn.parentNode;
    // console.log(li);
    if(btn.innerText === "✅") {
        finishedList.appendChild(li); // HTML에서 옮겨가는 것 까지 성공 
        btn.innerText = "⏮"; // 버튼 모양 변경 완료 
        
        // doneBtn.addEventListener("click", deleteToDo);
    }
    else{
        pendingList.appendChild(li); // HTML에서 왔다갔다 시키는 것 까지 성공
        btn.innerText = "✅";
        // console.log(finList);
    }

    // FIN_LS의 Array인 finList에 저장, toDos에선 삭제
    // finList에 추가 및 저장
    addToList(btn);

    // toDos에서 삭제
    delFromList(btn);
}

function delFromList(btn) { // Array이지만 ArrayList처럼 쓰기 위해 필터를 사용하고 다시 덮어씌워서 저장하는 방식 
    // console.log(pendingList); 
    // console.log(li.parentNode); // 복사가 안되서 어쩔수 없이 for문 돌려서 찾자 
    // console.log(pendingList.childElementCount);
    // console.dir(pendingList);
    // console.log(pendingList.childNodes);
    // console.log(pendingList.children[0]);
    // console.log(pendingList.children[0].id);
    // console.log(li.id);

    const li = btn.parentNode;
    let temp_array;
    if(btn.innerText === "⏮"){ // moveToDo 에서 ✅가 ⏮로 바뀌었으므로 
        temp_array = toDos;
    }
    else {
        // console.log(finList);
        temp_array = finList;
    }
    // console.log(temp_array);

    let indexForDel;
    for(let i=0; i<temp_array.length; i++){
        if(temp_array[i].id == li.id){ // if문 실행이 안되는 중 
            // console.log("if문 실행");
            // pendingList.removeChild(pendingList.children[i]);
            indexForDel = i;
            break;
        }
    }
    // console.log(indexForDel);
    // console.log(temp_array[indexForDel]);
    
    // cleanToDos와 filter가 하는 것은 filterFn이 체크가 된 아이템들의 array를 주는 것
    const cleanToDos = temp_array.filter(function(toDo){
        // console.log(toDo.id, li.id); // toDo.id는 숫자, li.id는 string
        return toDo.id !== parseInt(temp_array[indexForDel].id); 
    }); 
    // console.log(cleanToDos); // 삭제된 array가 나와야 되는데 
    if(btn.innerText === "⏮"){
        toDos = cleanToDos; // 삭제하려는 것을 제외한 배열을 선택하고 덮어 쓰기  
        saveToDos(); // 저장   
    }
    else {
        finList = cleanToDos; // 삭제하려는 것을 제외한 배열을 선택하고 덮어 쓰기
        saveFinList();
    }
}

function addToList(btn){
    const li = btn.parentNode;
    let temp_array;
    if(btn.innerText === "⏮"){ // moveToDo 에서 ✅가 ⏮로 바뀌었으므로 
        temp_array = toDos;
    }
    else {
        temp_array = finList;
    }
    const selectedItem = temp_array.filter(function(toDo){
        // console.log(toDo.id, li.id); // toDo.id는 숫자, li.id는 string
        return toDo.id === parseInt(li.id); 
    }); 
    // console.log(selectedItem); // selectedItem은 원소가 1개인 배열이므로 이것을 객체로 변환해서 추가해야함 // 바로 그냥 [0]번째 선택해버리기~

    if(btn.innerText === "⏮"){ // moveToDo 에서 ✅가 ⏮로 바뀌었으므로 
        finList.push(selectedItem[0]); // toDos array에 toDosObj object를 추가함(자바의 arrayList에서 add()같은 느낌);
        saveFinList();
    }
    else {
        toDos.push(selectedItem[0]); // toDos array에 toDosObj object를 추가함(자바의 arrayList에서 add()같은 느낌);
        saveToDos();
    }
}

function paintToDo(text, newId) { // 3.6 : 해야할일을 생성할때마다 toDos라는 array에 추가되도록 할 것임 
    // 새로운 방식으로 접근하는 방법, 우리가 뭔가를 생성하기를 원한다면?
    const li = document.createElement("li"); // li태그를 생성 
    const delBtn = document.createElement("button"); // li태그 안에 들어갈 삭제버튼을 만듦(아직 li태그안에 넣진 않았음)
    delBtn.innerText = "❌"; // delBtn.value로 하면 console.log에선 찍히는데 브라우저 화면엔 안나옴 // 추가로 head에서 meta.charset을 설정안하면 innerHTML은 안됨 
    // console.log(delBtn.innerText);
    delBtn.addEventListener("click", deleteToDo);
    const doneBtn = document.createElement("button");
    doneBtn.innerText = "✅";
    doneBtn.addEventListener("click", moveToDo);
    const span = document.createElement("span"); // li태그 안에 들어갈 텍스트 : span태그를 만들고
    // const newId = toDos.length + 1;
    // console.log(newId);
    // if(newId == undefined){
    //     newId = Date.now();
    //     console.log(newId);
    // }
    const checkedId = checkId(newId);
    span.innerText = text; // 그 span태그 안에 innerText로 글자를 적음 ( parameter로 전달 받은 text 변수에 있는 값 )
    li.appendChild(span); // li태그 안에 span태그를 넣음
    li.appendChild(delBtn); // li태그 안에 삭제 버튼을 넣음
    li.appendChild(doneBtn); // li태그 안에 done 버튼을 넣음
    li.id = checkedId; // 이걸 추가 안했어서 그동안 li태그 안에 id값이 없었네 
    pendingList.appendChild(li); // 마지막으로 완성된 li를 ul태그에 넣음

    const toDoObj = {
        text: text,
        id: checkedId
    };
    toDos.push(toDoObj); // toDos array에 toDosObj object를 추가함(자바의 arrayList에서 add()같은 느낌);
    saveToDos();
}

function paintFinList(text, newId) {
    const li = document.createElement("li"); // li태그를 생성 
    const delBtn = document.createElement("button"); // li태그 안에 들어갈 삭제버튼을 만듦(아직 li태그안에 넣진 않았음)
    delBtn.innerText = "❌";
    // console.log(delBtn.innerText);
    delBtn.addEventListener("click", deleteToDo);
    const doneBtn = document.createElement("button");
    doneBtn.innerText = "⏮";
    doneBtn.addEventListener("click", moveToDo);
    const span = document.createElement("span"); // li태그 안에 들어갈 텍스트 : span태그를 만들고
    // const newId = toDos.length + 1;
    // console.log(newId);
    // if(newId == undefined){
    //     newId = Date.now();
    //     console.log(newId);
    // }
    const checkedId = checkId(newId);
    span.innerText = text; // 그 span태그 안에 innerText로 글자를 적음 ( parameter로 전달 받은 text 변수에 있는 값 )
    li.appendChild(span); // li태그 안에 span태그를 넣음
    li.appendChild(delBtn); // li태그 안에 삭제 버튼을 넣음
    li.appendChild(doneBtn); // li태그 안에 done 버튼을 넣음
    li.id = checkedId; // 이걸 추가 안했어서 그동안 li태그 안에 id값이 없었네 
    finishedList.appendChild(li); // 마지막으로 완성된 li를 ul태그에 넣음

    const finObj = {
        text: text,
        id: checkedId
    };
    finList.push(finObj); // toDos array에 toDosObj object를 추가함(자바의 arrayList에서 add()같은 느낌);
    saveFinList();
}

function handleSubmit(event){ // 만약 여기 파라미터로 event없다면? 이건 없어도 됨
    event.preventDefault(); // 이게 그냥 preventDefault라면? 이건 event.이 없으면 안됨 
    const currentValue = toDoInput.value;
    paintToDo(currentValue); // 와 근데 자바스크립트 존나 사기네 오버라이딩없이 파라미터 하나만 보내도 에러안뜨고 잘되네 paintToDo(currentValue, undefined); 로 바꾸면 완벽할듯
    toDoInput.value = ""; // 이게 없으면 editText(input type="text")에서 엔터를 쳐도 값이 남아 있음 // 근데 없어도 지워지긴하는데 그래도 이렇게 적는게 정석인듯 
}

function loadToDos() {
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

function loadFinList(){
    const finishedToDos = localStorage.getItem(FIN_LS);
    if(finishedToDos !== null) {
        const parsedFinList = JSON.parse(finishedToDos);
        parsedFinList.forEach(function(finItems){
            paintFinList(finItems.text, finItems.id);
        });
    } 
}

function init() { // 거의 생성자 느낌이네 
    loadToDos();
    loadFinList();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();