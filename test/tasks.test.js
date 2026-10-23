import test from "node:test";
import assert from "node:assert";

import {
    addTask,
    getTasks,
    completeTask,
    deleteTask
} from "../src/tasks.js";

test('addTask should add a task to the tasks array', () => {
    const task  = addTask("Learn JavaScript");

    assert.equal(task.title, "Learn JavaScript");
    assert.equal(task.completed, false);
    assert.ok(task.id, "Task should have an id");
    
})

test('addTask should throw an error if the title is empty', () => {
    assert.throws(() => addTask(''), /Title cannot be empty/);
})

test('Delete task should remove a task from the tasks array', () => {
    const task = addTask("Learn Node.js");
    const response = deleteTask(task.id);

    assert.equal(response.message, "Task deleted successfully");
    assert.ok(response.task, "Response should contain the deleted task");
    assert.equal(response.task.title, "Learn Node.js");
})

test('deleteTask should throw an error if the task does not exist', () => {
    assert.throws(() => deleteTask(999), /Task not found/);
})

// test('completeTask should throw an error if the task does not exist', () => {
//     assert.throws(() => completeTask(999), /Task not found/);
// })