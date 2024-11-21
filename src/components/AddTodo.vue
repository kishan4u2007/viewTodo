<template>
  <form @submit.prevent="submitForm">
    <input v-model="localTask.title" type="text" placeholder="Enter task" required />
    <select v-model="localTask.priority" required>
      <!-- Default "Select Priority" option -->
      <option value="" disabled selected>Select Priority</option>
      <option value="critical">Critical</option>
      <option value="moderate">Moderate</option>
      <option value="optional">Optional</option>
    </select>
    <button type="submit">{{ localTask.id ? "Update" : "Add" }}</button>
  </form>
</template>

<script setup>
import { reactive, watch } from "vue";

const props = defineProps({
  task: {
    type: Object,
    default: () => ({ title: "", priority: "", id: null }),
  },
});
const emit = defineEmits(["save"]);

const localTask = reactive({ ...props.task });

watch(
  () => props.task,
  (newTask) => Object.assign(localTask, newTask),
  { immediate: true }
);

const submitForm = () => {
  if (!localTask.title || !localTask.priority) {
    alert("All fields are required!");
    return;
  }
  emit("save", { ...localTask });
  localTask.title = "";
  localTask.priority = ""; // Reset priority after submission
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
