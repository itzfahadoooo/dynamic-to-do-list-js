// Run code after DOM has loaded
document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load existing tasks from Local Storage
    loadTasks();

    // Add task on button click
    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        } else {
            alert('Please enter a task.');
        }
    });

    // Add task on Enter key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
                taskInput.value = '';
            } else {
                alert('Please enter a task.');
            }
        }
    });

    // Add a task to the DOM and optionally save to Local Storage
    function addTask(taskText, save = true) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn'; // Use className, not classList.add

        // Remove task on button click
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
            removeTaskFromStorage(taskText);
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Save task to Local Storage if needed
        if (save) {
            const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            tasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    // Remove task from Local Storage
    function removeTaskFromStorage(taskText) {
        let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        tasks = tasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }
});
