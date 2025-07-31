// Run code after DOM has fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim input value

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new <li> element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Set onclick event to remove task
        removeButton.onclick = () => {
            taskList.removeChild(listItem);
        };

        // Append button to list item, then list item to list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Event: Add task on button click
    addButton.addEventListener('click', addTask);

    // Event: Add task on "Enter" key press
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
