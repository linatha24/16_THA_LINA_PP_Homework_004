let selectedPriority = "Medium";
let selectedStatus = "To Do";
let editingTask = null;

function setPriority(priority) {
    selectedPriority = priority;
}
function deleteTask(button) {
    button.closest('.task-item').remove();
}
function editTask(button){
    editingTask = button.closest('.task-item');

    const oldName = editingTask.querySelector('.task-name').innerText;
    const oldPriority = editingTask.querySelector('.task-priority').innerText;
    const oldStatus = editingTask.querySelector('.task-status').innerText;

    document.getElementById("inputBox").value = oldName;
    selectedPriority = oldPriority;
    selectedStatus = oldStatus;

    document.getElementById("addButton").innerText = "Update Task";
}

function setStatus(status) {
    selectedStatus = status;
}
function addTask() {
    const taskInput = document.getElementById("inputBox");
    const taskName = taskInput.value.trim();

    if(taskName === ""){
        alert("Please fill all fields");
        return;
    }

    let priorityColor = "text-[orange]";
    if (selectedPriority === "High") priorityColor = "text-[red]";
    if(selectedPriority === "Low") priorityColor = "text-[green]";

    if(editingTask){
        editingTask.querySelector('.task-name').innerText = taskName;

        const priorityElement = editingTask.querySelector('.task-priority');
        priorityElement.innerText = selectedPriority;
        priorityElement.className = `task-priority ${priorityColor}`;

        editingTask.querySelector('.task-status').innerText = selectedStatus;

        editingTask = null;
        document.getElementById("addButton").innerText = "Add Task";
    }else{
        const tasklist = document.getElementById("taskList");

    const taskHTML = `
         <div
        class="task-item bg-[#FFFFFF] rounded-[20px] py-8 px-6 flex flex-wrap justify-around items-center gap-8 shadow-lg mt-8"
      >
        <div class="flex justify-between gap-4 font-extrabold text-2xl w-full">
          <p>${taskName}</p>
          <p class="${priorityColor}">${selectedPriority}</p>
          <p>${selectedStatus}</p>
          <div>
            <button type="button" class="text-[blue]"
              ><i class="fa-regular fa-pen-to-square"></i
            ></button>
            <button type="button" class="text-[red]" onclick="deleteTask(this)"
              ><i class="fa-regular fa-trash-can"></i
            ></button>
          </div>
        </div>
      </div>
      
    `;
    tasklist.insertAdjacentHTML('beforeend', taskHTML);
}


    taskInput.value = "";
    selectedPriority = "Medium";
    selectedStatus = "To Do";


}