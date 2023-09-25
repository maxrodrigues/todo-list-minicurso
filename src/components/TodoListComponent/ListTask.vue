<template>
  <div class="listTask">
    <div :key="index" v-for="(listTask, index) in listTasks" class="listTask__item">
      <label class="listTask__label">
        <input type="checkbox" v-model="listTask.completed" @change="changeTask(index)" class="listTask__input"/>
        {{ listTask.name }}
      </label>
      <span @click="deleteTask(index)" class="listTask__span">
        <delete-icon></delete-icon>
      </span>
    </div>
  </div>
</template>

<script>
import deleteIcon from "../icons/deleteIcon";
export default {
  name: "list-task",
  components: {
    deleteIcon
  },
  props: {
    listTasks: {
      type: Array,
      required: true,
    },
  },
  methods: {
    changeTask(index) {
      this.$emit('changeTask', index)
    },
    deleteTask(index) {
      this.$emit('deleteTask', index)
    },
  },
};
</script>

<style lang="scss" scoped>

.listTask {
  margin-top: 25px;
}

.listTask__item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin: 10px 0;
}

.listTask__item:hover {
  background-color: #2c3e50;
}

.listTask__label {
  font-family: sans-serif;
  font-size: 1.25rem;
}

</style>
