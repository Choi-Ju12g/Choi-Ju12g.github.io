const toDoForm = document.querySelector("#todo-form");
const toDolist = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "todos";

let todos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}

function deleteTodo(){
    const target = this.parentElement;
    target.remove();
    //const target = event.target.parentElement; 로 해도 위와 동일 -> event 파라미터 필요
    todos = todos.filter((toDo) => toDo.id !== parseInt(target.id));
    saveToDos();
}

function panitToDo(newToDo){
    const li = document.createElement("li");
    li.classList.add("poster");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.classList.add("poster-title");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.classList.add("poster-remove");
    button.innerText = "❌";

    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDolist.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        id : Date.now(),
        text : newTodo,
    };
    todos.push(newTodoObj);
    panitToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const getSavedToDos = localStorage.getItem(TODOS_KEY);

if(getSavedToDos !== null){
    const parsedToDos = JSON.parse(getSavedToDos);
    todos = parsedToDos;
    parsedToDos.forEach(panitToDo);
}