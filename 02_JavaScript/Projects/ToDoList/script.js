document.addEventListener('DOMContentLoaded', () => {
    // Grabbing all the elements
    const todoInput = document.getElementById('todo-input')
    const addTaskButton = document.getElementById('add-task-btn')
    const todoList = document.getElementById('todo-list')
    
    //parsing tasks into an array
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []

    tasks.forEach(task => {
        renderTasks(task)
    });

    // Add Task click event
    addTaskButton.addEventListener('click', function () {
        const taskText = todoInput.value.trim() //extracting user input
        if (taskText === "") return;   //if user inputs nothing

        //object for storing key values of the tasks
        const newTask = {
            id: Date.now(), // task id
            text: taskText, // user input
            completed: false // task status
        }

        tasks.push(newTask)
        saveTasks() //save the tasks into local storage
        todoInput.value = "" //clears the input
        console.log(tasks);
    })

    //shows up all the tasks added
    function renderTasks(task) {
        const li = document.createElement('li')
        li.setAttribute('data-id', task.id)
        if(task.completed) li.classList.add('completed')
        li.innerHTML = `
        <span>${task.text}</span>
        <button>Delete</button>
        `;
        li.addEventListener('click', (e)=>{
            if(e.target.tagName === 'BUTTON') return
        })

        todoList.appendChild(li)
    }

    //handling tasks into local storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
})
