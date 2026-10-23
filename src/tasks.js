let nextId = 1;

const tasks = [];

export function addTask(title) {
    // empty title check
    if(!title || title.trim() === '') {
        throw new Error('Title cannot be empty');
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
    throw new Error('Task not found');

}

export function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    const task = tasks[index];
    if(index !== -1) {
        tasks.splice(index,1);
        return { task, message: 'Task deleted successfully' };
    }
    throw new Error('Task not found');
}