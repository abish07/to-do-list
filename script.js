let add = document.querySelector("#add");
let addTask = document.querySelector(".addTask");
let taskList = document.querySelector(".taskList");
let rightContainer = document.querySelector(".right-container");

let counter=1;
add.addEventListener("click", ()=>{
    let taskId = "Task" + counter;
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    let label = document.createElement("label");
    label.textContent="Task: " + counter;
    let taskNumber = "Task " + counter + ":  " ;
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
            tasks.textContent = taskNumber + inputTask;
        }
    })
    let tasks = document.createElement("ol");
    tasks.classList.add("unorderlist-of-task");
    let remove = document.createElement("button");
    remove.textContent="Delete";
    
    remove.addEventListener("click", ()=>{
        localStorage.removeItem(taskId);
        wrapper.remove();
        tasks.remove();
    })
    wrapper.appendChild(label);
    wrapper.appendChild(input);
    wrapper.appendChild(save);
    wrapper.appendChild(remove);
    rightContainer.appendChild(tasks);
    
    taskList.appendChild(wrapper);
    input.focus();
})