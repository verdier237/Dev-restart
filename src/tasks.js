let nextId = 1;

const tasks = [];

export function addTask(title) {
    // empty title check
    if(!title || title.trim() === '') {
        return { error: 'Title cannot be empty' };
    }
    // Create task
    const task = {
        id:nextId++,
        title,
        completed:false
    }
    // Add task to tasks array
    tasks.push(task);

    return task;

}

export function getTasks() {
    return tasks;
}

export function completeTask(id) {
    const task = tasks.find(task => task.id === id);
    if(task) {
       return task.completed = true;
    }
    return { error: 'Task not found' };

}