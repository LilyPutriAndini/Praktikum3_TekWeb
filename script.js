document.addEventListener('DOMContentLoaded', () => {
    function addTask() {
        const taskInput = document.getElementById('newTask');
        const taskValue = taskInput.value.trim();

        if (taskValue) {
            const taskList = document.getElementById('taskList');
            const newTask = document.createElement('li');
            newTask.textContent = taskValue;

            const closeBtn = document.createElement('span');
            closeBtn.textContent = 'X';
            closeBtn.classList.add('close');
            closeBtn.onclick = () => deleteTask(newTask);

            newTask.appendChild(closeBtn);
            newTask.ondblclick = () => editTask(newTask);
            newTask.onclick = () => toggleComplete(newTask);
            taskList.appendChild(newTask);
            taskInput.value = '';
        }
    }

    function deleteTask(element) {
        element.remove();
    }

    function editTask(element) {
        const newTaskValue = prompt("Edit your task:", element.firstChild.textContent);
        if (newTaskValue) {
            element.firstChild.textContent = newTaskValue;
        }
    }

    function toggleComplete(element) {
        element.classList.toggle('completed');
    }

    function changeBackgroundColor() {
        const color = document.getElementById('bgColor').value;
        document.body.style.backgroundColor = color;
    }

    function changeFontSize() {
        const fontSize = document.getElementById('fontSize').value + 'px';
        document.body.style.fontSize = fontSize;
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
    }

    function changeFontStyle() {
        const fontStyle = document.getElementById('fontStyle').value;
        document.body.style.fontFamily = fontStyle;
    }

    // Attach event listeners
    document.getElementById('newTask').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    document.getElementById('bgColor').addEventListener('change', changeBackgroundColor);
    document.getElementById('fontSize').addEventListener('input', changeFontSize);
    document.getElementById('toggleDarkMode').addEventListener('click', toggleDarkMode);
    document.getElementById('fontStyle').addEventListener('change', changeFontStyle);

    window.addTask = addTask;
    window.deleteTask = deleteTask;
    window.editTask = editTask;
    window.changeBackgroundColor = changeBackgroundColor;
    window.changeFontSize = changeFontSize;
    window.toggleDarkMode = toggleDarkMode;
    window.changeFontStyle = changeFontStyle;
});
