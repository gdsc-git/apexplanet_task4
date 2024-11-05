function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const task = taskInput.value;

    if (task) {
        const li = document.createElement("li");
        li.textContent = task;
        li.onclick = function () {
            taskList.removeChild(li);
            saveTasks();
        };
        taskList.appendChild(li);

        saveTasks();
        taskInput.value = "";
    }
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => tasks.push(li.textContent));
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task;
        li.onclick = function () {
            li.remove();
            saveTasks();
        };
        document.getElementById("taskList").appendChild(li);
    });
}

window.onload = loadTasks;
