const $todoForm = document.querySelector(".js-todoForm"),
    $todoFormInput = $todoForm.querySelector("input"),
    $todoList = document.querySelector(".js-todoList"),
    storedTodo = "todo";

let TodoArr = [];

function showUnderline(event){
    const clickedCheckBox = event.target;
    const finishedSpan = clickedCheckBox.nextSibling;
    finishedSpan.classList.add("done");
}

function deleteToDo(event){
    const clickedBtn = event.target;
    const clickedBtnLi = clickedBtn.parentNode;
    $todoList.removeChild(clickedBtnLi);

    const CleanTodoArr = TodoArr.filter(function(someArr){
        return someArr.id !== parseInt(clickedBtnLi.id);
    })
    TodoArr = CleanTodoArr;

    saveTodos();
}

function saveTodos(){
    localStorage.setItem(storedTodo,JSON.stringify(TodoArr));

}

let idNumbers = 0;
function printInput(text){
    const $li = document.createElement("li");
    const $btn = document.createElement("button");
    const $span = document.createElement("span");
    const $check = document.createElement("input");
    $check.type = "checkbox";
    idNumbers++;
    //const newId = TodoArr.length+1;

    $btn.innerText = "❌";
    $span.innerText = text;
    $li.id = idNumbers;

    $li.appendChild($span);
    $li.appendChild($btn);
    $li.prepend($check);
    $todoList.appendChild($li);
    $btn.addEventListener("click",deleteToDo);
    $check.addEventListener("click",showUnderline);

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
    const $todo = localStorage.getItem(storedTodo);
    
    if($todo !== null)
    {
        const parsedTodos = JSON.parse($todo);
        parsedTodos.forEach(function(someObj){
            printInput(someObj.text);
        });
    }

}

function init(){
    loadTodo();
    $todoForm.addEventListener("submit",handleSubmit);
   
}
init();