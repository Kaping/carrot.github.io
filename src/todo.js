//query selectors
const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

let toDos = [];

const TODOS_KEY = 'todos';
const CHECKED_TEXT = 'checked';


//handle functions
function handleToDoSubmit(event) {
    event.preventDefault();
    
    const newTodo = toDoInput.value;

    toDoInput.value = "";

    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
        checked: false,
    };
    
    toDos.push(newTodoObj);
    drawTodo(newTodoObj);

    saveToDos();
}

function handleDeleteToDo(event){ 
    const li = event.target.parentElement.parentElement;
    console.log(event.target.clicked);
    

    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    
    saveToDos();
}

function handleCheckBox(event) {
    const check = event.target.checked;
    const li = event.target.parentElement.parentElement;
    const text = li.querySelector("span");
    
    if (check){
        toDos.forEach((toDo)=>{
            if(toDo.id === parseInt(li.id)){
                toDo.checked = true;
            }
        });
        text.classList.add(CHECKED_TEXT);
    } else{
        toDos.forEach((toDo)=>{
            if(toDo.id === parseInt(li.id)){
                toDo.checked = false;
            }
        });
        text.classList.remove(CHECKED_TEXT);
    }
    saveToDos();
}

// just function
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function drawTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const div = document.createElement("div");
    const checkbox = document.createElement("input");
    const btn = document.createElement("button");

    checkbox.type = "checkbox";
    span.innerText = newTodo.text;
    btn.innerText = "❌";
    console.dir(btn);


    if (newTodo.checked){
        span.classList.add(CHECKED_TEXT);
        checkbox.checked = true;
    }

    li.appendChild(span);
    div.appendChild(checkbox);
    div.appendChild(btn);
    li.appendChild(div);

    checkbox.addEventListener("click", handleCheckBox);
    btn.addEventListener("click", handleDeleteToDo);

    toDoList.appendChild(li);
}


//Event listener
toDoForm.addEventListener("submit", handleToDoSubmit);

//when start
const savedToDos = localStorage.getItem(TODOS_KEY); 

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(drawTodo);
}


