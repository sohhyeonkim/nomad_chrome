// const body = document.querySelector("body");
// const IMG_NUMBER = 3;

// function paintBg(ranNum){
//     const $img = document.createElement("img");
//     $img.classList.add("bg");
//     $img.src = `images/${ranNum}.jpg`; 
//     body.prepend($img);
    
// }

// function genRandom(){
//     const number = Math.floor(Math.random()*IMG_NUMBER)+1; // 1,2,3 
//     return number;
// }

// function init(){
//     const randomNumber = genRandom();
//     paintBg(randomNumber);
// }
// init();

const body = document.querySelector("body");
const IMG_NUM = 3;

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