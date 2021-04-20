const body = document.querySelector("body");
const IMG_NUM = 11;

function paintImg(num){
    const image = new Image(); // const image = document.createElement("img");와 같은 것.
    image.src = `images/${num+1}.jpg`;
    image.classList.add("bg");
    body.appendChild(image);
    
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUM);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImg(randomNumber);
}
init();