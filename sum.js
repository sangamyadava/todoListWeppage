document.addEventListener('DOMContentLoaded', function () {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');
  const taskCount = document.getElementById('taskCount');

  addTaskBtn.addEventListener('click', addTask);

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText.length > 0) {
      const listItem = document.createElement('li');
      listItem.className = 'task-item';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', toggleTask);

      const taskLabel = document.createElement('label');
      taskLabel.textContent = taskText;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', deleteTask);

      listItem.appendChild(checkbox);
      listItem.appendChild(taskLabel);
      listItem.appendChild(deleteButton);

      taskList.appendChild(listItem);

      updateTaskCount();
      taskInput.value = '';
    }
  }

  function toggleTask() {
    this.parentNode.classList.toggle('checked');
    updateTaskCount();
  }

  function deleteTask() {
    this.parentNode.remove();
    updateTaskCount();
  }

  function updateTaskCount() {
    const tasks = document.querySelectorAll('.task-item');
    taskCount.textContent = `Total tasks: ${tasks.length}`;
  }
});
