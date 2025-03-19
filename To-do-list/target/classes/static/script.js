const apiUrl = "http://localhost:8080/tasks";

async function fetchTasks() {
    const response = await fetch(apiUrl);
    const tasks = await response.json();
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.name;
        li.onclick = () => deleteTask(task.id);
        taskList.appendChild(li);
    });
}

async function addTask() {
    const taskInput = document.getElementById("taskInput");
    if (taskInput.value.trim() === "") return;
    
    await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: taskInput.value, completed: false })
    });
    taskInput.value = "";
    fetchTasks();
}

async function deleteTask(id) {
    await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
    fetchTasks();
}

fetchTasks();
