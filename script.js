// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select relevant elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define the addTask function
    function addTask() {
        const taskText = taskInput.value.trim();

        // Validate input
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create list item and set text
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn'; // Use className instead of classList.add

        // Add remove functionality
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append remove button to list item and list item to task list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear input field
        taskInput.value = '';
    }

    // Attach event to add button
    addButton.addEventListener('click', addTask);

    // Allow Enter key to add task
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
