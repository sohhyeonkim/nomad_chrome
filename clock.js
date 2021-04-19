const clockContainer = document.querySelector(".js-clock")
const clockTitle = clockContainer.querySelector("h1");

function getTime(){

    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    //시간을 00:00:00 형식으로 출력하기 위해 삼항연산자 조건 활용
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){

    //getTime함수 실행
    getTime();

    //1초 간격으로 반복시키기
    setInterval(getTime,1000);

}
init();