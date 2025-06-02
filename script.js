let add = document.querySelector("#add");
let addTask = document.querySelector(".addTask");
let taskList = document.querySelector(".taskList");
let savedTasksContainer = document.querySelector(".savedTasksContainer");

let counter=1;

add.addEventListener("click", ()=>{
    let taskId = "Task" + counter;
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    let label = document.createElement("label");
    label.textContent="Task: " + counter;
    counter++;

    let input = document.createElement("input");
    input.type="text";
    input.placeholder="Enter the Task";
    
    let save = document.createElement("button");
    save.textContent="save";
    save.addEventListener("click", ()=>{
        let inputTask = input.value;
        if(inputTask.trim()!== ""){
            localStorage.setItem(taskId, inputTask);
            head.textContent = inputTask;
        }
    })
    let head = document.createElement("h1");
    let remove = document.createElement("button");
    remove.textContent="Delete";

    remove.addEventListener("click", ()=>{
        localStorage.removeItem(taskId);
        wrapper.remove();
    })
    wrapper.appendChild(label);
    wrapper.appendChild(input);
    wrapper.appendChild(save);
    wrapper.appendChild(remove);
    savedTasksContainer.appendChild(head);

    taskList.appendChild(wrapper);
    input.focus();
})