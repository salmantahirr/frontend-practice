const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = text;

  // Click on text to mark as done
  span.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = "";
}

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});