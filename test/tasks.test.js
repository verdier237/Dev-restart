import test from "node:test";
import assert from "node:assert";

import {
    addTask,
    getTasks,
    completeTask
} from "../src/tasks.js";

test('addTask should add a task to the tasks array', () => {
    const task  = addTask("Learn JavaScript");

    assert.equal(task.title, "Learn JavaScript");
    assert.equal(task.completed, false);
    assert.ok(task.id, "Task should have an id");
})