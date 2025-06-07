let add = document.querySelector("#add");
let addTask = document.querySelector(".addTask");
let taskList = document.querySelector(".taskList");
let rightContainer = document.querySelector(".right-container");

let counter=1;

window.onload =()=>{
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((taskObj, index) => {
        createTaskElement(taskObj.taskId, taskObj.text, index + 1);
        counter = tasks.length + 1; // Ensure counter resumes correctly
    });
}

add.addEventListener("click", ()=>{
    let taskId = "Task" + counter;
    createTaskElement(taskId,"",counter)
    counter++;
});
function createTaskElement(taskId, taskText,displayIndex){
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    let label = document.createElement("label");
    label.textContent="Task: " + counter;
    
    let input = document.createElement("input");
    input.type="text";
    input.placeholder="Enter the Task";
    input.value = taskText || "";
    
    let tasks = document.createElement("ol");
    tasks.classList.add("unorderlist-of-task");
    if(taskText){
        tasks.textContent = "Task" + displayIndex + ": " + taskText;
    }
    
    let save = document.createElement("button");
    save.textContent="save";
    save.addEventListener("click", ()=>{
        let inputTask = input.value.trim();
        if(inputTask.trim()!== ""){
            tasks.textContent = "Task" + displayIndex + ": " + inputTask;
            let taskArray = JSON.parse(localStorage.getItem("tasks")) || [];
            let existingIndex = taskArray.findIndex(task => task.taskId === taskId);
            if (existingIndex !== -1) {
                taskArray[existingIndex].text = inputTask; // Update
            } else {
                taskArray.push({ taskId, text: inputTask }); // Add new
            }
            localStorage.setItem("tasks", JSON.stringify(taskArray));
        }
    })
    let remove = document.createElement("button");
    remove.textContent="Delete";
    
    remove.addEventListener("click", ()=>{
        let taskArray = JSON.parse(localStorage.getItem("tasks")) || [];
        taskArray = taskArray.filter(task => task.taskId !== taskId);
        localStorage.setItem("tasks", JSON.stringify(taskArray));
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
}