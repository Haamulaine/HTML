document.getElementById("addBtn").addEventListener("click", addTask);
document.getElementById("taskInput").addEventListener("keydown", function(e) {
    if (e.key === "Enter") addTask();
});

function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") return;

    const task = document.createElement("div");
    task.className ="task not-done";

    const label = document.createElement("span");
    label.textContent = text;

    const remove = document.createElement("button");
    remove.className = "remove-btn";
    remove.innerText = "X";

    remove.onclick = (e) => {
        e.stopPropagation();
        task.remove();
    };

    task.onclick = () => {
        task.classList.toggle("done");
        task.classList.toggle("not-done");
    };

    task.appendChild(label);
    task.appendChild(remove);

    document.getElementById("taskList").appendChild(task);
    input.value = "";
}