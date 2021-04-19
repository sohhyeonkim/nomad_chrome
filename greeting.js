const $form = document.querySelector(".js-form");
const $input = $form.querySelector("input");

// localStorage에 저장된 사용자 이름을 출력하는 함수
function loadName(){
    
    //localStorage에 currentUser(key)에 저장된 변수 저장
    const $currentUser = localStorage.getItem("currentUser");
    const $userName = document.querySelector(".userName");
    
    /*
      submit event handler
      이벤트(submit)가 발생했을때, 값이 전송되는 것을 방지하고
      localStorage에 currentUser(key)에 input의 value값을 저장함.
    */
    function getUser(event){
        event.preventDefault();
        localStorage.setItem("currentUser",$input.value);
        $userName.innerText = `Hello, ${$input.value}`;
        $form.classList.remove("showForm");
        $form.classList.add("js-form");
    }

    //현재 localStorage의 currentUSer에 할당된 값이 없다면
    if($currentUser===null)
    {
        //기존에 안보이도록 설정한 form을 보이도록하고, 
        //submit 이벤트가 발생했을때, getUSer함수 작동
        $form.classList.remove("js-form");
        $form.classList.add("showForm");
        $form.addEventListener("submit",getUser);
    }
    //현재 localStorage의 currentUser에 할당된 값이 있다면
    else
    {
        $userName.innerText = `Hello, ${$currentUser}`;
        
    }
    

}

function init(){

    loadName();

}
init();