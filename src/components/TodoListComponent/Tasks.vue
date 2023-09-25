<template>
  <div class="task">
    <add-task @addTask="createNewTask"></add-task>
    <list-task
      :list-tasks="listTasks"
      @deleteTask="deleteTask"
      @changeTask="setList"
    ></list-task>
  </div>
</template>

<script>
import AddTask from "./AddTask.vue";
import ListTask from "./ListTask.vue";
export default {
  name: "tasks",
  components: {
    AddTask,
    ListTask,
  },
  data() {
    return {
      listTasks: [],
    };
  },
  methods: {
    createNewTask(value) {
      let newTask = {
        name: value,
        completed: false
      }

      this.listTasks.push(newTask)
      this.setList()
    },
    setList() {
      localStorage.setItem('todoList', JSON.stringify(this.listTasks))
    },
    deleteTask(index) {
      this.listTasks.splice(index, 1)
      this.setList()
    },
    getList() {
      const localStorageData = localStorage.getItem('todoList')

      if (localStorageData && localStorageData.length > 0) {
        this.listTasks = JSON.parse(localStorageData)
        return
      }

      this.listTasks = [];
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style lang="scss" scoped>
.task {
  color: #fbf9fe;
  box-sizing: border-box;
  width: 100%;
  max-width: 1080px;
  padding: 0 20px;
}
</style>
