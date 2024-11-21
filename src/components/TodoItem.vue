<template>
  <div class="todo-item">
    <span>{{ task.title }} ({{ priorityLabel }})</span>
    <button @click="$emit('edit')">Edit</button>
    <button @click="$emit('delete')">Delete</button>
  </div>
</template>

<script setup>
const props = defineProps({ task: Object });

const priorityLabel = computed(() => {
  switch (props.task.priority) {
    case 1:
      return 'Critical';
    case 2:
      return 'Moderate';
    case 3:
      return 'Optional';
  }
});
</script>

<style scoped>
/* Add styles as needed */
</style>
