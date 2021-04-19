const $todoForm = document.querySelector(".js-todoForm");
const $todoFormInput = $todoForm.querySelector("input");
const $todoList = document.querySelector(".js-todoList");

// localStorage에 저장된 키 이름
const storedTodo = "todo"; 

let TodoArr = [];


function deleteToDo(event){
    const clickedBtn = event.target;
    const clickedBtnLi = clickedBtn.parentNode;
    $todoList.removeChild(clickedBtnLi);

    const cleanToDoArr = TodoArr.filter(function(toDo){
        return toDo.id !== parseInt(clickedBtnLi.id);
    TodoArr = cleanToDoArr;
    saveTodos();
    });
}

function saveTodos(){
    // localStorage는 데이터를 string으로 저장하기 때문에 js의 배열 형태인 TodoArr를 js의 문자열 형태로 바꿔야한다.
    localStorage.setItem(storedTodo,JSON.stringify(TodoArr));

}

let idNumbers = 0;

function printInput(text){
    const $li = document.createElement("li");
    const $btn = document.createElement("button");
    const $span = document.createElement("span");
    idNumbers++;

    $btn.innerText = "❌";
    $span.innerText = text;

    $li.id = idNumbers;
    $li.appendChild($btn);
    $li.appendChild($span);
    $todoList.appendChild($li);
    $btn.addEventListener("click",deleteToDo);


    const TodoObj = {
        text: text,
        id: idNumbers
    }
    TodoArr.push(TodoObj);
    saveTodos();
}

function handleSubmit(event){
    event.preventDefault();
    const inputValue = $todoFormInput.value;
    printInput(inputValue);
    $todoFormInput.value = "";
}


function loadTodo(){

    //localStorage에 저장된 키 값
    const $todo = localStorage.getItem(storedTodo);
    
    if($todo !== null)
    {
        const parsedTodos = JSON.parse($todo);
        parsedTodos.forEach(function(toDo){
            printInput(toDo.text);
        })
    }




}



function init(){

    loadTodo();
    $todoForm.addEventListener("submit",handleSubmit);

}
init();