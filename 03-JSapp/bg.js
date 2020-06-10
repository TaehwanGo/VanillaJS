const body = document.querySelector("body"),
clock = document.querySelector("h1");

const IMG_NUMBER = 4;

// function handleImgLoad() { // API를 쓴게 아니므로 loading관련 event가 아님
//     console.log("finished loading");
// }

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber}.jpg`; // 여기에서 img가 뭐지? HTML img 태그는 맞는데 그건 바로 그 위에 선언한 new Image();가 img태그임
    image.classList.add("bgImage");
    // body.appendChild(image);
    body.prepend(image);
    // image.addEventListener("loadend", handleImgLoad); // API를 쓴게 아니므로 loading관련 event가 아님
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER + 1);
    if(number % 2 == 1){
        // console.log(`check`);
        clock.style.color = "#ecf0f1";
        body.style.color = "#ecf0f1";
    }
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();