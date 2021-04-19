const todoForm = document.querySelector(".js-todoForm"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-todoList");

function paintTodo(text){
   const li = document.createElement("li");
   const delBtn = document.createElement("button");
   delBtn.innerText = "❌";
   const span = document.createElement("span");
   span.innerText = text;
   li.appendChild(delBtn);
   li.appendChild(span);
   todoList.appendChild(li);

}
function submitHandler(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    todoInput.value = "";
}

const TODOS_LS = 'toDos';

function loadTodos(){

    const todos = localStorage.getItem(TODOS_LS);

    if(todos !== null)
    {
        
       
    }
    



}


function init(){

    loadTodos();
    todoForm.addEventListener("submit",submitHandler);

 }

init();