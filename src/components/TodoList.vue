<template>
  <ul class="todo-list">
    <li v-for="(task, index) in tasks" :key="index" class="todo-item">
      <span>{{ task.title }} ({{ priorityLabel(task.priority) }})</span>
      <div>
        <button @click="$emit('edit', task, index)">Edit</button>
        <button @click="$emit('delete', index)">Delete</button>
      </div>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  tasks: Array,
});

// Convert priority value to a label (Critical, Moderate, Optional)
const priorityLabel = (priority) => {
  switch (priority) {
    case 'critical':
      return 'Critical';
    case 'moderate':
      return 'Moderate';
    case 'optional':
      return 'Optional';
    default:
      return 'Unknown';
  }
};
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: white;
  border: 1px solid #ccc;
  margin-bottom: 5px;
}

.todo-item.critical {
  background-color: #ffdddd;
}

.todo-item.moderate {
  background-color: #fff5b1;
}

.todo-item.optional {
  background-color: #d3f9d8;
}
</style>
