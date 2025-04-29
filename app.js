let tasks = []; // Array to store tasks


function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; 

    tasks.map((task, index) => {
        const taskCard = `
            <div class="col">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${task.title}</h5>
                        <p class="card-text">${task.desc}</p>
                        <p class="card-text"><small class="text-muted">Date: ${task.date}</small></p>
                        <p class="card-text">Completion: ${task.perc}%</p>
                        <button class="btn btn-warning btn-sm" onclick="openEditModal(${index})">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                    </div>
                </div>
            </div>
        `;
        taskList.innerHTML += taskCard;
    });
}

// Function to add a new task
function addTask() {
    const title = document.getElementById("taskTitle").value;
    const desc = document.getElementById("taskDesc").value;
    const date = document.getElementById("taskDate").value;
    const perc = document.getElementById("taskPerc").value;

    tasks.push({ title, desc, date, perc });
    renderTasks();

    // Close the modal
    const addTaskModal = bootstrap.Modal.getInstance(document.getElementById("addTaskModal"));
    addTaskModal.hide();

    // Clear the form
    document.getElementById("addTaskForm").reset();
}

// Function to open the edit modal
function openEditModal(index) {
    const task = tasks[index];
    document.getElementById("editTaskId").value = index;
    document.getElementById("editTaskTitle").value = task.title;
    document.getElementById("editTaskDesc").value = task.desc;
    document.getElementById("editTaskDate").value = task.date;
    document.getElementById("editTaskPerc").value = task.perc;

    const editTaskModal = new bootstrap.Modal(document.getElementById("editTaskModal"));
    editTaskModal.show();
}

// Function to update a task
function updateTask() {
    const index = document.getElementById("editTaskId").value;
    const title = document.getElementById("editTaskTitle").value;
    const desc = document.getElementById("editTaskDesc").value;
    const date = document.getElementById("editTaskDate").value;
    const perc = document.getElementById("editTaskPerc").value;

    tasks[index] = { title, desc, date, perc };
    renderTasks();

    // Close the modal
    const editTaskModal = bootstrap.Modal.getInstance(document.getElementById("editTaskModal"));
    editTaskModal.hide();
}

// Initialize with some default tasks
tasks = [
    { title: "Task 1", desc: "This is the first task.", date: "2023-10-01", perc: 30 },
    { title: "Task 2", desc: "This is the second task.", date: "2023-10-05", perc: 70 },
];

// Render tasks on page load
renderTasks();