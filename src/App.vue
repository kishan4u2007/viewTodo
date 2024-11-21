<template>
  <div class="app">
    <h1>To-Do List with Priorities</h1>

    <!-- Add/Edit Task Form -->
    <AddTodo :task="editingTask" @save="saveTask" />

    <!-- Clear All Tasks Button -->
    <button @click="clearTasks">Clear All Tasks</button>

    <!-- Sort by Priority Button -->
    <button @click="sortTasks">Sort by Priority</button>

    <!-- To-Do List -->
    <TodoList :tasks="sortedTasks" @edit="editTask" @delete="deleteTask" />

    <!-- No Tasks Message -->
    <p v-if="tasks.length === 0">No tasks available. Add some tasks to get started!</p>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import AddTodo from './components/AddTodo.vue';
import TodoList from './components/TodoList.vue';
import './assets/style.css';

// State for tasks and editing task
const tasks = ref(JSON.parse(localStorage.getItem('tasks')) || []);
const editingTask = ref(null);

// Watcher to save tasks in localStorage
watch(tasks, (newTasks) => {
  localStorage.setItem('tasks', JSON.stringify(newTasks));
}, { deep: true });

// Save a new or edited task
const saveTask = (task) => {
  if (editingTask.value) {
    tasks.value[editingTask.value.index] = task;
    editingTask.value = null;
  } else {
    tasks.value.push(task);
  }
};

// Edit task
const editTask = (task, index) => {
  editingTask.value = { ...task, index };
};

// Delete a task
const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

// Clear all tasks
const clearTasks = () => {
  tasks.value = [];
};

// Sort tasks by priority (Critical, Moderate, Optional)
const sortTasks = () => {
  const priorityOrder = { critical: 1, moderate: 2, optional: 3 };

  tasks.value.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
};

// Computed property to return sorted tasks
const sortedTasks = computed(() => tasks.value);
</script>

<style>
/* Basic styling for better visibility */
.app {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

button {
  margin: 10px;
  padding: 10px 15px;
  font-size: 14px;
}

.todo-list {
  list-style: none;
  padding: 0;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: #f9f9f9;
  border: 1px solid #ddd;
  margin: 5px 0;
}
</style>
