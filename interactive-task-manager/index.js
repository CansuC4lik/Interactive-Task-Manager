const to_do= document.getElementById("to_do");
const taskList = document.getElementById("taskList");
function new_task(){
    const task_Value = to_do.value;
    const new_to_do = document.createElement("li");
    new_to_do.innerText=task_Value;

    const deleteBtn=document.createElement("button");
    deleteBtn.innerText = "🗑️";

    const checkBtn = document.createElement ("button");
    checkBtn.innerText = "✔️";

    checkBtn.onclick = function(){
        new_to_do.classList.toggle("done");
    }

    deleteBtn.onclick= function(){
        new_to_do.remove();

    }

    if (task_Value===""){
        return;
    }

    new_to_do.appendChild(deleteBtn);
    new_to_do.appendChild(checkBtn);
    taskList.appendChild(new_to_do);
    to_do.value = "";
}